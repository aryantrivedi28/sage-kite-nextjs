import re

with open('app/globals.css', 'r') as f:
    content = f.read()

if '.tint' not in content:
    # Insert it right after the body tag rules
    content = re.sub(r'(body\{[^}]+\})', r'\1\n.tint { background: var(--pale-sage); }', content)
    
    with open('app/globals.css', 'w') as f:
        f.write(content)
        print("Patched globals.css")
else:
    print(".tint already exists")
