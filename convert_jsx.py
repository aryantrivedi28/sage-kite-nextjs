import re

with open('original.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find body start and end
body_start = html.find('<body>') + 6
body_end = html.rfind('</body>')

body_content = html[body_start:body_end]

# Replace class= with className=
body_content = body_content.replace('class=', 'className=')

# Replace style="--" with style={{ '--': '' } as React.CSSProperties}
def style_replacer(match):
    style_str = match.group(1)
    # Parse the style string
    props = style_str.split(';')
    react_styles = []
    for p in props:
        if not p.strip(): continue
        parts = p.split(':', 1)
        if len(parts) == 2:
            key = parts[0].strip()
            val = parts[1].strip()
            if key.startswith('--'):
                react_styles.append(f"'{key}': '{val}'")
            else:
                # camelCase the key
                key_parts = key.split('-')
                camel_key = key_parts[0] + ''.join(word.capitalize() for word in key_parts[1:])
                react_styles.append(f"{camel_key}: '{val}'")
    
    style_obj = ", ".join(react_styles)
    if "--" in style_str:
        return f"style={{{{ {style_obj} }}}} as React.CSSProperties"
    else:
        return f"style={{{{ {style_obj} }}}}"

body_content = re.sub(r'style="([^"]*)"', style_replacer, body_content)

# Replace <br> and <hr> and <img ...> with self closing
body_content = re.sub(r'<br>', '<br />', body_content)
body_content = re.sub(r'<hr>', '<hr />', body_content)
body_content = re.sub(r'<img([^>]*[^/])>', r'<img\1 />', body_content)

# Fix script at the bottom (remove it)
body_content = re.sub(r'<script>.*?</script>', '', body_content, flags=re.DOTALL)

# Basic replacement of <!-- --> 
body_content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', body_content)

# We also need to fix a tags pointing to pages
body_content = body_content.replace('href="https://www.sagekite.example', 'href="')

# Replace the base64 image with the logo path
body_content = re.sub(r'src="data:image/[^"]+"', 'src="/sage-kite-logo-transparent.png"', body_content)

# Fix some empty closing tags for img if they were added
body_content = body_content.replace('</img>', '')

# Wrap it in a component
jsx = f"""\"use client\";

import {{ useState, useEffect }} from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {{
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {{
    const handleResize = () => {{
      if (window.innerWidth > 1040) {{
        setMenuOpen(false);
      }}
    }};
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }}, []);

  return (
    <>
{body_content}
    </>
  );
}}
"""

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(jsx)

print("Conversion complete")
