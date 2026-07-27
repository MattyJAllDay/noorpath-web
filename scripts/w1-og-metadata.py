from pathlib import Path

p = Path('app/layout.js')
s = p.read_text()

# openGraph images array
og_block = """    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NoorPath — Your Daily Prayer Companion",
      },
    ],
"""
assert s.count(og_block) == 1, f'og images block found {s.count(og_block)}'
s = s.replace(og_block, '')

# twitter images array
tw_line = '    images: ["/og-image.png"],\n'
assert s.count(tw_line) == 1, f'twitter images line found {s.count(tw_line)}'
s = s.replace(tw_line, '')

assert 'og-image.png' not in s, 'reference remains'

p.write_text(s)
print('OK - dead og-image.png references removed')
