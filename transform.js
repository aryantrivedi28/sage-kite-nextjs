const fs = require('fs');

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

let content = fs.readFileSync('content/blog/index.tsx', 'utf8');

if (!content.includes('BlogGuideItem')) {
  content = content.replace(
    'export interface BlogPost {',
    `export interface BlogGuideItem {\n  id: string;\n  title: string;\n}\n\nexport interface BlogPost {`
  );
  content = content.replace(
    'tags: string[];',
    'tags: string[];\n  guide?: BlogGuideItem[];'
  );
}

// Split the content by "slug: '" to process each post.
// Wait, an easier way is to just do a global replace of <h2> and <h3>, but we need to attach the guide array to each post object.
// Since there are only 2 posts, let's just do it manually with regex.
// Find the block of the post, extract headings, generate guide array, insert it.

const postsRegex = /(slug:\s*['"][^'"]+['"],[\s\S]*?)(content:\s*\(\)\s*=>\s*\([\s\S]*?)(,\s*};?\s*$|,\s*\/\* ──)/gm;

let match;
const newPosts = [];
let lastIndex = 0;
let newContent = '';

while ((match = postsRegex.exec(content)) !== null) {
  newContent += content.substring(lastIndex, match.index);
  
  let meta = match[1];
  let contentBlock = match[2];
  let suffix = match[3];
  
  // extract headings from contentBlock
  const guide = [];
  contentBlock = contentBlock.replace(/<(h[23])>([\s\S]*?)<\/\1>/g, (m, tag, text) => {
    // strip inner tags from text if any
    const plainText = text.replace(/<[^>]+>/g, '').trim();
    // remove html entities like &apos;
    const cleanText = plainText.replace(/&[a-z]+;/gi, '').trim();
    
    const id = slugify(cleanText);
    guide.push(`{ id: "${id}", title: "${plainText.replace(/"/g, '\\"')}" }`);
    
    return `<${tag} id="${id}">${text}</${tag}>`;
  });
  
  const guideString = `guide: [\n    ${guide.join(',\n    ')}\n  ],`;
  meta = meta + '  ' + guideString + '\n  ';
  
  newContent += meta + contentBlock;
  lastIndex = match.index + match[1].length + match[2].length;
}
newContent += content.substring(lastIndex);

fs.writeFileSync('content/blog/index.tsx', newContent);
console.log('Done!');
