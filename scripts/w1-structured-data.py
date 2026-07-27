from pathlib import Path

p = Path('app/layout.js')
s = p.read_text()

old = '''            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "url": "https://noorpath.app"'''

new = '''            "offers": {
              "@type": "Offer",
              "price": "0"
            },
            "url": "https://noorpath.app",
            "installUrl": "https://apps.apple.com/app/noorpath-prayer-companion/id6758610154"'''

assert s.count(old) == 1, f'expected 1 match, found {s.count(old)}'
s = s.replace(old, new)

assert 'priceCurrency' not in s, 'priceCurrency remains'
assert 'id6758610154' in s, 'app store link missing'

p.write_text(s)
print('OK - structured data updated')
