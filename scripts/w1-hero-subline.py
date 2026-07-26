from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

old = '<span>Premium features from $4.99/month</span>'
new = '<span>7-day free trial on Premium</span>'

assert s.count(old) == 1, f'expected 1 match, found {s.count(old)}'
p.write_text(s.replace(old, new))
print('OK - hero sub-line updated')
