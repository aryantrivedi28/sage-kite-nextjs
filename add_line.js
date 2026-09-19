const fs = require('fs');
const path = 'app/Platforms/Dubsado/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Insert hr between plat-hero and the next wrap section
content = content.replace(
  '        </section>\n\n        {/* Symptoms / Challenge -> Who it\'s for */}\n        <section className="wrap"',
  '        </section>\n\n        <hr style={{ border: \'none\', borderTop: \'1px solid var(--light-sage)\', margin: 0 }} />\n\n        {/* Symptoms / Challenge -> Who it\'s for */}\n        <section className="wrap"'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Added hr between Hero and Who its for');
