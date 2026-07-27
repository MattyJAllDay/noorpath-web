from pathlib import Path

p = Path('app/legal/terms/page.jsx')
s = p.read_text()

old = '<Para>Additional features are available for $4.99 USD per month or $39.99 USD per year (regional pricing varies).</Para>'
new = '<Para>Premium is an optional paid subscription. Current pricing is shown in the app before you subscribe, and on our App Store listing, in your local currency.</Para>'

assert s.count(old) == 1, f'expected 1 match, found {s.count(old)}'
s = s.replace(old, new)

assert '4.99' not in s, '4.99 remains'
assert '39.99' not in s, '39.99 remains'

p.write_text(s)
print('OK - terms pricing replaced with pointer')
