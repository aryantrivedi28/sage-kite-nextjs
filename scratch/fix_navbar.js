const fs = require('fs');

let content = fs.readFileSync('components/Header.tsx', 'utf8');

// The new links with /# to ensure they work from all pages
const newLinks = `            <li><Link href="/#services" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link href="/#platforms" onClick={() => setOpen(false)}>Platforms</Link></li>
            <li><Link href="/#industries" onClick={() => setOpen(false)}>Industries</Link></li>
            <li><Link href="/#blogs" onClick={() => setOpen(false)}>Blogs</Link></li>
            <li><Link href="/#case-studies" onClick={() => setOpen(false)}>Case studies</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About us</Link></li>
            <li><Link href="/contact" className="btn btn-small" onClick={() => setOpen(false)}>Book a discovery call</Link></li>`;

// Replace everything inside the <ul>...</ul>
const listRegex = /<li><Link href="#services".*?Book a discovery call<\/Link><\/li>/s;

content = content.replace(listRegex, newLinks);

fs.writeFileSync('components/Header.tsx', content);
console.log('Navbar fixed with absolute root paths.');
