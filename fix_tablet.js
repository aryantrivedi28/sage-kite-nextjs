const fs = require('fs');
const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const tabletCss = `
        @media (min-width: 769px) and (max-width: 1100px) {
          .process-section {
            padding: clamp(80px, 10vw, 100px) 0 !important;
          }
          .process-section .wrap {
            padding-left: clamp(40px, 6vw, 56px) !important;
            padding-right: clamp(40px, 6vw, 56px) !important;
            box-sizing: border-box;
          }
          .process-heading {
            font-size: clamp(56px, 7vw, 72px) !important;
            line-height: 1.0 !important;
            max-width: 750px !important;
            margin-bottom: 80px !important;
            word-wrap: break-word;
          }
          .process-line {
            display: none !important; /* Remove horizontal master line on tablet grid */
          }
          .process-timeline {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            column-gap: clamp(48px, 6vw, 64px) !important;
            row-gap: clamp(56px, 8vw, 72px) !important;
            overflow-x: visible !important;
            padding-bottom: 0 !important;
          }
          .process-item {
            min-width: 0 !important;
            scroll-snap-align: none !important;
            flex: none !important;
            position: relative;
          }
          .process-item:last-child {
            /* Make item 07 span both columns if it's visually better, or stay in column 1 */
            /* Let's have it span both columns and center the content or just left align */
            grid-column: 1 / -1;
            max-width: calc(50% - (clamp(48px, 6vw, 64px) / 2)); /* Make it look like it's in the first column but doesn't break the grid */
          }
          .process-tick {
            width: 11px !important;
            height: 11px !important;
            border-radius: 50% !important;
            background: var(--warm-white) !important;
            border: 2px solid var(--coral) !important;
            margin-bottom: 24px !important;
          }
          .process-num {
            font-size: 15px !important;
            margin-bottom: 8px !important;
            font-weight: 500;
          }
          .process-title {
            font-size: clamp(22px, 3vw, 28px) !important;
            margin-bottom: 12px !important;
          }
          .process-desc {
            font-size: 17px !important;
            line-height: 1.6 !important;
          }
        }
`;

content = content.replace('.timeline-node:hover h3 { color: var(--hover-color); }', '.timeline-node:hover h3 { color: var(--hover-color); }' + tabletCss);

fs.writeFileSync(file, content);
console.log('Added tablet CSS for the process section.');
