from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

# 1. remove the breakdown data array
arr_start = '  const breakdown = ['
arr_end = "    ['Total value', '$20.61/mo'],\n  ];\n"
assert s.count(arr_start) == 1, f'array start found {s.count(arr_start)}'
assert s.count(arr_end) == 1, f'array end found {s.count(arr_end)}'
i = s.index(arr_start)
j = s.index(arr_end) + len(arr_end)
assert j > i, 'array anchors out of order'
print('--- REMOVING ARRAY ---')
print(s[i:j])
s = s[:i] + s[j:]

# 2. remove the rendered block: divider + heading + map
blk_start = '      {/* Value breakdown */}'
blk_end = '      {/* Plan options */}'
assert s.count(blk_start) == 1, f'block start found {s.count(blk_start)}'
assert s.count(blk_end) == 1, f'block end found {s.count(blk_end)}'
i2 = s.index(blk_start)
j2 = s.index(blk_end)
assert j2 > i2, 'block anchors out of order'
print('--- REMOVING JSX ---')
print(s[i2:j2])
s = s[:i2] + s[j2:]

assert 'breakdown' not in s, 'stale breakdown reference remains'
assert '20.61' not in s, 'stale total remains'

p.write_text(s)
print('OK - value breakdown removed')
