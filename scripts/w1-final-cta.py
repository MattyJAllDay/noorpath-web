from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

# 1. button -> white badge
end_anchor = 'className="cta-waitlist-btn">Join the Waitlist</button>'
start_anchor = '<button onClick={onCTA} style={{'
assert s.count(end_anchor) == 1, f'button end anchor found {s.count(end_anchor)}'
j = s.index(end_anchor) + len(end_anchor)
i = s.rfind(start_anchor, 0, j)
assert i != -1, 'no button opening found'

new_block = (
    '<a href="https://apps.apple.com/app/noorpath-prayer-companion/id6758610154"\n'
    '           target="_blank" rel="noopener noreferrer"\n'
    "           style={{ display:'inline-block', marginTop:48 }}>\n"
    '          <img src="/app-store-badge-white.svg"\n'
    '               alt="Download NoorPath on the App Store"\n'
    "               style={{ height:72, width:'auto', display:'block' }} />\n"
    '        </a>'
)
print('--- REPLACING BUTTON ---')
print(s[i:j])
s = s[:i] + new_block + s[j:]

# 2. subtitle
old_sub = 'Coming to iOS · Free to download'
new_sub = 'Free to download · Available on iPhone'
assert s.count(old_sub) == 1, f'subtitle found {s.count(old_sub)}'
s = s.replace(old_sub, new_sub)

# 3. dead css rule
i2 = s.index('          .cta-waitlist-btn {')
j2 = s.index('\n', i2) + 1
print('--- REMOVING CSS ---')
print(s[i2:j2].rstrip())
s = s[:i2] + s[j2:]

assert 'cta-waitlist-btn' not in s, 'stale reference remains'

p.write_text(s)
print('OK - final CTA updated')
