const fs = require('fs');
const lines = fs.readFileSync('app/page.tsx', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('className="wrap approach-intro"')) {
        // Line 88 is #problem, line 306 is #who
        // The one with "pull" is around 121
        let isApproach = false;
        // Check next 15 lines to see if it's the approach block with the pull quote
        for (let j = 0; j < 15 && (i + j) < lines.length; j++) {
            if (lines[i+j].includes('className="pull"')) {
                isApproach = true;
                break;
            }
        }
        
        if (!isApproach) {
            lines[i] = lines[i].replace('className="wrap approach-intro"', 'className="wrap split"');
        }
    }
}

fs.writeFileSync('app/page.tsx', lines.join('\n'));
console.log("Restored non-approach sections back to wrap split.");
