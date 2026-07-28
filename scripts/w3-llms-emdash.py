from pathlib import Path

p = Path('public/llms.txt')
s = p.read_text()

old = 'prayer habit — calmly, privately, and on their own terms.'
new = 'prayer habit, calmly, privately, and on their own terms.'

assert s.count(old) == 1, f'expected 1 match, found {s.count(old)}'
s = s.replace(old, new)

assert '\u2014' not in s, 'em dash remains in llms.txt'

p.write_text(s)
print('OK - llms.txt em dash removed')
