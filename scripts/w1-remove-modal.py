from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

def cut(start, end, label, include_end=False):
    global s
    assert s.count(start) == 1, f'{label}: start found {s.count(start)}'
    i = s.index(start)
    j = s.index(end, i) + (len(end) if include_end else 0)
    assert j > i, f'{label}: anchors out of order'
    s = s[:i] + s[j:]
    print(f'cut: {label}')

def swap(old, new, label):
    global s
    assert s.count(old) == 1, f'{label}: found {s.count(old)}'
    s = s.replace(old, new)
    print(f'swap: {label}')

# 1. the Modal component
cut('// ═════════════════════════════════════════════════════════════════════════\n// MODAL\n',
    '// ═════════════════════════════════════════════════════════════════════════\n// FOOTER',
    'Modal component')

# 2. state + handlers
swap("  const [modalOpen, setModalOpen] = useState(false);\n"
     "  const [activeCard, setActiveCard] = useState(null);\n"
     "  const open = () => setModalOpen(true);\n"
     "  const close = () => setModalOpen(false);\n",
     "  const [activeCard, setActiveCard] = useState(null);\n",
     'state and handlers')

# 3. escape handler
swap("        if (activeCard) setActiveCard(null);\n"
     "        else if (modalOpen) setModalOpen(false);\n",
     "        if (activeCard) setActiveCard(null);\n",
     'escape branch')

swap("  }, [activeCard, modalOpen]);", "  }, [activeCard]);", 'effect deps')

# 4. props and render
swap("<Nav onCTA={open} />", "<Nav />", 'Nav prop')
swap("<CardHero onCTA={open} />", "<CardHero />", 'CardHero prop')
swap("<CardFinalCTA onCTA={open} />", "<CardFinalCTA />", 'CardFinalCTA prop')
swap("\n      <Modal open={modalOpen} onClose={close} />", "", 'Modal render')

# 5. signatures
swap("function Nav({ onCTA }) {", "function Nav() {", 'Nav signature')
swap("function CardHero({ onCTA }) {", "function CardHero() {", 'CardHero signature')
swap("function CardFinalCTA({ onCTA }) {", "function CardFinalCTA() {", 'CardFinalCTA signature')

# 6. dead css
swap("          .modal-inner { padding:24px !important; }\n", "", 'modal-inner css')

assert 'onCTA' not in s, 'onCTA remains'
assert 'modalOpen' not in s, 'modalOpen remains'
assert 'modal-inner' not in s, 'modal-inner remains'
assert 'api/waitlist' not in s, 'waitlist fetch remains'
assert 'logo.png' not in s, 'logo.png reference remains'

p.write_text(s)
print('OK - modal removed')
