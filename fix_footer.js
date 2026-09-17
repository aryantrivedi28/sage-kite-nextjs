const fs = require('fs');
const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The CSS rules
const css = `
        /* Footer Responsive */
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 64px;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          color: var(--dark-sage);
          font-size: 0.9rem;
          border-top: 1px solid var(--light-sage);
          margin-top: 80px;
          padding-top: 32px;
        }
        
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
        }
        
        @media (max-width: 768px) {
          .site-footer {
            padding: 64px 0 40px !important;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            overflow: hidden;
          }
          .site-footer .wrap {
            padding: 0 24px !important;
            width: 100%;
            box-sizing: border-box;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-logo-col {
            padding-right: 0 !important;
            margin-bottom: 8px; /* Extra space before services */
          }
          .footer-logo-col img {
            max-width: 140px !important;
          }
          .footer-logo-col p {
            font-size: 16px !important;
            margin-top: 24px !important;
            max-width: 100% !important;
          }
          
          .footer-grid h2 {
            font-size: 18px !important;
            margin-bottom: 24px !important;
          }
          .footer-grid ul {
            gap: 16px !important;
          }
          .footer-grid ul li a {
            font-size: 16px !important;
            display: inline-block;
            word-wrap: break-word;
            white-space: normal;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            margin-top: 48px;
            padding-top: 24px;
          }
        }
`;

content = content.replace('.timeline-node:hover h3 { color: var(--hover-color); }', '.timeline-node:hover h3 { color: var(--hover-color); }' + css);

// Replace the inline style on the footer grid
content = content.replace(
  /<div className="wrap" style=\{\{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "64px" \}\}>/,
  '<div className="wrap footer-grid">'
);

// Replace the logo column inline style
content = content.replace(
  /<div style=\{\{ paddingRight: "clamp\(20px, 4vw, 60px\)" \}\}>/,
  '<div className="footer-logo-col" style={{ paddingRight: "clamp(20px, 4vw, 60px)" }}>'
);

// Replace the bottom footer flexbox inline style
content = content.replace(
  /<div style=\{\{ borderTop: "1px solid var\(--light-sage\)", marginTop: "80px", paddingTop: "32px", display: "flex", justifyContent: "space-between", color: "var\(--dark-sage\)", fontSize: "0\.9rem" \}\}>/,
  '<div className="footer-bottom">'
);


fs.writeFileSync(file, content);
console.log('Fixed footer layout.');
