from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

old = """          <a key={t} href={h} style={{ fontFamily:bd, fontSize:13, color:'rgba(41,22,2,0.25)', textDecoration:'none', marginLeft:24 }}>{t}</a>
        ))}"""

new = """          <a key={t} href={h}
             {...(h.startsWith('http') ? { target:'_blank', rel:'noopener noreferrer' } : {})}
             style={{ fontFamily:bd, fontSize:13, color: h.startsWith('http') ? 'rgba(41,22,2,0.5)' : 'rgba(41,22,2,0.25)', textDecoration:'none', marginLeft:24 }}>{t}</a>
        ))}"""

assert s.count(old) == 1, f'expected 1 match, found {s.count(old)}'
s = s.replace(old, new)

assert 'noopener noreferrer' in s, 'rel attribute missing'

p.write_text(s)
print('OK - external links open in new tab, social links given more weight')
