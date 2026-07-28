from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

old = "{[['Privacy Policy','/legal/privacy'],['Terms of Service','/legal/terms'],['Contact','mailto:support@noorpath.app']].map(([t,h]) => ("
new = "{[['Instagram','https://www.instagram.com/getnoorpath/'],['TikTok','https://www.tiktok.com/@getnoorpath'],['Privacy Policy','/legal/privacy'],['Terms of Service','/legal/terms'],['Contact','mailto:support@noorpath.app']].map(([t,h]) => ("

assert s.count(old) == 1, f'expected 1 match, found {s.count(old)}'
s = s.replace(old, new)

assert 'getnoorpath' in s, 'social links missing'

p.write_text(s)
print('OK - social links added to footer')
