const fs = require('fs');

const file = 'app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace inline grid style with a class
content = content.replace(
  /<div className="wrap" style=\{\{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp\(40px, 8vw, 100px\)" \}\}>/,
  '<div className="wrap timeline-layout-grid">'
);

// We need to style the Growth node properly (dark background) as requested.
// Find the Growth timeline node
const growthNodeRegex = /<div className="timeline-node" style=\{\{ '--hover-color': 'var\(--ink\)' \} as React\.CSSProperties\}>\s*<div style=\{\{ fontSize: "0\.75rem", textTransform: "uppercase", letterSpacing: "0\.1em", color: "var\(--dark-sage\)", marginBottom: "8px" \}\}>The outcome<\/div>\s*<h3 style=\{\{ fontSize: "1\.8rem", marginBottom: "12px", fontFamily: "var\(--serif\)" \}\}>Growth<\/h3>\s*<p style=\{\{ color: "var\(--ink\)", lineHeight: 1\.6, margin: 0, fontWeight: 500 \}\}>Enquiries followed up, marketing that can be measured, less manual work and a business that is easier to sell from\.<\/p>\s*<\/div>/;

const growthReplacement = `<div className="timeline-node result-node" style={{ '--hover-color': 'var(--warm-white)' } as React.CSSProperties}>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.7)", marginBottom: "8px" }}>The outcome</div>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "12px", fontFamily: "var(--serif)", color: "var(--warm-white)" }}>Growth</h3>
                <p style={{ color: "var(--warm-white)", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>Enquiries followed up, marketing that can be measured, less manual work and a business that is easier to sell from.</p>
              </div>`;

content = content.replace(growthNodeRegex, growthReplacement);


// Add CSS
const css = `
        .timeline-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 8vw, 100px);
        }
        
        .result-node {
          background: var(--dark-sage);
          padding: 24px 32px 24px 48px !important;
          border-radius: 8px;
          border-left-color: transparent !important;
        }
        .result-node::before { left: 20px !important; background: var(--warm-white) !important; border-color: var(--warm-white) !important; }

        @media (max-width: 768px) {
          .timeline-layout-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          #operation .wrap {
            padding: 0 24px;
            box-sizing: border-box;
            max-width: 100%;
          }
          
          #operation h2 {
            font-size: clamp(44px, 12vw, 52px) !important;
            line-height: 1.0 !important;
            word-wrap: break-word;
          }
          
          #operation p.mt {
            font-size: 18px !important;
            margin-bottom: 48px !important;
          }
          
          #operation .split-head {
            position: relative !important;
            top: 0 !important;
          }
          
          #operation .def-block {
            width: 100% !important;
            box-sizing: border-box;
            margin-bottom: 40px;
          }
          
          .timeline-node {
            padding-bottom: 40px;
          }
          
          .result-node {
            width: 100%;
            box-sizing: border-box;
            padding: 24px !important;
            padding-left: 48px !important;
          }
          .result-node::before {
            left: -6px !important;
          }
        }
`;

content = content.replace('.timeline-node:hover h3 { color: var(--hover-color); }', '.timeline-node:hover h3 { color: var(--hover-color); }' + css);

fs.writeFileSync(file, content);
console.log('Fixed timeline mobile responsiveness.');
