from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

# 1. trial line: drop guarantee, drop now-redundant bottom margin
old_line = (
    "<div style={{ fontFamily:bd, fontSize:12, color:dt, marginBottom:6 }}>\n"
    "          7-day free trial \u00b7 30-day money-back guarantee \u00b7 Cancel anytime\n"
    "        </div>"
)
new_line = (
    "<div style={{ fontFamily:bd, fontSize:12, color:dt }}>\n"
    "          7-day free trial \u00b7 Cancel anytime\n"
    "        </div>"
)
assert s.count(old_line) == 1, f'trial line found {s.count(old_line)}'
s = s.replace(old_line, new_line)

# 2. remove founding member line entirely
founding = (
    "\n        <div style={{ fontFamily:bd, fontSize:12, color:C.turquoiseDk }}>\n"
    "          Founding member pricing \u2014 your rate locks in today\n"
    "        </div>"
)
assert s.count(founding) == 1, f'founding block found {s.count(founding)}'
print('--- REMOVING ---')
print(founding.strip())
s = s.replace(founding, '')

assert 'money-back' not in s, 'guarantee text remains'
assert 'Founding member' not in s, 'founding text remains'

p.write_text(s)
print('OK - overlay footer updated')
