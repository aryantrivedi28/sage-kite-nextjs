const fs = require('fs');

let pageContent = fs.readFileSync('app/platforms/honeybook/page.tsx', 'utf8');

// 1. Update the 4 pills
pageContent = pageContent.replace('</span> Test</span>', '</span> Automate</span>');
pageContent = pageContent.replace('</span> Hand over</span>', '</span> Train</span>');

// 2. Update the heading
pageContent = pageContent.replace(
    'Get your HoneyBook built around your process.',
    'Get HoneyBook built around your process.'
);

// 3. Update the paragraph
pageContent = pageContent.replace(
    'Tell us how enquiries arrive today and what happens next. We will tell you what we would map first, what the build would involve and whether Sage Kite is the right fit.',
    'Tell us how enquiries reach you today and what happens next. We will tell you what we would map first, what the build would involve, and whether HoneyBook is the right fit for your business.'
);

// 4. Update the contact link
// Currently: <Link href="#contact" className="btn" ...>Book a discovery call</Link>
pageContent = pageContent.replace(
    /href="#contact"(.*?)>Book a discovery call/,
    'href="/contact"$1>Book a discovery call'
);

// The platforms link is already href="/platforms"
// <Link href="/platforms" ...>See other platforms we implement</Link>

fs.writeFileSync('app/platforms/honeybook/page.tsx', pageContent);

console.log('Final CTA updated.');
