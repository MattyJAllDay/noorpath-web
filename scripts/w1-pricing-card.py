from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

pairs = [
    ('<div style={label()}>PREMIUM PRICING</div>',
     '<div style={label()}>GETTING STARTED</div>'),

    ("<div style={{ fontFamily:mn, fontWeight:700, fontSize:52, color:'#FFFFFF', lineHeight:1, letterSpacing:'-0.02em', marginBottom:8 }}>$3.33</div>",
     "<div style={{ fontFamily:bd, fontWeight:700, fontSize:52, color:'#FFFFFF', lineHeight:1, letterSpacing:'-0.02em', marginBottom:8 }}>Free</div>"),

    ('<div style={{ fontFamily:bd, fontSize:13, color:C.textSec, marginBottom:20 }}>per month, billed annually</div>',
     '<div style={{ fontFamily:bd, fontSize:13, color:C.textSec, marginBottom:20 }}>to download</div>'),

    ('<div style={{ fontFamily:bd, fontSize:13, color:C.textLight, marginBottom:4 }}>Free to start</div>',
     '<div style={{ fontFamily:bd, fontSize:13, color:C.textLight, marginBottom:4 }}>Premium available</div>'),
]

for old, new in pairs:
    assert s.count(old) == 1, f'found {s.count(old)} for: {old[:60]}'

for old, new in pairs:
    s = s.replace(old, new)

p.write_text(s)
print('OK - pricing card updated (4 changes)')
