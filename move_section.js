const fs = require('fs');
const path = 'app/Platforms/Dubsado/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /\s*\{\/\* How it works \(Runs\) \*\/\}.*?<\/section>/s;
const match = content.match(regex);
if (match) {
  const extracted = match[0];
  content = content.replace(regex, ''); // remove it
  
  // Find insertion point
  const partnerRegex = /(\{\/\* Partner Block \*\/\}.*?<\/section>)/s;
  content = content.replace(partnerRegex, `$1\n${extracted}`);
  
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully moved section');
} else {
  console.log('Could not find section');
}
