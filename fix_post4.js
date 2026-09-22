const fs = require('fs');

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

let content = fs.readFileSync('content/blog/index.tsx', 'utf8');

// Find the start of post 4 content
const post4Start = content.indexOf('slug: \'what-is-dubsado\'');
const post4End = content.indexOf('];', post4Start);

let post4Content = content.substring(post4Start, post4End);
let metaPartEnd = post4Content.indexOf('content: () => (');

let meta = post4Content.substring(0, metaPartEnd);
let contentBlock = post4Content.substring(metaPartEnd);

const guide = [];
contentBlock = contentBlock.replace(/<(h[23])>([\s\S]*?)<\/\1>/g, (m, tag, text) => {
  const plainText = text.replace(/<[^>]+>/g, '').trim();
  const cleanText = plainText.replace(/&[a-z]+;/gi, '').trim();
  const id = slugify(cleanText);
  guide.push(`{ id: "${id}", title: "${plainText.replace(/"/g, '\\"')}" }`);
  return `<${tag} id="${id}">${text}</${tag}>`;
});

const guideString = `guide: [\n      ${guide.join(',\n      ')}\n    ],`;

// Add guide string to meta, right before content: () => (
meta = meta + guideString + '\n    ';

const newContent = content.substring(0, post4Start) + meta + contentBlock + content.substring(post4End);

fs.writeFileSync('content/blog/index.tsx', newContent);
console.log('Fixed post 4!');
