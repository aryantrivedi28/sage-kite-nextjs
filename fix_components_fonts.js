const fs = require('fs');

function replaceFonts(path) {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    content = content.replace(/var\(--serif\)/g, 'var(--sans)');
    fs.writeFileSync(path, content, 'utf8');
  }
}

replaceFonts('components/home/Founder.tsx');
replaceFonts('components/home/FAQ.tsx');
console.log('components fonts fixed');
