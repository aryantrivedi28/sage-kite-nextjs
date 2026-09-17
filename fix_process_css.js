const fs = require('fs');
const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const css = `
        /* Process Section */
        .process-container { position: relative; width: 100%; box-sizing: border-box; }
        .process-line { position: absolute; top: 12px; left: 0; width: 100%; height: 1px; background: var(--coral); z-index: 1; }
        .process-timeline { list-style: none; padding: 0; margin: 0; display: flex; gap: 24px; position: relative; z-index: 2; overflow-x: auto; padding-bottom: 24px; }
        .process-item { flex: 1 1 0; min-width: 140px; }
        .process-tick { width: 1px; height: 25px; background: var(--ink); margin-bottom: 16px; }
        .process-num { font-size: 0.85rem; color: var(--ink); margin-bottom: 8px; }
        .process-title { font-size: 1.1rem; margin-bottom: 12px; font-family: var(--serif); color: var(--ink); }
        .process-desc { color: var(--dark-sage); font-size: 0.85rem; line-height: 1.5; margin: 0; }
        
        @media (max-width: 768px) {
          .process-section {
            padding: clamp(60px, 8vw, 80px) 0 !important;
            box-sizing: border-box;
            width: 100%;
          }
          .process-section .wrap {
            padding: 0 24px !important;
            box-sizing: border-box;
          }
          .process-heading {
            font-size: clamp(42px, 12vw, 50px) !important;
            word-wrap: break-word;
            margin-bottom: 56px !important;
            max-width: 100% !important;
          }
          .process-line {
            top: 8px;
            left: 5px;
            width: 1px;
            height: calc(100% - 24px);
          }
          .process-timeline {
            flex-direction: column;
            gap: 48px;
            overflow-x: visible;
            padding-bottom: 0;
          }
          .process-item {
            min-width: 0;
            padding-left: 32px;
            position: relative;
          }
          .process-tick {
            position: absolute;
            left: 0;
            top: 8px;
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background: var(--warm-white);
            border: 2px solid var(--coral);
            margin: 0;
            z-index: 2;
          }
          .process-num {
            font-size: 16px !important;
            margin-bottom: 4px !important;
            font-weight: 600;
          }
          .process-title {
            font-size: 26px !important;
            margin-bottom: 8px !important;
          }
          .process-desc {
            font-size: 16px !important;
            line-height: 1.6 !important;
            max-width: 100%;
          }
        }
`;

if (!content.includes('.process-container {')) {
  content = content.replace('.timeline-node:hover h3 { color: var(--hover-color); }', '.timeline-node:hover h3 { color: var(--hover-color); }' + css);
  fs.writeFileSync(file, content);
  console.log('Successfully injected Process CSS.');
} else {
  console.log('Process CSS already exists.');
}
