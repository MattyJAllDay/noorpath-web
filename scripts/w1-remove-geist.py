from pathlib import Path

p = Path('app/layout.js')
s = p.read_text()

# import line
old_import = 'import { Geist, Geist_Mono } from "next/font/google";\n'
assert s.count(old_import) == 1, f'import found {s.count(old_import)}'
s = s.replace(old_import, '')

# font definitions
defs = '''const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

'''
assert s.count(defs) == 1, f'definitions found {s.count(defs)}'
s = s.replace(defs, '')

# body className
old_body = '''      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >'''
new_body = '''      <body className="antialiased">'''
assert s.count(old_body) == 1, f'body found {s.count(old_body)}'
s = s.replace(old_body, new_body)

assert 'geist' not in s.lower(), 'geist reference remains'

p.write_text(s)
print('OK - Geist removed')
