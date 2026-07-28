from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

# 1. card unit: XP -> Noor
old_unit = "<div style={{ fontFamily:bd, fontSize:13, color:C.textTert }}>0 XP</div>"
new_unit = "<div style={{ fontFamily:bd, fontSize:13, color:C.textTert }}>0 Noor</div>"
assert s.count(old_unit) == 1, f'card unit found {s.count(old_unit)}'
s = s.replace(old_unit, new_unit)

# 2. level list: four invented states -> five real levels
old_list = """      { state: 'Dim', desc: 'Just starting out' },
      { state: 'Bright', desc: 'Building momentum' },
      { state: 'Radiant', desc: 'Consistent practice' },
      { state: 'Luminous', desc: 'Deeply established' },
"""
new_list = """      { state: 'First Light', desc: 'Every journey begins with a single flame.' },
      { state: 'Kindled', desc: 'The first spark takes hold.' },
      { state: 'Glowing', desc: 'Seven days of showing up. Your light is seen.' },
      { state: 'Radiant', desc: 'A month of devotion. Your warmth reaches others.' },
      { state: 'Full Light', desc: 'Pure light. A hundred days of faithful return.' },
"""
assert s.count(old_list) == 1, f'level list found {s.count(old_list)}'
s = s.replace(old_list, new_list)

assert '0 XP' not in s, 'XP remains'
assert "'Dim'" not in s and "'Luminous'" not in s, 'old level names remain'

p.write_text(s)
print('OK - Noor levels aligned to app')
