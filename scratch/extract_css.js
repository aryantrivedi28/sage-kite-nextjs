const fs = require('fs');

let pageContent = fs.readFileSync('app/platforms/honeybook/page.tsx', 'utf8');

// Extract the CSS block
const styleRegex = /<style dangerouslySetInnerHTML=\{\{ __html: `([\s\S]*?)` \}\}\s*\/>/;
const match = pageContent.match(styleRegex);

if (!match) {
    console.log("No inline style found.");
    process.exit(1);
}

const cssContent = match[1].trim();

// Remove the style block from pageContent
pageContent = pageContent.replace(styleRegex, '');

fs.writeFileSync('app/platforms/honeybook/honeybook.module.css', cssContent);
console.log('CSS extracted to honeybook.module.css');

// Add import statement at the top of the file
pageContent = pageContent.replace(/(import type \{ Metadata \} from 'next';)/, "$1\nimport styles from './honeybook.module.css';");

// List of local classes we know from the CSS (heuristically)
const localClasses = [
    'crumbs', 'plat-hero', 'sub', 'checklist', 'ui', 'ui-title', 'check',
    'fit-grid', 'fit', 'symptoms', 'after-line', 'journey', 'track', 'd', 'auto', 'human',
    'key', 'impl-grid', 'impl', 'paths', 'path-card', 'why-grid', 'why-list', 'partner',
    'deliver', 'stack', 'stack-note', 'related', 'mid-cta', 'trust-note', 'faq-grid',
    'runs-grid', 'run-step', 'run-bar', 'num', 'faq-stack', 'hero-grid', 'hero-copy', 'brand-dashes', 'cta-row', 'head', 'faq-group'
];

// We need to carefully replace className="something" to use styles object where applicable
pageContent = pageContent.replace(/className="([^"]+)"/g, (match, classNamesStr) => {
    const classes = classNamesStr.split(/\s+/);
    
    // Check if any class is in localClasses
    const hasLocal = classes.some(c => localClasses.includes(c));
    
    if (!hasLocal) return match; // Leave it alone if no local classes
    
    // Build the template literal string
    const parts = classes.map(c => {
        if (localClasses.includes(c)) {
            return `\${styles['${c}']}`;
        } else {
            return c;
        }
    });
    
    // If it's a single class and it's local, we don't need a template literal
    if (classes.length === 1 && hasLocal) {
        return `className={styles['${classes[0]}']}`;
    }
    
    return `className={\`${parts.join(' ')}\`}`;
});

fs.writeFileSync('app/platforms/honeybook/page.tsx', pageContent);
console.log('page.tsx updated to use CSS module.');

