from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

old = "style={{ height:56, width:'auto', display:'block' }}"
new = "style={{ height:72, width:'auto', display:'block' }}"

assert s.count(old) == 1, f'expected 1 match, found {s.count(old)}'
p.write_text(s.replace(old, new))
print('OK - badge now 72px')
