from pathlib import Path

p = Path('app/layout.js')
s = p.read_text()

old = '"NoorPath — Your Daily Prayer Companion"'
new = '"NoorPath - Prayer Companion"'

assert s.count(old) == 3, f'expected 3 matches, found {s.count(old)}'
s = s.replace(old, new)

assert 'Your Daily Prayer Companion' not in s, 'old title remains'
assert s.count(new) == 3, 'replacement count wrong'
assert '\u2014' not in s, 'em dash remains in layout.js'

p.write_text(s)
print('OK - canonical name applied to 3 titles')
