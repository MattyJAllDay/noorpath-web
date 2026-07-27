from pathlib import Path

edits = {
  'app/support/page.jsx': [
    ("Email us — we read every message.",
     "Email us - we read every message."),
  ],
  'app/legal/terms/page.jsx': [
    ("All content within the app — including prayer time calculations, Quran translations, recitations, adhkar, and reflection material — is provided",
     "All content within the app (including prayer time calculations, Quran translations, recitations, adhkar, and reflection material) is provided"),
    ("All content within NoorPath — including design, text, graphics, Quran journey content, and software — is owned",
     "All content within NoorPath (including design, text, graphics, Quran journey content, and software) is owned"),
  ],
  'app/legal/privacy/page.jsx': [
    ("(treated as sensitive health data — see Section 3)",
     "(treated as sensitive health data - see Section 3)"),
    ("aggregated usage data — for example, which onboarding steps are completed.",
     "aggregated usage data, such as which onboarding steps are completed."),
    ("secure App Group — it does not leave your device.",
     "secure App Group - it does not leave your device."),
    ("(payment processing for all in-app purchases — Apple is the merchant of record)",
     "(payment processing for all in-app purchases - Apple is the merchant of record)"),
    ("service providers on request — contact",
     "service providers on request - contact"),
  ],
  'app/page.jsx': [
    ("'Your cycle data never leaves your device — it is never backed up",
     "'Your cycle data never leaves your device - it is never backed up"),
    ("Cloud backup is optional and Premium-only — if you never turn it on, your practice stays on your device.",
     "Cloud backup is optional and Premium-only. If you never turn it on, your practice stays on your device."),
  ],
}

for path, pairs in edits.items():
    p = Path(path)
    s = p.read_text()
    for old, new in pairs:
        assert s.count(old) == 1, f'{path}: found {s.count(old)} for "{old[:45]}"'
    for old, new in pairs:
        s = s.replace(old, new)
    p.write_text(s)
    print(f'OK {path} ({len(pairs)} edits)')

# verify only decorative + comments remain
import subprocess
print('\n--- remaining em dashes in legal/support ---')
for f in ['app/support/page.jsx','app/legal/terms/page.jsx','app/legal/privacy/page.jsx']:
    n = Path(f).read_text().count('\u2014')
    print(f'{f}: {n}')
