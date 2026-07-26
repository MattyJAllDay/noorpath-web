from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

pairs = [
    ("<div style={{ fontFamily:mn, fontSize:24, fontWeight:700, color:C.textLight, marginBottom:4 }}>$39.99 / year</div>",
     "<div style={{ fontFamily:bd, fontSize:24, fontWeight:700, color:C.textLight, marginBottom:4 }}>Annual</div>"),

    ("<div style={{ fontFamily:bd, fontSize:13, color:dm }}>Only $3.33 per month \u2014 save 33% annually</div>",
     "<div style={{ fontFamily:bd, fontSize:13, color:dm }}>Best value \u2014 save when you pay yearly</div>"),

    ("<div style={{ fontFamily:mn, fontSize:24, fontWeight:700, color:C.textLight, marginBottom:4 }}>$4.99 / month</div>",
     "<div style={{ fontFamily:bd, fontSize:24, fontWeight:700, color:C.textLight, marginBottom:4 }}>Monthly</div>"),
]

for old, new in pairs:
    assert s.count(old) == 1, f'found {s.count(old)} for: {old[-40:]}'

for old, new in pairs:
    s = s.replace(old, new)

assert '39.99' not in s, '39.99 remains'
assert '4.99' not in s, '4.99 remains'
assert '3.33' not in s, '3.33 remains'

p.write_text(s)
print('OK - plan boxes updated, no prices remain in page.jsx')
