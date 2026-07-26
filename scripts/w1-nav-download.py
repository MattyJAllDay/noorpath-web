from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

end_anchor = '}}>Get Early Access</button>'
start_anchor = '<button onClick={onCTA} style={{'

assert s.count(end_anchor) == 1, f'end anchor found {s.count(end_anchor)}'

j = s.index(end_anchor) + len(end_anchor)
i = s.rfind(start_anchor, 0, j)
assert i != -1, 'no button opening found before end anchor'

new_block = (
    '<a href="https://apps.apple.com/app/noorpath-prayer-companion/id6758610154"\n'
    '           target="_blank" rel="noopener noreferrer"\n'
    '           style={{\n'
    '          fontFamily:bd, fontSize:14, fontWeight:600,\n'
    "          background:C.orange, color:'#fff',\n"
    "          padding:'9px 20px', borderRadius:999, marginLeft:28,\n"
    "          textDecoration:'none', display:'inline-block', lineHeight:1,\n"
    '        }}>Download</a>'
)

print('--- REPLACING ---')
print(s[i:j])
print('--- WITH ---')
print(new_block)

p.write_text(s[:i] + new_block + s[j:])
print('OK - nav CTA now Download')
