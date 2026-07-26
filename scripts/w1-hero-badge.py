from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

end_anchor = 'className="hero-cta-btn">Get notified</button>'
start_anchor = '<button onClick={onCTA} style={{'

assert s.count(end_anchor) == 1, f'end anchor found {s.count(end_anchor)}'

j = s.index(end_anchor) + len(end_anchor)
i = s.rfind(start_anchor, 0, j)
assert i != -1, 'no button opening found before end anchor'

new_block = (
    '<a href="https://apps.apple.com/app/noorpath-prayer-companion/id6758610154"\n'
    '           target="_blank" rel="noopener noreferrer"\n'
    "           style={{ display:'inline-block' }}>\n"
    '          <img src="/app-store-badge.svg"\n'
    '               alt="Download NoorPath on the App Store"\n'
    "               style={{ height:56, width:'auto', display:'block' }} />\n"
    '        </a>'
)

print('--- REPLACING ---')
print(s[i:j])
print('--- WITH ---')
print(new_block)

p.write_text(s[:i] + new_block + s[j:])
print('OK - badge in place')
