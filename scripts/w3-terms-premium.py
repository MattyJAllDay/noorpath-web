from pathlib import Path

p = Path('app/legal/terms/page.jsx')
s = p.read_text()

old = '<Para>Premium is an optional paid subscription. Current pricing is shown in the app before you subscribe, and on our App Store listing, in your local currency.</Para>'
new = '<Para>Premium is an optional paid subscription that unlocks additional features such as cycle-aware tracking, complete prayer history, and an expanded adhan collection. Current pricing is shown in the app before you subscribe, and on our App Store listing, in your local currency.</Para>'

assert s.count(old) == 1, f'expected 1 match, found {s.count(old)}'
s = s.replace(old, new)

assert '\u2014' not in s, 'em dash introduced'

p.write_text(s)
print('OK - Premium features line added to Terms')
