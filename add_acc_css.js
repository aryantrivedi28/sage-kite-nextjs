const fs = require('fs');

const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const cssRules = `
        .acc-wrapper { border-bottom: 1px solid var(--light-sage); transition: all 0.4s ease; }
        .acc-wrapper:first-of-type { border-top: 1px solid var(--light-sage); }
        .acc-btn { width: 100%; display: flex; justify-content: space-between; align-items: flex-end; padding: 40px 0; background: transparent; border: none; cursor: pointer; text-align: left; transition: padding 0.3s ease, margin 0.3s ease; }
        .acc-btn:hover { padding-left: 16px; padding-right: 16px; margin-left: -16px; margin-right: -16px; border-radius: 8px; background: rgba(0,0,0,0.015); }
        .acc-btn:focus-visible { outline: 2px solid var(--sky); outline-offset: 4px; border-radius: 4px; }
        .acc-title { font-family: var(--serif); font-size: 1.8rem; color: var(--ink); margin-top: 12px; transition: color 0.3s ease; }
        .acc-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--dark-sage); }
        .acc-icon { font-size: 2rem; font-weight: 300; color: var(--ink); line-height: 1; transition: transform 0.4s ease, opacity 0.4s ease; }
        .acc-icon.open { transform: rotate(180deg); opacity: 0.6; }
        
        .acc-content { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.5s cubic-bezier(0.19, 1, 0.22, 1); }
        .acc-content.expanded { grid-template-rows: 1fr; }
        .acc-inner { overflow: hidden; opacity: 0; transition: opacity 0.4s ease 0.1s, padding 0.4s ease; }
        .acc-content.expanded .acc-inner { opacity: 1; padding-bottom: 48px; }
        
        .acc-detail-wrapper { max-width: 65ch; margin-left: 0; padding-top: 16px; }
        @media (min-width: 768px) {
          .acc-btn { align-items: center; }
          .acc-title { margin-top: 0; }
          .acc-detail-wrapper { margin-left: 200px; padding-top: 0; }
          .acc-info-col { width: 200px; flex-shrink: 0; }
        }
`;

content = content.replace('</style>', cssRules + '\n      </style>');

fs.writeFileSync(file, content);
console.log('Successfully added accordion CSS.');
