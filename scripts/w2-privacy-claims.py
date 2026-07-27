from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

def swap(old, new, label):
    global s
    assert s.count(old) == 1, f'{label}: found {s.count(old)}'
    s = s.replace(old, new)
    print(f'swap: {label}')

swap("    statLabel: 'data points sent to servers',",
     "    statLabel: 'ads, trackers, or data sold',",
     'overlay statLabel')

swap("<div style={{ fontFamily:bd, fontSize:12, color:'rgba(245,240,232,0.4)', marginBottom:16 }}>data points sent to servers</div>",
     "<div style={{ fontFamily:bd, fontSize:12, color:'rgba(245,240,232,0.4)', marginBottom:16 }}>ads, trackers, or data sold</div>",
     'card statLabel')

swap("{['Zero ad tracking','No account required','On-device storage only'].map(t => (",
     "{['Zero ad tracking','No account required','Cycle data never leaves your device'].map(t => (",
     'card bullets')

swap("    list: ['Zero ad tracking', 'No account required', 'On-device storage only', 'No data harvesting'],",
     "    list: ['Zero ad tracking', 'No account required', 'Cycle data never leaves your device', 'No data harvesting'],",
     'overlay list')

swap("      'Your journal entries, prayer history, cycle data — none of it ever leaves your device. Not to us. Not to anyone.',",
     "      'Your cycle data never leaves your device — it is never backed up, never transmitted, never shared. Not with us. Not with anyone.',",
     'overlay body 1')

swap("      'There is no NoorPath account required. Your data stays on your device. Your spiritual practice belongs to you alone.',",
     "      'No account is required to use NoorPath. Cloud backup is optional and Premium-only — if you never turn it on, your practice stays on your device.',",
     'overlay body 2')

assert 'data points sent to servers' not in s, 'statLabel remains'
assert 'On-device storage only' not in s, 'bullet remains'

p.write_text(s)
print('OK - privacy claims corrected')
