from pathlib import Path

p = Path('app/opengraph-image.jsx')
s = p.read_text()

old = "          Nothing leaves your device.\n"
new = "          Your cycle data never leaves your device.\n"

assert s.count(old) == 1, f'expected 1 match, found {s.count(old)}'
s = s.replace(old, new)

assert 'Nothing leaves your device' not in s, 'old claim remains'

p.write_text(s)
print('OK - OG image privacy line corrected')
