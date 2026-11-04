/**
 * Styles for every case study page, rendered once by CaseStudyPage.
 * Brand tokens only (app/brand.css); every class is prefixed cs- so nothing
 * clashes with app/globals.css.
 */
export const CASE_STUDY_CSS = `
          /* Shared case study styles. Rendered by CaseStudyPage; all classes are prefixed cs-. */
          .cs section{padding:clamp(56px,8vw,104px) 0}
          .cs .cs-sky-band{background:color-mix(in srgb,var(--sky-soft) 45%,var(--warm-white))}
          .cs h2{font-size:clamp(1.5rem,2.3vw,1.95rem);line-height:1.12}
          .cs-head{display:grid;gap:4px;align-content:start;margin-bottom:clamp(32px,5vw,56px);max-width:820px}
          .cs-head .label{margin-bottom:6px}
          .cs-head .sub{max-width:60ch;margin-top:14px}
          .cs-split{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,7fr);gap:clamp(28px,5vw,72px)}
          .cs-split.sticky > :first-child{position:sticky;top:120px;align-self:start}
          .cs-split .cs-head{margin-bottom:0}
          .cs-prose{display:grid;gap:20px}
          .cs-prose p{max-width:62ch}

          /* hero */
          .cs .cs-hero{padding:clamp(24px,4vw,48px) 0 clamp(40px,6vw,72px)}
          .cs-crumbs{display:flex;flex-wrap:wrap;gap:8px;font-size:.875rem;font-weight:600;color:var(--sage);margin-bottom:14px}
          .cs-crumbs a{color:inherit;text-decoration:none}
          .cs-crumbs a:hover{color:var(--ink);text-decoration:underline;text-decoration-color:var(--butter);text-underline-offset:4px}
          .cs-hero-grid{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:clamp(36px,6vw,72px);align-items:start}
          .cs-hero-copy{display:grid;gap:22px}
          .cs-hero-label{justify-self:start;padding:6px 14px;border-radius:999px;background:var(--sky-soft);color:var(--ink);font-size:.85rem;font-weight:600;line-height:1.4}
          .cs-hero h1{font-size:clamp(1.85rem,3vw,2.5rem);line-height:1.08;letter-spacing:-.03em}
          .cs-dek{font-size:clamp(1.05rem,1.4vw,1.2rem);line-height:1.3;font-weight:600;color:var(--sage);max-width:36ch}
          .cs-lede{font-size:clamp(1.1rem,1.4vw,1.2rem);line-height:1.6;max-width:60ch}
          .cs-badge{display:inline-flex;align-items:center;gap:10px;justify-self:start;padding:8px 14px;border-radius:999px;background:var(--sky-soft);color:var(--ink);font-weight:600;font-size:.86rem;line-height:1.3}
          .cs-badge::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--sky);flex:none}
          .cs-hero-visual{display:grid;gap:28px}
          .cs-hero-visual .cs-glance{margin-right:12px}
          .cs-hero-below{margin-top:clamp(36px,5vw,56px);margin-right:12px}

          .cs-search{background:color-mix(in srgb,var(--sky-soft) 45%,var(--warm-white));border:1px solid var(--sky-soft);border-radius:10px;padding:20px;display:grid;gap:14px}
          .cs-search-bar{display:flex;align-items:center;gap:12px;background:var(--warm-white);border:1.5px solid var(--sky);border-radius:999px;padding:12px 18px;min-height:52px;color:var(--ink)}
          .cs-search-bar svg{flex:none}
          .cs-typed{font-weight:600;color:var(--ink);font-size:1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
          .cs-caret{width:2px;height:1.2em;background:var(--coral);margin-left:-8px;animation:cs-blink 1s steps(1) infinite;flex:none}
          @keyframes cs-blink{50%{opacity:0}}
          .cs-search-result{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;min-height:2.6em;font-size:.93rem;line-height:1.4}
          .cs-qtag{padding:3px 12px;border-radius:999px;font-weight:700;font-size:.8rem;background:var(--butter-soft);color:var(--ink)}
          .cs-qtag[data-tone="coral"]{background:var(--coral-soft)}
          .cs-qtag[data-tone="sky"]{background:var(--sky-soft)}
          .cs-search figcaption{font-size:.8rem;color:var(--sage)}

          .cs-glance{position:relative;isolation:isolate}
          .cs-glance::before{content:"";position:absolute;inset:12px -12px -12px 12px;background:var(--butter-soft);border-radius:var(--r);z-index:-1}
          .cs-glance-card{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:var(--r);padding:clamp(20px,3vw,28px);overflow:hidden;position:relative}
          .cs-glance-card::after{content:"";position:absolute;top:0;right:0;width:56px;height:56px;background:var(--coral-soft);clip-path:polygon(0 0,100% 0,100% 100%)}
          .cs-glance h2{font-size:1.35rem;letter-spacing:-.01em;margin-bottom:10px}
          .cs-glance dl{margin:0}
          .cs-glance .row{display:grid;grid-template-columns:7.2rem minmax(0,1fr);gap:12px;padding:11px 0;border-top:1px solid var(--light-sage);font-size:.95rem;line-height:1.45}
          .cs-glance dt{color:var(--sage);font-weight:500}
          .cs-glance dd{margin:0;font-weight:600;color:var(--ink)}

          .cs-serp{background:color-mix(in srgb,var(--sky-soft) 45%,var(--warm-white));border:1px solid var(--sky-soft);border-radius:10px;padding:20px;display:grid;gap:14px;margin:0}
          .cs-serp-list{--row:34px;position:relative;display:grid;gap:6px}
          .cs-serp-row{height:var(--row);display:grid;grid-template-columns:26px minmax(0,1fr);gap:12px;align-items:center;padding:0 12px;border-radius:var(--r);background:var(--warm-white);font-size:.82rem;color:var(--sage);font-variant-numeric:tabular-nums}
          .cs-serp-row i{height:8px;border-radius:4px;background:var(--pale-sage)}
          .cs-serp-row.top{background:color-mix(in srgb,var(--butter-soft) 60%,var(--warm-white))}
          .cs-serp-row.stuck{background:color-mix(in srgb,var(--coral-soft) 55%,var(--warm-white))}
          .cs-serp-marker{position:absolute;left:-6px;right:-6px;top:0;height:calc(var(--row) * 3 + 20px);margin-top:-4px;border:2.5px solid var(--sky);border-radius:10px;background:color-mix(in srgb,var(--sky-soft) 85%,transparent);display:flex;align-items:center;padding:0 18px;box-shadow:0 4px 0 color-mix(in srgb,var(--ink) 12%,transparent);font-weight:700;font-size:.92rem;color:var(--ink);pointer-events:none;animation:cs-climb 8s cubic-bezier(.55,0,.25,1) infinite}
          @keyframes cs-climb{0%,14%{transform:translateY(calc((var(--row) + 6px) * 7))}42%,72%{transform:translateY(0)}100%{transform:translateY(calc((var(--row) + 6px) * 7))}}
          .cs-serp-legend{display:grid;gap:6px;font-size:.86rem;font-weight:600;color:var(--ink)}
          .cs-serp-legend li{display:flex;align-items:center;gap:10px}
          .cs-serp-legend .sw{width:14px;height:14px;border-radius:3px;flex:none}
          .cs-serp-legend .sw.top{background:color-mix(in srgb,var(--butter) 70%,var(--warm-white))}
          .cs-serp-legend .sw.stuck{background:color-mix(in srgb,var(--coral) 45%,var(--warm-white))}
          .cs-serp figcaption{font-size:.8rem;color:var(--sage)}

          .cs-journey{display:flex;align-items:center;gap:8px;margin:0}
          .cs-j-node{flex:1;padding:14px 16px;border-radius:8px;background:var(--warm-white);border:1px solid var(--light-sage);font-weight:700;color:var(--ink);line-height:1.3}
          .cs-j-node small{display:block;font-weight:500;font-size:.8rem;color:var(--sage)}
          .cs-j-node.hi{background:var(--sky-soft);border-color:var(--sky)}
          .cs-j-arrow{flex:none;width:28px;height:2px;background:var(--sky);position:relative}
          .cs-j-arrow::after{content:"";position:absolute;right:-1px;top:-4px;border-left:7px solid var(--sky);border-top:5px solid transparent;border-bottom:5px solid transparent}

          .cs-frame{margin:0;background:var(--warm-white);border:1px solid var(--light-sage);border-radius:10px;overflow:hidden;box-shadow:8px 8px 0 var(--sky-soft)}
          .cs-frame img{display:block;width:100%;height:auto}
          .cs-frame-bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:var(--pale-sage);border-bottom:1px solid var(--light-sage)}
          .cs-frame-bar i{width:10px;height:10px;border-radius:50%;background:var(--coral)}
          .cs-frame-bar i:nth-child(2){background:var(--butter)}
          .cs-frame-bar i:nth-child(3){background:var(--sage)}
          .cs-frame-bar span{margin-left:10px;background:var(--warm-white);border:1px solid var(--light-sage);border-radius:999px;padding:2px 14px;font-size:.8rem;font-weight:600;color:var(--sage)}

          /* metrics */
          .cs .cs-metrics-sec{padding:0 0 clamp(24px,4vw,40px)}
          .cs-metrics{display:grid;grid-template-columns:repeat(var(--n,4),minmax(0,1fr));gap:14px}
          .cs-metric{padding:26px 24px 24px;border-radius:var(--r);color:var(--ink);display:grid;gap:10px;align-content:space-between;min-height:150px}
          .cs-metric.sky{background:var(--sky-soft)}
          .cs-metric.butter{background:var(--butter-soft)}
          .cs-metric.coral{background:var(--coral-soft)}
          .cs-metric.sage,.cs-metric.plain{background:var(--pale-sage);border:1px solid var(--light-sage)}
          .cs-metric b{font-weight:800;font-size:clamp(1.7rem,2.6vw,2.3rem);line-height:1.05;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
          .cs-metric span{font-weight:600;font-size:.92rem;line-height:1.4}
          .cs-footnote{margin-top:18px;max-width:80ch}

          /* starting point */
          .cs-drivers{display:grid;gap:10px}
          .cs-drivers li{display:grid;grid-template-columns:14px minmax(0,1fr);gap:14px;align-items:baseline;font-weight:600;color:var(--ink)}
          .cs-drivers li::before{content:"";width:14px;height:14px;border-radius:3px;background:var(--sky);transform:translateY(2px)}
          .cs-drivers li:nth-child(2)::before{background:var(--butter)}
          .cs-drivers li:nth-child(3)::before{background:var(--coral)}
          .cs-audience{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
          .cs-audience li{display:grid;gap:10px;align-content:start;padding:18px;border-radius:var(--r);background:var(--warm-white);border:1px solid var(--light-sage);font-weight:500;line-height:1.5;color:var(--ink)}
          .cs-audience svg{width:40px;height:40px;stroke:var(--ink)}
          .cs-audience .acc-coral{stroke:var(--coral)}
          .cs-audience .acc-sky{stroke:var(--sky)}
          .cs-callout{background:var(--butter-soft);color:var(--ink);border-radius:var(--r);padding:clamp(22px,3vw,32px);display:grid;gap:8px}
          .cs-callout strong{font-size:clamp(1.4rem,2.4vw,1.8rem);line-height:1.25;font-weight:800;letter-spacing:-.02em}
          .cs-callout p{max-width:58ch}

          /* problem */
          .cs-problems{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 clamp(28px,4vw,56px)}
          .cs-problems li{padding:22px 0;border-top:1px solid var(--light-sage);display:grid;gap:6px;align-content:start}
          .cs-problems h3{display:flex;align-items:center;gap:12px;font-size:1.15rem}
          .cs-problems h3 i{width:12px;height:12px;border-radius:3px;background:var(--coral);flex:none}
          .cs-problems li:nth-child(2) h3 i{background:var(--butter)}
          .cs-problems li:nth-child(3) h3 i{background:var(--sky)}
          .cs-problems li:nth-child(4) h3 i{background:var(--sage)}
          .cs-problems p{max-width:52ch}

          .cs-sim{margin-top:clamp(36px,5vw,56px);background:var(--warm-white);border:1px solid var(--light-sage);border-radius:10px;padding:clamp(18px,3vw,32px);display:grid;gap:20px}
          .cs-sim-top{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px 24px}
          .cs-sim-top h3{font-size:1.4rem}
          .cs-seg{display:inline-flex;border:1.5px solid var(--ink);border-radius:999px;padding:3px;gap:2px}
          .cs-seg button{border:0;background:transparent;color:var(--ink);border-radius:999px;padding:9px 18px;font:700 .9rem var(--sans);min-height:40px;cursor:pointer;transition:background var(--t) var(--ease),color var(--t) var(--ease)}
          .cs-seg button[aria-pressed="true"]{background:var(--ink);color:var(--warm-white)}
          .cs-scroll{overflow-x:auto}
          .cs-scroll svg{display:block;width:100%;min-width:620px;height:auto}
          .cs-sim-caption{font-size:.95rem;max-width:70ch;min-height:3.4em}
          .cs-flow text{font-family:var(--sans);fill:var(--ink)}
          .cs-flow .fl-muted{fill:var(--sage)}
          .cs-flow .fl-q{fill:var(--warm-white);stroke:var(--light-sage);stroke-width:1.5}
          .cs-flow .fl-site{fill:var(--sky-soft);stroke:var(--sky);stroke-width:2}
          .cs-flow .fl-comp{fill:var(--coral-soft);stroke:var(--coral);stroke-width:2;stroke-dasharray:6 5}
          .cs-flow .flow-ok{stroke:var(--sky);stroke-width:3;fill:none;stroke-dasharray:7 9;animation:cs-dash 1.3s linear infinite}
          .cs-flow .flow-lost{stroke:var(--coral);stroke-width:3;fill:none;stroke-dasharray:3 10;animation:cs-dash 1.8s linear infinite;opacity:.85}
          @keyframes cs-dash{to{stroke-dashoffset:-64}}
          .cs-flow[data-state="before"] .s-after{display:none}
          .cs-flow[data-state="after"] .s-before{display:none}
          .cs-flow[data-state="after"] .comp-box{opacity:.35}
          .cs-flow .fl-bar-lost{fill:var(--coral)}
          .cs-flow .fl-bar-ok{fill:var(--sky)}

          .cs-pull{margin:clamp(40px,6vw,72px) 0 0}
          .cs-pull p{font-size:clamp(1.5rem,3vw,2.3rem);line-height:1.2;font-weight:700;letter-spacing:-.02em;max-width:30ch;text-wrap:balance;color:var(--ink)}
          .cs-pull p::before{content:"";display:block;width:56px;height:5px;background:var(--butter);margin-bottom:22px;border-radius:2px}

          /* approach */
          .cs-diagnosis{display:grid;gap:12px}
          .cs-diagnosis li{display:grid;grid-template-columns:22px minmax(0,1fr);gap:12px}
          .cs-diagnosis li::before{content:"";width:22px;height:2px;background:var(--sky);margin-top:.85em}
          .cs-lift{margin-top:clamp(32px,5vw,56px)}
          .cs-lift svg{width:100%;height:auto;display:block}
          .cs-lift .track{stroke:var(--light-sage)}
          .cs-lift .line{stroke:var(--sky);stroke-dasharray:1100;stroke-dashoffset:1100;animation:cs-drawin 2.4s .3s ease-out forwards}
          .cs-lift circle{stroke:var(--warm-white);stroke-width:3}
          .cs-steps{display:grid;grid-template-columns:repeat(var(--n,4),minmax(0,1fr));gap:16px;align-items:start}
          .cs-step{margin-top:calc((var(--n,4) - 1 - var(--i,0)) * 20px)}
          .cs-step{background:var(--warm-white);border:1px solid var(--light-sage);border-top:5px solid var(--sky);border-radius:var(--r);padding:24px 22px 26px;display:grid;gap:10px}
          .cs-step:nth-child(2){border-top-color:var(--sage)}
          .cs-step:nth-child(3){border-top-color:var(--butter)}
          .cs-step:nth-child(4){border-top-color:var(--coral)}
          .cs-step-n{font-size:2.8rem;font-weight:800;line-height:1;color:var(--sage);letter-spacing:-.03em}
          .cs-step h3{font-size:1.15rem}
          .cs-step p{font-size:.97rem;line-height:1.6}
          .cs-steps-note{margin-top:36px}
          .cs-step.linked{position:relative;transition:transform var(--t) var(--ease),box-shadow var(--t) var(--ease)}
          .cs-step.linked:hover{transform:translateY(-3px);box-shadow:0 6px 0 color-mix(in srgb,var(--ink) 12%,transparent)}
          .cs-step.linked h3 a{color:inherit;text-decoration:underline;text-decoration-color:var(--butter);text-decoration-thickness:2px;text-underline-offset:4px}
          .cs-step.linked h3 a::after{content:"";position:absolute;inset:0}
          .cs .cs-part{scroll-margin-top:96px}
          .cs .cs-part.pale{background:var(--pale-sage)}
          .cs .pale + .pale{border-top:1px solid var(--light-sage)}

          /* parts: migration diagram (MigrationFlow) */
          .cs-mig text{font-family:var(--sans);fill:var(--ink)}
          .cs-mig .m-muted{fill:var(--sage)}
          .cs-mig .m-accent{fill:color-mix(in srgb,var(--sky) 70%,var(--ink))}
          .cs-mig .m-src{fill:var(--warm-white);stroke:var(--light-sage);stroke-width:1.5}
          .cs-mig .m-row{fill:var(--pale-sage);stroke:var(--light-sage);stroke-width:1.5}
          .cs-mig .m-band{fill:var(--butter-soft)}
          .cs-mig .m-shield{fill:var(--warm-white);stroke:var(--ink);stroke-width:2.4;stroke-linejoin:round}
          .cs-mig .m-shield-tick{fill:none;stroke:var(--coral);stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}
          .cs-mig .m-dst{fill:color-mix(in srgb,var(--sky-soft) 45%,var(--warm-white));stroke:var(--sky);stroke-width:2}
          .cs-mig .m-tgt{fill:var(--sky-soft);stroke:var(--sky);stroke-width:1.5;transition:fill 400ms var(--ease)}
          .cs-mig .m-tgt-text,.cs-mig .m-chk{transition:opacity 400ms var(--ease)}
          .cs-mig .m-chk{fill:none;stroke:color-mix(in srgb,var(--sky) 70%,var(--ink));stroke-width:3.2;stroke-linecap:round;stroke-linejoin:round}
          .cs-mig .m-pk{fill:var(--coral);opacity:0}
          .cs-mig[data-state="idle"] .m-tgt,.cs-mig[data-state="run"] .m-tgt{fill:var(--warm-white);stroke:var(--light-sage)}
          .cs-mig[data-state="idle"] .m-tgt-text,.cs-mig[data-state="run"] .m-tgt-text{opacity:.35}
          .cs-mig[data-state="idle"] .m-chk,.cs-mig[data-state="run"] .m-chk{opacity:0}
          .cs-mig[data-state="run"] .m-pk{animation:cs-pk 1.7s ease-in-out 1 both}
          .cs-mig[data-state="run"] .m-band{animation:cs-band 1.2s ease-in-out 2}
          @keyframes cs-pk{0%{transform:translateX(0);opacity:0}12%{opacity:1}88%{opacity:1}100%{transform:translateX(260px);opacity:0}}
          @keyframes cs-band{50%{fill:color-mix(in srgb,var(--butter) 60%,var(--butter-soft))}}
          .cs-ghost:disabled{opacity:.5;cursor:default}
          .cs-ghost:disabled:hover{background:transparent;color:var(--ink)}

          /* parts: storefront screenshots (ScreenshotTabs) */
          .cs-gallery{display:grid;gap:22px}
          .cs-tabs{display:flex;flex-wrap:wrap;gap:10px}
          .cs-tabs .cs-ghost[aria-pressed="true"]{background:var(--ink);color:var(--warm-white)}
          .cs-frame.big{box-shadow:10px 10px 0 var(--butter-soft)}
          .cs-sim + .cs-gallery{margin-top:clamp(36px,5vw,56px)}
          .cs-gallery-title{font-size:1.4rem}
          .cs-frame.strip{margin-bottom:clamp(28px,4vw,44px)}
          .cs-frame.strip figcaption{min-height:0;padding:12px 18px 14px}
          .cs-countcard-wrap{margin-top:clamp(28px,4vw,44px)}
          .cs-shots{display:grid}
          .cs-shots img{grid-area:1/1;opacity:0;visibility:hidden;transition:opacity 300ms var(--ease),visibility 0s linear 300ms}
          .cs-shots img.on{opacity:1;visibility:visible;transition:opacity 300ms var(--ease)}
          .cs-frame figcaption{padding:16px 20px 20px;border-top:1px solid var(--light-sage);font-size:.98rem;min-height:5.4em}

          /* parts: purchase path (PurchasePath) */
          .cs-path text{font-family:var(--sans);fill:var(--ink)}
          .cs-path .pp-track{stroke:var(--light-sage);stroke-width:6;stroke-linecap:round}
          .cs-path .pp-flow{stroke:var(--sky);stroke-width:3;stroke-dasharray:7 9;animation:cs-dash 1.3s linear infinite}
          .cs-path .pp-node{stroke:var(--warm-white);stroke-width:4}
          .cs-path .n0{fill:var(--sky)}
          .cs-path .n1{fill:var(--sage)}
          .cs-path .n2{fill:var(--butter)}
          .cs-path .n3{fill:var(--coral)}
          .cs-path .pp-ring{fill:none;stroke:var(--sage);stroke-width:2.5;transform-box:fill-box;transform-origin:center;animation:cs-ringp 2.2s ease-in-out infinite}
          @keyframes cs-ringp{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.25);opacity:.35}}
          .cs-path .pp-callout{fill:var(--coral-soft);stroke:var(--coral);stroke-width:2}
          .cs-path .pp-drop{fill:none;stroke:var(--coral);stroke-width:2.5;stroke-dasharray:4 4;stroke-linecap:round;stroke-linejoin:round}
          .cs-path .pp-dot{fill:var(--ink);animation:cs-travel 5s linear infinite}
          @keyframes cs-travel{from{transform:translateX(0)}to{transform:translateX(600px)}}

          /* hero count card (CountCard) */
          .cs-countcard{margin:0;background:var(--warm-white);border:1px solid var(--light-sage);border-radius:10px;padding:clamp(20px,3vw,30px);display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);grid-template-areas:"top dots" "note note";gap:18px clamp(24px,4vw,48px);align-items:center;box-shadow:8px 8px 0 var(--sky-soft)}
          .cs-countcard-top{grid-area:top;display:flex;flex-direction:column;align-items:flex-start;gap:10px;color:var(--ink);font-weight:600}
          .cs-countcard-top b{font-size:clamp(3rem,6vw,4.5rem);font-weight:800;line-height:1;letter-spacing:-.04em;color:var(--coral)}
          .cs-countcard .cs-dots{grid-area:dots;grid-template-columns:repeat(20,minmax(0,1fr));gap:8px}
          .cs-countcard figcaption{grid-area:note}

          /* parts: checkout before/after (CheckoutFixFlow) */
          .cs-ck[data-state="before"] .pp-flow{stroke:var(--coral)}
          .cs-ck .ck-bugs,.cs-ck .ck-clear{transition:opacity 350ms var(--ease)}
          .cs-ck[data-state="before"] .ck-clear{opacity:0}
          .cs-ck[data-state="after"] .ck-bugs{opacity:0}
          .cs-ck .ck-bug{fill:var(--coral-soft);stroke:var(--coral);stroke-width:2}
          .cs-ck .ck-x{stroke:color-mix(in srgb,var(--coral) 70%,var(--ink));stroke-width:3;stroke-linecap:round}
          .cs-ck .ck-drop{fill:none;stroke:var(--coral);stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
          .cs .cs-ck .ck-drop-text{fill:color-mix(in srgb,var(--coral) 70%,var(--ink))}
          .cs-ck .ck-clear path{fill:none;stroke:color-mix(in srgb,var(--sky) 70%,var(--ink));stroke-width:3.2;stroke-linecap:round;stroke-linejoin:round}

          /* parts: numbered steps (NumberedSteps) */
          .cs-nsteps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;align-items:start}
          .cs-nsteps li{display:grid;grid-template-columns:44px minmax(0,1fr);gap:14px;align-items:start;padding:22px;background:var(--warm-white);border:1px solid var(--light-sage);border-radius:10px}
          .cs-nsteps li:nth-child(2){margin-top:18px}
          .cs-nsteps li:nth-child(3){margin-top:36px}
          .cs-nsteps li > span{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:var(--coral-soft);color:var(--ink);font-weight:700}
          .cs-nsteps li:nth-child(2) > span{background:var(--butter-soft)}
          .cs-nsteps li:nth-child(3) > span{background:var(--sky-soft)}
          .cs-nsteps h3{font-size:1.25rem;margin-bottom:4px}
          .cs-nsteps p{font-size:.98rem;line-height:1.6}

          /* parts: theme layers (LayerStack) */
          .cs-stack{display:grid;gap:10px;justify-items:center}
          .cs-slab{display:grid;gap:2px;padding:16px 20px;border-radius:8px;color:var(--ink);transition:opacity 300ms var(--ease),transform 300ms var(--ease)}
          .cs-slab span{font-size:.88rem;color:var(--sage)}
          .cs-slab.l0{background:var(--pale-sage);border:1px solid var(--light-sage)}
          .cs-slab.l1{background:var(--coral-soft);border-left:6px solid var(--coral)}
          .cs-slab.l2{background:var(--sky-soft);border-left:6px solid var(--sky)}
          .cs-slab{width:100%}
          .cs-slab.l1{width:92%}
          .cs-slab.l2{width:84%}
          .cs-slab.off{opacity:.15;transform:translateY(-8px)}

          /* parts: loyalty loop (LoopSketch) */
          .cs-loop text{font-family:var(--sans);fill:var(--ink)}
          .cs-loop .lp-muted{fill:var(--sage)}
          .cs-loop .lp-track{fill:none;stroke:var(--light-sage);stroke-width:6}
          .cs-loop .lp-flow{fill:none;stroke:var(--sky);stroke-width:3;stroke-dasharray:7 9;animation:cs-dash 1.3s linear infinite}
          .cs-loop .lp-node{stroke:var(--warm-white);stroke-width:4}
          .cs-loop .n0{fill:var(--sky-soft)}
          .cs-loop .n1{fill:var(--butter-soft)}
          .cs-loop .n2{fill:var(--coral-soft)}
          .cs-loop .n3{fill:var(--pale-sage)}

          /* parts: email styles (EmailToggle) */
          .cs-mail-stage{background:var(--pale-sage);border-radius:8px;padding:clamp(20px,4vw,48px) clamp(12px,3vw,32px)}
          .cs-mail{margin-inline:auto;box-shadow:0 10px 28px color-mix(in srgb,var(--ink) 10%,transparent);--m-head:var(--pale-sage);--m-head-fg:var(--ink);--m-btn:var(--light-sage);--m-rule:transparent;max-width:560px;border:1px solid var(--light-sage);border-radius:10px;overflow:hidden;background:var(--warm-white);transition:border-color 300ms var(--ease)}
          .cs-mail.custom{--m-head:var(--ink);--m-head-fg:var(--warm-white);--m-btn:var(--coral);--m-rule:var(--butter);border-color:var(--ink)}
          .cs-mail-head{display:flex;justify-content:space-between;gap:12px;padding:14px 18px;background:var(--m-head);color:var(--m-head-fg);border-bottom:4px solid var(--m-rule);font-weight:700;font-size:.9rem;transition:background 300ms var(--ease),color 300ms var(--ease)}
          .cs-mail-tag{font-weight:500;opacity:.8}
          .cs-mail-body{padding:22px 18px;display:grid;gap:10px;justify-items:start}
          .cs-mail-body b{font-size:1.4rem;font-weight:800;letter-spacing:-.02em;color:var(--ink)}
          .cs-mail.custom .cs-mail-body b{color:var(--coral)}
          .cs-mail-body i{display:block;width:100%;height:8px;border-radius:4px;background:var(--light-sage)}
          .cs-mail-body i.s{width:60%}
          .cs-mail-btn{margin-top:6px;padding:10px 20px;border-radius:999px;background:var(--m-btn);color:var(--ink);font-weight:700;font-size:.9rem;transition:background 300ms var(--ease)}
          .cs-mail-foot{padding:12px 18px;background:var(--pale-sage);border-top:1px solid var(--light-sage)}
          .cs-mail-foot i{display:block;width:45%;height:6px;border-radius:3px;background:var(--light-sage)}

          /* parts: dashboards (DashboardToggle) */
          .cs-bi{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;min-height:250px;align-content:start}
          .cs-bi-tile{background:var(--pale-sage);border:1px solid var(--light-sage);border-radius:8px;padding:16px;display:grid;gap:14px;align-content:space-between;color:var(--ink);font-size:.92rem}
          .cs-bi.custom .cs-bi-tile{background:var(--coral-soft);border-color:transparent}
          .cs-spark{display:flex;align-items:flex-end;gap:6px;height:84px}
          .cs-spark i{flex:1;background:var(--sky);border-radius:3px 3px 0 0;transform-origin:bottom;animation:cs-sgrow 600ms var(--ease) both}
          .cs-bi.custom .cs-spark i{background:var(--coral)}
          @keyframes cs-sgrow{from{transform:scaleY(.1)}to{transform:scaleY(1)}}
          .cs-bi-insight{grid-column:1/-1;display:grid;gap:4px;padding:16px 18px;border-radius:8px;background:var(--butter-soft);color:var(--ink);border-left:6px solid var(--coral)}
          .cs-bi-insight span{font-size:.93rem}
          @keyframes cs-drawin{to{stroke-dashoffset:0}}

          /* delivered */
          .cs-bento{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
          .cs-bento .wide{grid-column:span 2}
          .cs-tile{border-radius:8px;padding:clamp(24px,3vw,34px);color:var(--ink);display:flex;flex-direction:column;gap:14px}
          .cs-tile h3{margin-bottom:2px}
          .cs-tile-visual{flex:1;display:grid;place-items:center;margin-top:10px;padding:clamp(20px,2.6vw,28px);border-radius:var(--r);background:color-mix(in srgb,var(--warm-white) 45%,transparent)}
          .cs-tile.plain .cs-tile-visual{background:var(--pale-sage)}
          .cs-tile.sky{background:var(--sky-soft)}
          .cs-tile.coral{background:var(--coral-soft)}
          .cs-tile.butter{background:var(--butter-soft)}
          .cs-tile.sage{background:var(--pale-sage);border:1px solid var(--light-sage)}
          .cs-tile.plain{background:var(--warm-white);border:1px solid var(--light-sage)}
          .cs-tile h3{font-size:1.4rem;line-height:1.15}
          .cs-tile p{font-size:.99rem;line-height:1.6;color:var(--dark-sage)}
          .cs-tile .cs-tile-tag{font-weight:700;font-size:.82rem;color:var(--sage)}
          .cs-venn{width:100%;max-width:220px;height:auto;justify-self:center}
          .cs-venn circle{animation:cs-drift 6s ease-in-out infinite alternate}
          .cs-venn circle:nth-child(2){animation-delay:-2s}
          .cs-venn circle:nth-child(3){animation-delay:-4s}
          .cs-venn .v-coral{fill:var(--coral);fill-opacity:.45}
          .cs-venn .v-sky{fill:var(--sky);fill-opacity:.45}
          .cs-venn .v-butter{fill:var(--butter);fill-opacity:.6}
          .cs-venn text{font-family:var(--sans);font-size:12px;font-weight:700;fill:var(--ink)}
          @keyframes cs-drift{from{transform:translate(0,0)}to{transform:translate(3px,-3px)}}
          .cs-pagecard{width:100%;display:grid;gap:12px;padding:18px 20px;background:var(--warm-white);border-radius:var(--r);font-size:.95rem}
          .cs-pagecard b{font-weight:700}
          .cs-pagecard span{color:var(--sage);font-size:.85rem}
          .cs-pagecard i{display:block;height:6px;border-radius:3px;background:var(--coral-soft)}
          .cs-pagecard[data-tone="butter"] i{background:var(--butter-soft)}
          .cs-pagecard[data-tone="sky"] i{background:var(--sky-soft)}
          .cs-pagecard[data-tone="sage"] i,.cs-pagecard[data-tone="plain"] i{background:var(--light-sage)}
          .cs-pagecard i:nth-of-type(2){width:70%}
          .cs-pagecard i:nth-of-type(3){width:85%}

          .cs-arch-controls{display:flex;flex-wrap:wrap;gap:10px;align-items:center}
          .cs-ghost{background:transparent;color:var(--ink);border:1.5px solid var(--ink);border-radius:999px;min-height:42px;padding:9px 18px;font:700 .9rem var(--sans);cursor:pointer;transition:background var(--t) var(--ease),color var(--t) var(--ease)}
          .cs-ghost:hover{background:var(--ink);color:var(--warm-white)}
          .cs-arch-status{font-size:.95rem;min-height:3.2em;max-width:72ch;color:var(--dark-sage)}
          .cs-arch-svg text{font-family:var(--sans);fill:var(--ink)}
          .cs-arch-svg .arch-head{fill:var(--sage)}
          .cs-arch-svg .arch-lines line{stroke:var(--ink);stroke-width:1.6;opacity:.45}
          .cs-arch-svg .arch-lines line.arch-new{stroke:var(--coral);stroke-width:2.4;opacity:.9}
          .cs-arch-svg .arch-node rect{stroke-width:2}
          .cs-arch-svg .arch-D rect{fill:var(--coral-soft);stroke:var(--coral)}
          .cs-arch-svg .arch-T rect{fill:var(--butter-soft);stroke:var(--butter)}
          .cs-arch-svg .arch-C rect{fill:var(--sky-soft);stroke:var(--sky)}
          .cs .draw{stroke-dasharray:400;stroke-dashoffset:400;animation:cs-drawin 700ms ease-out forwards}
          .cs .pop{transform-box:fill-box;transform-origin:center;animation:cs-pop 450ms cubic-bezier(.2,1.4,.4,1) both}
          @keyframes cs-pop{from{transform:scale(.3);opacity:0}to{transform:scale(1);opacity:1}}

          .cs-tree{font-size:.93rem;line-height:1.5;display:grid;gap:4px;justify-items:start;width:100%}
          .cs-tree ul{margin-left:14px;padding:6px 0 2px 20px;border-left:2px solid var(--sage);display:grid;gap:14px;margin-top:8px}
          .cs-tree ul > li{display:grid;justify-items:start;gap:4px}
          .cs-tree li{position:relative}
          .cs-tree ul > li::before{content:"";position:absolute;left:-20px;top:17px;width:14px;height:2px;background:var(--sage)}
          .cs-tree b{background:var(--warm-white);padding:2px 10px;border-radius:4px;border:1px solid var(--light-sage);font-weight:700;display:inline-block}
          .cs-tree em{font-style:normal;color:var(--sage);font-size:.85rem}

          /* delivered: four fixes to one category page (CategoryFixes) */
          .cs-build{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:28px;align-items:start}
          .cs-fixes{display:grid;gap:14px}
          .cs-fixes .cs-tile{gap:10px}
          .cs-fix-btn{align-self:flex-start}
          .cs-fix-btn[aria-pressed="true"]{background:var(--ink);color:var(--warm-white)}
          .cs-fix-actions{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
          .cs-fix-actions .btn{border:0;cursor:pointer;font-family:var(--sans)}
          .cs-mockwrap{position:sticky;top:120px;display:grid;gap:10px;margin:0}
          .cs-mock{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:10px;overflow:hidden;box-shadow:8px 8px 0 var(--butter-soft)}
          .cs-mock-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:10px 14px;background:var(--pale-sage);border-bottom:1px solid var(--light-sage);font-size:.85rem;font-weight:600}
          .cs-url{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:999px;padding:3px 12px;color:var(--ink)}
          .cs-url em{font-style:normal;font-size:.75rem;font-weight:700;margin-left:6px}
          .cs-url.dup{border:1.5px dashed var(--coral)}
          .cs-url.dup em{color:color-mix(in srgb,var(--coral) 70%,var(--ink))}
          .cs-url.one{border-color:var(--sky);background:var(--sky-soft)}
          .cs-url.one em{color:color-mix(in srgb,var(--sky) 70%,var(--ink))}
          .cs-mock-body{padding:18px 18px 8px;display:grid;gap:12px}
          .cs-mock-title{font-size:1.5rem;font-weight:800;letter-spacing:-.02em;color:var(--ink)}
          .cs-layer{max-height:0;opacity:0;overflow:hidden;transition:max-height 250ms var(--ease),opacity 250ms var(--ease)}
          .cs-mock.on-links .cs-layer.links{max-height:70px;opacity:1}
          .cs-mock.on-content .cs-layer.content{max-height:190px;opacity:1}
          .cs-mock.on-review .cs-layer.review{max-height:110px;opacity:1}
          .cs-chips-row{display:flex;flex-wrap:wrap;gap:8px;padding:2px 0}
          .cs-chips-row span{padding:4px 12px;border-radius:999px;background:var(--butter-soft);font-size:.82rem;font-weight:700;color:var(--ink)}
          .cs-mock-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
          .cs-pc{display:grid;gap:6px}
          .cs-pc-img{aspect-ratio:4/3;background:var(--pale-sage);border-radius:var(--r)}
          .cs-pc i{display:block;height:7px;border-radius:4px;background:var(--light-sage)}
          .cs-pc i.s{width:60%}
          .cs-stars-row{color:color-mix(in srgb,var(--butter) 75%,var(--ink));letter-spacing:1px}
          .cs-pc-stars{height:1.1em;font-size:.8rem;opacity:0;transition:opacity 250ms var(--ease)}
          .cs-mock.on-review .cs-pc-stars{opacity:1}
          .cs-content-block{display:grid;gap:6px;padding:14px;background:var(--coral-soft);border-radius:8px;margin-bottom:10px}
          .cs-content-block b{font-size:.85rem;color:var(--ink)}
          .cs-content-block i{display:block;height:7px;border-radius:4px;background:color-mix(in srgb,var(--ink) 25%,transparent)}
          .cs-content-block i.s{width:55%}
          .cs-mock-serp{border-top:1px dashed var(--light-sage);padding:14px 18px 18px;display:grid;gap:2px;background:color-mix(in srgb,var(--sky-soft) 45%,var(--warm-white))}
          .cs-mock-serp small{font-weight:600;font-size:.78rem;color:var(--sage);margin-bottom:4px}
          .cs-serp-title{color:color-mix(in srgb,var(--sky) 60%,var(--ink));font-size:1.05rem;font-weight:700}
          .cs-serp-url{font-size:.82rem;color:var(--sage)}
          .cs-serp-product{display:grid;gap:2px;margin-top:12px}
          .cs-serp-stars{font-size:.85rem;color:var(--sage)}
          .cs-mockwrap figcaption{font-size:.95rem;min-height:3.2em}

          /* results */
          .cs-results{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:18px}
          /* a single before/after card spans the row instead of leaving two empty columns */
          .cs-results > article.cs-rcard:only-of-type:not(.count){grid-column:1/-1}
          .cs-rcard{background:var(--warm-white);border:1px solid var(--sky-soft);border-radius:10px;padding:clamp(22px,3vw,32px);display:grid;gap:22px;align-content:start}
          .cs-rcard-top{display:flex;align-items:baseline;justify-content:space-between;gap:16px;flex-wrap:wrap}
          .cs-mult{font-size:clamp(2.8rem,5.6vw,4.2rem);font-weight:800;line-height:1;letter-spacing:-.04em;color:var(--coral);font-variant-numeric:tabular-nums}
          .cs-bars{display:grid;gap:14px}
          .cs-bar{display:grid;gap:6px}
          .cs-bar-label{display:flex;justify-content:space-between;gap:12px;font-size:.92rem;font-weight:700;font-variant-numeric:tabular-nums;color:var(--ink)}
          .cs-bar-label span:first-child{color:var(--sage);font-weight:500}
          .cs-bar-track{height:20px;border-radius:4px;background:var(--pale-sage);overflow:hidden}
          .cs-bar-fill{height:100%;width:var(--w);background:var(--sage);transform-origin:left center;animation:cs-grow 1000ms 200ms var(--ease) both}
          .cs-bar-fill.after{background:var(--sky)}
          .cs-bar-fill.range{background:linear-gradient(90deg,var(--sage) 0 var(--solid),var(--light-sage) var(--solid) 100%)}
          @keyframes cs-grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
          .cs-rcard.count{grid-column:1/-1;grid-template-columns:minmax(0,4fr) minmax(0,7fr);grid-template-areas:"top dots" "note dots";gap:16px clamp(28px,4vw,56px)}
          .cs-rcard.count .cs-rcard-top{grid-area:top;flex-direction:column;align-items:flex-start}
          .cs-rcard.count .cs-dots{grid-area:dots;align-self:center}
          .cs-rcard.count .note{grid-area:note}
          .cs-dots{display:grid;grid-template-columns:repeat(auto-fill,minmax(12px,1fr));gap:6px}
          .cs-dots i{aspect-ratio:1;border-radius:50%;background:var(--sky);animation:cs-lit 500ms calc(var(--i) * 14ms + 300ms) both}
          @keyframes cs-lit{from{background:var(--light-sage);transform:scale(.6)}to{background:var(--sky);transform:scale(1)}}
          .cs-rtexts{grid-column:1/-1;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:18px}
          .cs-rtext{background:var(--pale-sage);border-radius:10px;padding:clamp(20px,3vw,28px);border-left:6px solid var(--sky);display:grid;gap:8px;align-content:start}
          .cs-rtext:nth-child(2){border-left-color:var(--coral)}
          .cs-rtext h3{font-size:1.25rem;line-height:1.2}
          .cs-rtext p{max-width:48ch}

          /* changes */
          .cs-changes{display:grid;grid-template-columns:repeat(var(--n,2),minmax(0,1fr));gap:16px}
          .cs-change{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:10px;padding:clamp(22px,3vw,30px);display:grid;gap:12px;align-content:start}
          .cs-change-icon{width:64px;height:64px;border-radius:12px;display:grid;place-items:center}
          .cs-change:nth-child(4n+1) .cs-change-icon{background:var(--sky-soft)}
          .cs-change:nth-child(4n+2) .cs-change-icon{background:var(--butter-soft)}
          .cs-change:nth-child(4n+3) .cs-change-icon{background:var(--coral-soft)}
          .cs-change:nth-child(4n) .cs-change-icon{background:var(--pale-sage)}
          .cs-change-icon svg{width:44px;height:44px}
          .cs-change h3{font-size:1.3rem;line-height:1.2}
          .cs-change p{max-width:52ch}
          .cs-change .ripple{stroke:var(--sky);stroke-width:2.5;transform-box:fill-box;transform-origin:center;animation:cs-ripple 2.4s ease-out infinite}
          .cs-change .ripple:nth-child(2){animation-delay:.8s}
          .cs-change .ripple:nth-child(3){animation-delay:1.6s}
          @keyframes cs-ripple{from{transform:scale(.3);opacity:1}to{transform:scale(1);opacity:0}}
          .cs-change .i-ink{fill:var(--ink)}
          .cs-change .i-line{stroke:var(--ink);stroke-width:2;fill:none}
          .cs-change .i-coral{fill:var(--coral)}
          .cs-change .i-sky{fill:var(--sky)}
          .cs-change .i-sage{fill:var(--sage)}
          .cs-change .i-butter{fill:var(--butter)}
          .cs-change .i-tick{fill:none;stroke:var(--coral);stroke-width:3.2;stroke-linecap:round;stroke-linejoin:round}
          .cs-change .i-phone{fill:var(--butter);stroke:var(--ink);stroke-width:2.4}
          .cs-change .hop{animation:cs-hop 2s ease-in-out infinite alternate}
          @keyframes cs-hop{from{transform:translateY(0)}to{transform:translateY(-5px)}}
          .cs-change .grow-bar{transform-box:fill-box;transform-origin:bottom;animation:cs-pulsebar 2.4s ease-in-out infinite alternate}
          .cs-change .grow-bar:nth-child(2){animation-delay:.3s}
          .cs-change .grow-bar:nth-child(3){animation-delay:.6s}
          @keyframes cs-pulsebar{from{transform:scaleY(.8)}to{transform:scaleY(1)}}
          .cs-change .i-page{fill:var(--warm-white);stroke:var(--ink);stroke-width:2.4}
          .cs-change .i-arrow{fill:none;stroke:var(--sky);stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
          .cs-change .i-stroke{fill:none;stroke:var(--ink);stroke-width:2.5;stroke-linecap:round}
          .cs-change .pop-loop{transform-box:fill-box;transform-origin:center;animation:cs-popl 2.4s ease-in-out infinite}
          @keyframes cs-popl{0%,20%{transform:scale(0);opacity:0}45%,90%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}
          .cs .blink-node,.cs .pulse{transform-box:fill-box;transform-origin:center;animation:cs-nodepulse 2s ease-in-out infinite}
          .cs .blink-node:nth-of-type(2){animation-delay:.5s}
          .cs .blink-node:nth-of-type(3){animation-delay:1s}
          @keyframes cs-nodepulse{50%{transform:scale(1.35)}}

          /* methods */
          .cs-tools{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
          .cs-tools li{display:grid;gap:2px;padding:16px 18px;background:var(--warm-white);border:1px solid var(--light-sage);border-left:6px solid var(--sky);border-radius:8px;transition:transform var(--t) var(--ease)}
          .cs-tools li:nth-child(2){border-left-color:var(--butter)}
          .cs-tools li:nth-child(3){border-left-color:var(--coral)}
          .cs-tools li:nth-child(4){border-left-color:var(--sage)}
          .cs-tools li:hover{transform:translateX(4px)}
          .cs-tools b{font-weight:700;color:var(--ink)}
          .cs-tools span{font-size:.95rem}

          /* takeaway */
          .cs .cs-takeaway{padding-top:0}
          .cs-panel{background:var(--butter-soft);border-radius:12px;padding:clamp(28px,5vw,64px);display:grid;gap:clamp(28px,4vw,44px);color:var(--ink)}
          .cs-panel .label{color:var(--ink);margin-bottom:0}
          .cs-panel h2{font-size:clamp(1.5rem,2.5vw,2rem);line-height:1.12;max-width:26ch}
          .cs-panel p.body{max-width:62ch}
          .cs-versus{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
          .cs-versus figure{background:var(--warm-white);border-radius:8px;padding:18px;display:grid;gap:10px}
          .cs-versus svg{width:100%;height:auto;max-height:220px}
          .cs-versus .d-off{fill:var(--sage);opacity:.55}
          .cs-versus .d-on{fill:var(--sky)}
          .cs-versus .d-link{stroke:var(--sky);stroke-width:2;opacity:.7}
          .cs-pagegrid .pg-old rect{fill:var(--sage);opacity:.55}
          .cs-pagegrid .pg-new rect{fill:none;stroke:var(--sage);stroke-width:2;stroke-dasharray:5 4;opacity:.75}
          .cs-pagegrid .pg-strong rect{fill:var(--sky)}
          .cs-pagegrid .pg-arrow path{fill:none;stroke:var(--warm-white);stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
          .cs-versus figure:nth-child(2):has(.cs-check){background:color-mix(in srgb,var(--sky-soft) 45%,var(--warm-white))}
          .cs-versus figure:has(.cs-check) figcaption{order:-1;font-size:1.1rem}
          .cs-check{display:grid;gap:8px}
          .cs-check li{position:relative;padding-left:30px;font-weight:600;color:var(--ink)}
          .cs-check li::before{content:"";position:absolute;left:4px;top:.45em;width:14px;height:8px;border-left:3px solid var(--sage);border-bottom:3px solid var(--sage);transform:rotate(-45deg)}
          .cs-check[data-tone="coral"] li::before{border-color:var(--coral)}
          .cs-versus figcaption{font-weight:700;font-size:.95rem}
          .cs-versus figcaption span{display:block;font-weight:500;font-size:.85rem;color:var(--sage)}
          .cs-fit-label{font-weight:600;font-size:.95rem}
          .cs-fit{display:flex;flex-wrap:wrap;gap:10px}
          .cs-fit li{padding:8px 16px;border-radius:999px;background:var(--warm-white);color:var(--ink);font-weight:700;font-size:.92rem}

          /* screenshots with a phone view beside them (UI section) */
          .cs-journey + .cs-ui-wrap{margin-top:clamp(28px,4vw,44px)}
          .cs-ui-wrap{display:grid;grid-template-columns:minmax(0,1fr) 230px;gap:22px 28px;align-items:start}
          /* the gallery's title and tabs span both columns; the browser frame and the phone share a row */
          .cs-ui-wrap > .cs-gallery{display:contents}
          .cs-ui-wrap .cs-gallery-title,.cs-ui-wrap .cs-tabs{grid-column:1/-1}
          .cs-ui-wrap .cs-frame.big{grid-column:1;grid-row:3}
          .cs-ui-wrap .cs-phone-wrap{grid-column:2;grid-row:3}
          .cs-ui-wrap + .note{margin-top:14px}
          .cs-phone-wrap{margin:0;display:grid;gap:10px;justify-items:center}
          .cs-phone{width:min(230px,70vw);border:8px solid var(--ink);border-radius:32px;overflow:hidden;background:var(--warm-white);box-shadow:8px 8px 0 var(--butter-soft)}
          .cs-phone img{display:block;width:100%;height:auto}

          /* scale bar, e.g. load time against a threshold */
          .cs-scale{position:relative;padding:70px 4px 40px}
          .cs-scale-track{position:relative;height:30px;background:var(--pale-sage);border:1px solid var(--light-sage);border-radius:999px}
          .cs-scale-fill{position:absolute;left:0;top:0;bottom:0;background:var(--sky);border-radius:999px;transform-origin:left;animation:cs-fillx 1.4s var(--ease) both}
          @keyframes cs-fillx{from{transform:scaleX(0)}to{transform:scaleX(1)}}
          .cs-scale-mark{position:absolute;bottom:100%;display:grid;transform:translateX(-50%);text-align:center;padding-bottom:12px;white-space:nowrap}
          .cs-scale-mark b{font-size:1.7rem;font-weight:800;line-height:1.1;letter-spacing:-.02em;color:var(--ink)}
          .cs-scale-mark span{font-size:.85rem;font-weight:600;color:var(--sage)}
          .cs-scale-mark::after{content:"";position:absolute;left:50%;top:calc(100% - 10px);height:48px;width:0;border-left:2px solid var(--ink)}
          .cs-scale-mark.limit b{color:color-mix(in srgb,var(--coral) 70%,var(--ink))}
          .cs-scale-mark.limit::after{border-left:2px dashed var(--coral)}
          .cs-scale-ticks{display:flex;justify-content:space-between;margin-top:12px;font-size:.82rem;font-weight:600;color:var(--sage)}

          /* rising numbered steps */
          .cs-rise{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;align-items:end}
          .cs-rise li{display:grid;gap:4px;padding:20px;border-radius:8px;color:var(--ink);margin-bottom:calc(var(--i) * 22px)}
          .cs-rise b{font-size:1.25rem;font-weight:700;line-height:1.15;letter-spacing:-.01em}
          .cs-rise li > span:not(.cs-rise-n){font-size:.93rem}
          .cs-rise-n{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:var(--warm-white);font-weight:700;margin-bottom:8px}
          .cs-rise li:nth-child(4n+1){background:var(--sky-soft)}
          .cs-rise li:nth-child(4n+2){background:var(--butter-soft)}
          .cs-rise li:nth-child(4n+3){background:var(--coral-soft)}
          .cs-rise li:nth-child(4n){background:var(--dark-sage);color:var(--warm-white)}
          .cs-rise li:nth-child(4n) .cs-rise-n{color:var(--ink)}
          .cs-rise + .cs-frame.strip{margin:clamp(28px,4vw,44px) 0 0}

          /* rate out of 100 */
          .cs-rate{display:grid;grid-template-columns:minmax(0,340px) minmax(0,1fr);gap:28px;align-items:center}
          .cs-rate-dots{display:grid;grid-template-columns:repeat(10,minmax(0,1fr));gap:7px}
          .cs-rate-dots i{aspect-ratio:1;border-radius:50%;background:var(--light-sage)}
          .cs-rate-dots i.on{background:var(--coral);animation:cs-back 500ms calc(var(--i) * 70ms + 300ms) both}
          @keyframes cs-back{from{background:var(--light-sage);transform:scale(.6)}to{background:var(--coral);transform:scale(1)}}
          .cs-rate-n{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;color:var(--ink)}
          .cs-rate-n b{font-size:clamp(3.6rem,8vw,5.5rem);font-weight:800;line-height:1;letter-spacing:-.04em}
          .cs-rate-n span{font-weight:700;font-size:1.1rem;max-width:16ch;line-height:1.3}
          .cs-rate-sub{margin-top:6px}
          .cs-rate-cycle{display:grid;grid-template-columns:repeat(var(--days),minmax(0,1fr));gap:4px;margin-top:18px}
          .cs-rate-cycle i{height:14px;border-radius:3px;background:var(--sky);animation:cs-cyc 400ms calc(var(--i) * 45ms + 200ms) both}
          @keyframes cs-cyc{from{transform:scaleY(.2);opacity:.3}to{transform:scaleY(1);opacity:1}}
          .cs-rate-cycle-label{font-size:.85rem;font-weight:600;color:var(--sage);margin-top:6px}

          /* parts: product page wireframe (PdpToggle) */
          .cs-pdp{position:relative;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(20px,3vw,36px);padding:clamp(18px,2.6vw,28px);border:1px solid var(--light-sage);border-radius:10px;background:var(--warm-white)}
          .cs-pdp-hero{aspect-ratio:1/1;background:var(--pale-sage);border-radius:8px;display:grid;place-items:center;color:var(--sage);font-weight:600;font-size:.9rem}
          .cs-pdp-thumbs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:10px}
          .cs-pdp-thumbs i{aspect-ratio:1;border-radius:6px;background:var(--sky-soft)}
          .cs-pdp-info{display:grid;gap:12px;align-content:start}
          .cs-pdp-title{font-size:1.5rem;font-weight:800;letter-spacing:-.02em;color:var(--ink)}
          .cs-pdp-price{font-weight:700;color:var(--ink)}
          .cs-pdp-cta{justify-self:start;padding:11px 26px;border-radius:999px;background:var(--coral);color:var(--ink);font-weight:700}
          .cs-pdp-block{display:grid;gap:6px;padding:14px;border-radius:8px;color:var(--ink)}
          .cs-pdp-block b{font-size:.85rem}
          .cs-pdp-block i{display:block;height:7px;border-radius:4px;background:color-mix(in srgb,var(--ink) 22%,transparent)}
          .cs-pdp-block i.s{width:55%}
          .cs-pdp-block.info{background:var(--butter-soft)}
          .cs-pdp-block.seo{background:var(--sky-soft)}
          .cs-pdp-tag{position:absolute;left:calc(clamp(18px,2.6vw,28px) + 10px);top:calc(clamp(18px,2.6vw,28px) + 10px);padding:5px 12px;border-radius:999px;background:var(--coral-soft);color:var(--ink);font-weight:700;font-size:.8rem;border:1.5px solid var(--coral)}
          .cs-pdp.before .cs-pdp-more{display:none}
          .cs-pdp.after .cs-pdp-more{animation:cs-pdpin 350ms var(--ease) both}
          @keyframes cs-pdpin{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
          .cs-pdp + .cs-sim-caption{min-height:0}
          .cs-sim + .cs-changes{margin-top:clamp(28px,4vw,44px)}

          /* parts: cash on delivery order flow (RtoFlow) */
          .cs-rto text{font-family:var(--sans);fill:var(--ink)}
          .cs-rto .r-order{fill:var(--butter-soft)}
          .cs-rto .r-tpm-box{fill:var(--sky-soft);stroke:var(--sky);stroke-width:2}
          .cs-rto .r-tpm-line{fill:none;stroke:var(--sky);stroke-width:2.6;stroke-dasharray:5 5}
          .cs-rto .r-line{fill:none;stroke:var(--ink);stroke-width:2.6}
          .cs-rto .r-step{fill:var(--warm-white);stroke:var(--ink);stroke-width:2}
          .cs-rto .r-ok{fill:var(--pale-sage);stroke:var(--sage);stroke-width:2}
          .cs-rto .r-box{fill:var(--coral-soft);stroke:var(--coral);stroke-width:2;transition:fill 350ms var(--ease)}
          .cs .cs-rto .r-loss{fill:color-mix(in srgb,var(--coral) 70%,var(--ink))}
          .cs .cs-rto .r-goal{fill:color-mix(in srgb,var(--sky) 70%,var(--ink))}
          .cs-rto .r-tpm,.cs-rto .r-goal{transition:opacity 350ms var(--ease)}
          .cs-rto[data-state="before"] .r-tpm,.cs-rto[data-state="before"] .r-goal{opacity:0}
          .cs-rto[data-state="after"] .r-box{fill:var(--warm-white);stroke-dasharray:6 5}

          /* parts: growth against a comparison period (GrowthBars) */
          .cs-growth{display:grid;gap:14px}
          .cs-g-row{display:grid;grid-template-columns:8.5rem minmax(0,1fr) 9.5rem;gap:14px;align-items:center}
          .cs-g-lab{font-weight:700;color:var(--ink)}
          .cs-g-track{position:relative;height:26px;background:var(--pale-sage);border-radius:999px}
          .cs-g-track::after{content:"";position:absolute;left:var(--base);top:-4px;bottom:-4px;border-left:2px dashed var(--coral)}
          .cs-g-bar{height:100%;background:var(--sky);border-radius:999px;transform-origin:left;animation:cs-fillx 1.2s var(--ease) both}
          .cs-g-val{font-size:.95rem;text-align:right;white-space:nowrap}
          .cs-g-val b{color:var(--ink)}
          .cs-g-axis{display:flex;justify-content:space-between;padding:0 calc(9.5rem + 14px) 0 calc(8.5rem + 14px);font-size:.8rem;font-weight:600;color:var(--sage)}
          .cs-sim + .cs-frame.strip{margin-top:clamp(28px,4vw,44px);margin-bottom:12px}

          /* hero stat card (StatCard) */
          .cs-statcard{margin:0;background:var(--warm-white);border:1px solid var(--light-sage);border-radius:10px;padding:clamp(20px,3vw,30px);display:grid;gap:18px;box-shadow:8px 8px 0 var(--sky-soft)}
          .cs-statcard-row{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
          .cs-statcard-n{display:grid;gap:4px;color:var(--ink)}
          .cs-statcard-n b{font-size:clamp(3rem,6vw,4.5rem);font-weight:800;line-height:1;letter-spacing:-.04em}
          .cs-statcard-n span{font-weight:600;font-size:.95rem}
          .cs-journey + .note{margin-top:14px}

          /* parts: smart collections demo (SmartCollections) */
          .cs-seg.add button:hover{background:var(--pale-sage)}
          .cs-sc{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;align-items:start}
          .cs-sc-col{border-radius:8px;padding:16px;display:grid;gap:8px;color:var(--ink);align-content:start;min-height:260px}
          .cs-sc-col:nth-child(3n+1){background:var(--butter-soft)}
          .cs-sc-col:nth-child(3n+2){background:var(--coral-soft)}
          .cs-sc-col:nth-child(3n){background:var(--sky-soft)}
          .cs-sc-col h4{margin:0;font-size:1.25rem;font-weight:800;letter-spacing:-.01em;color:var(--ink)}
          .cs-sc-rule{font-size:.82rem;font-weight:600;color:var(--sage)}
          .cs-sc-col ul{display:grid;gap:8px;margin-top:4px}
          .cs-sc-col li{background:var(--warm-white);border-radius:6px;padding:9px 12px;font-size:.9rem;font-weight:600}
          .cs-sc-col li.new{animation:cs-scin 450ms var(--ease) both;box-shadow:inset 4px 0 0 var(--coral)}
          @keyframes cs-scin{from{opacity:0;transform:translateY(-10px) scale(.96)}to{opacity:1;transform:none}}

          /* parts: search result preview (SeoSnippet) */
          .cs-seo-grid{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,5fr);gap:24px;align-items:center}
          .cs-serpcard{margin:0;background:var(--warm-white);border:1px solid var(--light-sage);border-radius:10px;padding:clamp(20px,3vw,30px);display:grid;gap:6px;box-shadow:8px 8px 0 var(--sky-soft)}
          .cs-serpcard-url{font-size:.85rem;color:var(--sage)}
          .cs-serpcard-title{color:color-mix(in srgb,var(--sky) 60%,var(--ink));font-size:1.25rem;font-weight:600;line-height:1.3}
          .cs-serpcard-desc{font-size:.95rem;line-height:1.55}
          .cs-serpcard figcaption{margin-top:10px}
          .cs-seo-points{display:grid;gap:12px}
          .cs-seo-points li{display:grid;gap:2px;padding:14px 18px;background:var(--warm-white);border:1px solid var(--light-sage);border-left:6px solid var(--butter);border-radius:8px}
          .cs-seo-points li:nth-child(2){border-left-color:var(--coral)}
          .cs-seo-points li:nth-child(3){border-left-color:var(--sky)}
          .cs-seo-points li:nth-child(4){border-left-color:var(--sage)}
          .cs-seo-points.cols{grid-template-columns:repeat(var(--n),minmax(0,1fr))}
          .cs-sim + .cs-seo-points{margin-top:clamp(24px,4vw,40px)}
          .cs-seo-points b{color:var(--ink)}
          .cs-seo-points span{font-size:.95rem}

          /* parts: sale countdown (Countdown) */
          .cs-cd{display:grid;gap:clamp(16px,2vw,22px);justify-items:start;padding:clamp(20px,3vw,36px);background:var(--ink);color:var(--warm-white);border-radius:10px}
          .cs-cd + .cs-sim-caption{min-height:0}
          .cs-cd-label{font-weight:700;font-size:1rem}
          .cs-cd-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;width:100%}
          .cs-cd-box{display:grid;gap:4px;justify-items:center;padding:clamp(14px,2vw,22px) 6px;border-radius:8px;background:color-mix(in srgb,var(--warm-white) 12%,transparent)}
          .cs-cd-box b{font-size:clamp(2rem,5vw,3.6rem);font-weight:800;line-height:1;letter-spacing:-.02em;font-variant-numeric:tabular-nums}
          .cs-cd-box span{font-size:.78rem;font-weight:600;opacity:.85}
          .cs-cd-btn{padding:11px 26px;border-radius:999px;background:var(--coral);color:var(--ink);font-weight:700}

          /* parts: a wide screenshot with a narrow one beside it */
          .cs-shot-row{display:grid;grid-template-columns:minmax(0,1fr) 240px;gap:24px;align-items:start;margin-bottom:clamp(28px,4vw,44px)}
          .cs-shot-row .cs-frame.strip{margin-bottom:0;max-width:260px}
          .cs-shot-row .cs-frame figcaption{min-height:0;padding:12px 18px 14px}

          /* a short caption under any browser frame except the tabbed gallery */
          .cs-frame:not(.big) figcaption{min-height:0;padding:12px 18px 14px}

          /* parts: a screenshot, table or list followed by more content, stacked */
          .cs-stack-grid{display:grid;gap:clamp(24px,4vw,40px)}
          .cs-stack-grid .cs-frame.strip{margin-bottom:0}

          /* parts: data table in a card (DataTable) */
          .cs-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
          .cs-table{margin:0;background:var(--warm-white);border:1px solid var(--light-sage);border-radius:10px;padding:clamp(16px,3vw,28px);display:grid;gap:14px;box-shadow:8px 8px 0 var(--sky-soft);overflow-x:auto}
          .cs-table table{width:100%;border-collapse:collapse;font-size:.95rem}
          .cs-table th,.cs-table td{text-align:left;padding:11px 10px;border-bottom:1px solid var(--light-sage);vertical-align:top}
          .cs-table thead th{font-size:.8rem;font-weight:700;color:var(--sage)}
          .cs-table tbody th{font-size:1.05rem;font-weight:800;letter-spacing:-.01em;color:var(--ink)}
          .cs-table tbody tr:last-child th,.cs-table tbody tr:last-child td{border-bottom:0}

          /* parts: pricing page switches (PricingDemo) */
          .cs-pp-controls{display:flex;flex-wrap:wrap;gap:12px 20px}
          .cs-pp-controls .cs-seg{flex-wrap:wrap}
          .cs-pp-plans{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
          .cs-pp-plan{display:grid;gap:8px;align-content:start;padding:20px;border-radius:10px;background:var(--pale-sage);border:1px solid var(--light-sage);color:var(--ink)}
          .cs-pp-plan.pop{background:var(--butter-soft);border-color:transparent;box-shadow:0 5px 0 color-mix(in srgb,var(--ink) 12%,transparent)}
          .cs-pp-plan h4{margin:0;font-size:1.45rem;font-weight:800;letter-spacing:-.02em;color:var(--ink)}
          .cs-pp-for{font-size:.92rem;color:var(--sage)}
          .cs-pp-link{margin-top:6px;display:grid;gap:4px}
          .cs-pp-link span{font-size:.78rem;font-weight:700;color:var(--sage)}
          .cs-pp-link code{font-family:var(--sans);font-size:.85rem;font-weight:600;background:var(--warm-white);padding:8px 10px;border-radius:6px;overflow-wrap:anywhere;line-height:1.4}
          .cs-pp-plans + .cs-sim-caption{min-height:0}

          /* console (AuditConsole) */
          .cs-term{margin:0;background:var(--ink);border-radius:10px;overflow:hidden;box-shadow:8px 8px 0 var(--butter-soft);color:var(--warm-white);margin-right:12px}
          .cs-term-bar{display:flex;align-items:center;gap:6px;padding:10px 14px;background:color-mix(in srgb,var(--ink) 80%,var(--dark-sage))}
          .cs-term-bar i{width:10px;height:10px;border-radius:50%;background:var(--coral)}
          .cs-term-bar i:nth-child(2){background:var(--butter)}
          .cs-term-bar i:nth-child(3){background:var(--sage)}
          .cs-term-bar span{margin-left:10px;font-size:.78rem;font-weight:600;color:var(--sky-soft)}
          .cs-term-body,.cs-code pre{font-variant-ligatures:none;font-feature-settings:"calt" 0,"liga" 0}
          .cs-term-body{padding:18px 20px;font-size:.86rem;line-height:1.55;display:grid;gap:6px;min-height:262px;align-content:start}
          .cs-term-line{margin:0;animation:cs-term-in 160ms var(--d,0ms) ease-out both}
          @keyframes cs-term-in{from{opacity:0}to{opacity:1}}
          .cs-term-row{display:grid;grid-template-columns:minmax(0,9.5em) minmax(0,1fr) auto;gap:4px 12px}
          .cs-term-gap{height:.4em}
          .cs-term .p{color:var(--butter);font-weight:700}
          .cs-term .dim{color:var(--light-sage)}
          .cs-term .ok{color:var(--sky-soft);font-weight:600}
          .cs-term .hi{color:var(--coral-soft);font-weight:700}
          .cs-term-caret{display:block;width:8px;height:1em;background:var(--butter)}
          .cs-term-caret{animation:cs-term-in 160ms var(--d,0ms) ease-out both,cs-blink 1s steps(1) var(--d,0ms) infinite}
          .cs-term-foot{padding:9px 20px;font-size:.75rem;color:var(--light-sage);border-top:1px solid color-mix(in srgb,var(--warm-white) 18%,var(--ink))}

          /* audit before/after (AuditToggle) */
          .cs-audit{display:grid;gap:10px}
          .cs-audit-row{display:grid;grid-template-columns:minmax(0,220px) minmax(0,1fr) auto;gap:8px 18px;align-items:center;padding:16px 18px;border:1px solid var(--light-sage);border-radius:8px;background:color-mix(in srgb,var(--pale-sage) 40%,var(--warm-white))}
          .cs-audit-row h4{margin:0;font-size:1rem;font-weight:700;line-height:1.35;color:var(--ink)}
          .cs-audit-row p{font-size:.94rem;line-height:1.5}
          .cs-audit-status{font-size:.78rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase;padding:8px 12px;border-radius:999px;white-space:nowrap;min-width:116px;text-align:center;color:var(--ink);background:var(--coral-soft);transition:background 300ms var(--ease)}
          .cs-audit[data-state="after"] .cs-audit-status{background:var(--sky-soft)}
          .cs-audit[data-state="before"] .t-after,.cs-audit[data-state="after"] .t-before{display:none}

          /* load waterfall (LcpWaterfall) */
          .cs-wf{display:grid;gap:10px;position:relative;padding-top:28px;--lab:150px}
          .cs-wf-row{display:grid;grid-template-columns:var(--lab) minmax(0,1fr);gap:12px;align-items:center;font-size:.84rem;font-weight:600;color:var(--ink)}
          .cs-wf-track{position:relative;height:26px;background:var(--pale-sage);border-radius:4px}
          .cs-wf-bar{position:absolute;top:3px;bottom:3px;border-radius:3px;left:var(--s);width:var(--w);transition:left 700ms var(--ease),width 700ms var(--ease)}
          .cs-wf .b1,.cs-wf-legend .b1::before{background:var(--sky)}
          .cs-wf .b2,.cs-wf-legend .b2::before{background:var(--butter)}
          .cs-wf .b3,.cs-wf-legend .b3::before{background:var(--coral)}
          .cs-wf .b4,.cs-wf-legend .b4::before{background:var(--sage)}
          .cs-wf-lcp{position:absolute;top:0;bottom:0;left:calc(var(--lab) + 12px);right:0;pointer-events:none}
          .cs-wf-lcp i{position:absolute;top:22px;bottom:0;width:0;border-left:2px dashed var(--ink);left:var(--x);transition:left 700ms var(--ease)}
          .cs-wf-lcp b{position:absolute;top:0;left:var(--x);transform:translateX(-50%);font-size:.74rem;font-weight:700;background:var(--ink);color:var(--warm-white);padding:3px 8px;border-radius:4px;transition:left 700ms var(--ease)}
          .cs-wf-legend{display:flex;flex-wrap:wrap;gap:6px 18px;font-size:.8rem;font-weight:600;color:var(--sage)}
          .cs-wf-legend li::before{content:"";display:inline-block;width:10px;height:10px;border-radius:2px;margin-right:6px;vertical-align:-1px}
          .cs-wf-legend + .cs-sim-caption{min-height:3.4em}

          /* code samples (CodeBlock, RobotsTester) */
          .cs-code-split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:20px;align-items:start}
          .cs-code{background:var(--ink);color:var(--warm-white);border-radius:8px;overflow:hidden;min-width:0}
          .cs-code-lab{padding:9px 16px;font-size:.76rem;font-weight:700;letter-spacing:.02em;color:var(--butter-soft);border-bottom:1px solid color-mix(in srgb,var(--warm-white) 18%,var(--ink))}
          .cs-code pre{margin:0;padding:14px 16px;overflow-x:auto;font-family:var(--sans);font-size:.84rem;line-height:1.65;white-space:pre}
          .cs-code .cs-k{color:var(--butter)}
          .cs-code .cs-s{color:var(--sky-soft)}
          .cs-code .cs-c{color:var(--light-sage)}
          .cs-code .cs-h{background:color-mix(in srgb,var(--butter) 28%,var(--ink));border-radius:3px}

          /* LCP slider (LcpSlider) */
          .cs-vital{display:grid;gap:14px;align-content:start}
          .cs-vital h4{margin:0;font-size:1.05rem;font-weight:700;color:var(--ink)}
          .cs-vital-row{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px}
          .cs-vital-row output{font-size:1.6rem;font-weight:800;color:var(--ink);min-width:3.6ch;font-variant-numeric:tabular-nums}
          .cs-vital-row input{flex:1 1 200px;accent-color:var(--coral);height:28px;min-width:0}
          .cs-verdict{font-size:.8rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase;padding:8px 14px;border-radius:999px;color:var(--ink)}
          .cs-verdict.v0,.cs-vscale .v0{background:var(--sky-soft)}
          .cs-verdict.v1,.cs-vscale .v1{background:var(--butter-soft)}
          .cs-verdict.v2,.cs-vscale .v2{background:var(--coral-soft)}
          .cs-vscale{position:relative;display:grid;grid-template-columns:41.67fr 25fr 33.33fr;gap:3px}
          .cs-vscale i{font-style:normal;font-size:.78rem;font-weight:700;padding:12px 6px;text-align:center;color:var(--ink);border-radius:4px}
          .cs-vpin{position:absolute;top:-8px;bottom:-8px;width:3px;background:var(--ink);border-radius:2px;left:var(--x,0);transform:translateX(-50%)}

          /* search result with and without schema (SchemaToggle) */
          .cs-schema{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:20px;align-items:start}
          .cs-rich{display:grid;gap:4px;padding:18px 20px;border:1px solid var(--light-sage);border-radius:8px;background:color-mix(in srgb,var(--pale-sage) 40%,var(--warm-white))}
          .cs-rich-u{font-size:.84rem;color:var(--sage)}
          .cs-rich-t{font-size:1.15rem;font-weight:700;line-height:1.3;color:color-mix(in srgb,var(--sky) 60%,var(--ink))}
          .cs-rich-r{display:flex;flex-wrap:wrap;align-items:center;gap:4px 10px;font-size:.88rem;color:var(--ink)}
          .cs-rich[data-state="without"] .cs-rich-r{display:none}
          .cs-rich-d{font-size:.92rem;line-height:1.5}

          /* robots.txt tester (RobotsTester) */
          .cs-robots{display:grid;gap:14px;align-content:start}
          .cs-robots-in{display:flex;flex-wrap:wrap;gap:8px 10px;align-items:center}
          .cs-robots-in label{font-size:.84rem;font-weight:700;color:var(--sage)}
          .cs-robots-in input{flex:1 1 220px;min-width:0;min-height:46px;padding:10px 14px;border:1.5px solid var(--ink);border-radius:8px;font:600 .95rem var(--sans);background:var(--warm-white);color:var(--ink)}
          .cs-robots-chips{display:flex;flex-wrap:wrap;gap:8px}
          .cs-robots-chips button{font:600 .82rem var(--sans);padding:8px 12px;border-radius:999px;border:1.5px solid var(--light-sage);background:var(--warm-white);color:var(--ink);cursor:pointer;min-height:38px;overflow-wrap:anywhere;text-align:left}
          .cs-robots-chips button:hover{border-color:var(--ink)}
          .cs-robots-out{padding:16px 18px;border-radius:8px;font-size:.94rem;font-weight:600;line-height:1.5;color:var(--ink);overflow-wrap:anywhere}
          .cs-robots-out.ok{background:var(--sky-soft)}
          .cs-robots-out.no{background:var(--coral-soft)}
          .cs-robots-out b{display:block;font-size:1.05rem}

          /* stages of the work (StagePipeline) */
          .cs-pipe{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
          .cs-stage{font:inherit;text-align:left;padding:18px;border-radius:8px;border:1.5px solid var(--light-sage);background:var(--warm-white);cursor:pointer;display:grid;gap:4px;align-content:start;color:var(--ink);transition:background var(--t) var(--ease),border-color var(--t) var(--ease),transform var(--t) var(--ease)}
          .cs-stage:hover{transform:translateY(-2px)}
          .cs-stage small{font-size:.76rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:var(--sage)}
          .cs-stage b{font-size:1.15rem;font-weight:700;line-height:1.25}
          .cs-stage[aria-pressed="true"]{border-color:var(--ink)}
          .cs-stage.c1[aria-pressed="true"]{background:var(--sky-soft)}
          .cs-stage.c2[aria-pressed="true"]{background:var(--butter-soft)}
          .cs-stage.c3[aria-pressed="true"]{background:var(--coral-soft)}
          .cs-stage.c4[aria-pressed="true"]{background:var(--pale-sage)}
          .cs-pipe-track{height:6px;border-radius:3px;background:var(--pale-sage);position:relative;overflow:hidden}
          .cs-pipe-track i{position:absolute;inset:0 auto 0 0;width:var(--p,25%);background:var(--coral);border-radius:3px;transition:width 500ms var(--ease)}
          .cs-pbox{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
          .cs-pbox[hidden]{display:none}
          .cs-pbox > div{padding:16px 18px;border-radius:8px;background:color-mix(in srgb,var(--pale-sage) 40%,var(--warm-white));border:1px solid var(--light-sage)}
          .cs-pbox .lab{font-size:.76rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:var(--sky);margin-bottom:4px}
          .cs-pbox p{font-size:.95rem;line-height:1.55}

          /* technical layout (TechnicalCaseStudyPage, first used for Croma) */
          .cs-tech-progress{position:fixed;inset:0 0 auto 0;height:4px;background:var(--coral);transform:scaleX(0);transform-origin:left;z-index:60;pointer-events:none}
          .cs-tech-subnav{position:sticky;z-index:40;background:color-mix(in srgb,var(--warm-white) 94%,transparent);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border-bottom:1px solid var(--light-sage)}
          .cs-tech-subnav .wrap{display:flex;gap:6px;overflow-x:auto;padding-top:10px;padding-bottom:10px;scrollbar-width:none}
          .cs-tech-subnav .wrap::-webkit-scrollbar{display:none}
          .cs-tech-subnav a{flex:none;font-size:.75rem;font-weight:700;line-height:1;letter-spacing:.06em;text-transform:uppercase;text-decoration:none;color:var(--sage);padding:9px 13px;border-radius:999px;border:1px solid transparent;transition:background var(--t) var(--ease),color var(--t) var(--ease),border-color var(--t) var(--ease)}
          .cs-tech-subnav a:hover{border-color:var(--light-sage);color:var(--ink)}
          .cs-tech-subnav a.on{background:var(--ink);color:var(--warm-white)}
          .cs-tech #overview,.cs-tech .cs-tech-band{scroll-margin-top:var(--cs-tech-offset,150px)}

          .cs .cs-tech-hero{position:relative;padding:clamp(32px,5vw,72px) 0 clamp(44px,6vw,80px);background-image:linear-gradient(var(--light-sage) 1px,transparent 1px),linear-gradient(90deg,var(--light-sage) 1px,transparent 1px);background-size:44px 44px;background-position:-1px -1px}
          .cs-tech-hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,color-mix(in srgb,var(--warm-white) 55%,transparent),var(--warm-white) 96%);pointer-events:none}
          .cs-tech-hero > .wrap{position:relative;z-index:1}
          .cs-tech-crumbs{display:flex;flex-wrap:wrap;gap:8px;font-size:.85rem;font-weight:500;color:var(--sage);margin-bottom:26px}
          .cs-tech-crumbs > span{display:inline-flex;gap:8px}
          .cs-tech-crumbs a{color:inherit;text-decoration:underline;text-underline-offset:3px}
          .cs-tech-crumbs a:hover{color:var(--ink)}
          .cs-tech-hero-grid{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,5fr);gap:clamp(32px,5vw,64px);align-items:center}
          .cs-tech-hero-copy{display:grid;gap:22px}
          .cs-tech-kicker{display:flex;align-items:center;flex-wrap:wrap;gap:8px 12px;font-size:.78rem;font-weight:700;line-height:1.3;letter-spacing:.06em;text-transform:uppercase;color:color-mix(in srgb,var(--sky) 65%,var(--ink))}
          .cs-tech-ribbon{display:inline-flex;gap:3px;flex:none}
          .cs-tech-ribbon i{display:block;width:18px;height:6px;border-radius:2px;transform-origin:left;animation:cs-tech-ribbon 700ms var(--ease) both;background:var(--coral)}
          .cs-tech-ribbon i:nth-child(2){background:var(--butter);animation-delay:90ms}
          .cs-tech-ribbon i:nth-child(3){background:var(--sky);animation-delay:180ms}
          @keyframes cs-tech-ribbon{from{transform:scaleX(0)}}
          .cs-tech-hero h1{font-size:clamp(1.85rem,3.2vw,2.6rem);line-height:1.08;letter-spacing:-.03em}
          .cs-tech-dek{font-size:clamp(1.05rem,1.5vw,1.25rem);line-height:1.4;font-weight:600;color:var(--sage);max-width:42ch}
          .cs-tech-lede{font-size:clamp(1rem,1.3vw,1.1rem);line-height:1.65;color:var(--sage);max-width:64ch}
          .cs-tech-glance{display:flex;flex-wrap:wrap;gap:8px 10px}
          .cs-tech-glance li{font-size:.78rem;font-weight:700;padding:7px 12px;border-radius:999px;background:var(--warm-white);border:1px solid var(--light-sage);color:var(--ink)}
          .cs-tech-glance li span{color:var(--sage);font-weight:500}
          .cs-tech-hero-visual .cs-term{margin-right:8px}

          .cs .cs-tech-metrics-sec{padding:0}
          .cs-tech-metrics{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:14px}
          .cs-tech-metric{padding:26px 24px;border-radius:6px;color:var(--ink);display:grid;gap:10px;min-height:150px;align-content:space-between}
          .cs-tech-metric.sky{background:var(--sky-soft)}
          .cs-tech-metric.butter{background:var(--butter-soft)}
          .cs-tech-metric.coral{background:var(--coral-soft)}
          .cs-tech-metric.sage,.cs-tech-metric.plain{background:var(--pale-sage)}
          .cs-tech-metric b{font-size:clamp(2rem,3.4vw,2.8rem);font-weight:700;line-height:1.05;letter-spacing:-.03em}
          .cs-tech-metric span{font-size:.76rem;font-weight:700;line-height:1.4;letter-spacing:.05em;text-transform:uppercase}

          .cs .cs-tech-band.pale{background:var(--pale-sage)}
          .cs .cs-tech-band.sky{background:color-mix(in srgb,var(--sky-soft) 45%,var(--warm-white))}
          .cs-tech-head{display:grid;gap:14px;margin-bottom:clamp(28px,4vw,48px);max-width:820px}
          .cs-tech-sec{font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:color-mix(in srgb,var(--coral) 72%,var(--ink))}
          .cs-tech .cs-sim{margin-top:0;box-shadow:8px 8px 0 var(--sky-soft)}

          .cs-tech-results{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:18px}
          .cs-tech-rcard{background:var(--warm-white);border:1px solid var(--sky-soft);border-radius:10px;padding:clamp(20px,3vw,30px);display:grid;gap:20px;align-content:start}
          .cs-tech-mult{font-size:clamp(3rem,6vw,4.4rem);font-weight:800;line-height:1;letter-spacing:-.04em;color:var(--coral)}
          .cs-tech-rlist{display:grid;gap:14px;align-content:start}
          .cs-tech-rtext{background:var(--warm-white);border:1px solid var(--light-sage);border-left:6px solid var(--sky);border-radius:10px;padding:20px 22px;display:grid;gap:4px}
          .cs-tech-rtext:nth-child(2){border-left-color:var(--coral)}
          .cs-tech-rtext:nth-child(3){border-left-color:var(--butter)}
          .cs-tech-rtext h3{font-size:1.15rem;line-height:1.25}
          .cs-tech-rtext p{font-size:.95rem;color:var(--sage)}
          .cs-tech-more{margin-top:clamp(48px,6vw,80px)}
          .cs-tech-changes{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
          .cs-tech-change{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:10px;padding:clamp(20px,3vw,28px);display:grid;gap:8px;align-content:start}
          .cs-tech-change::before{content:"";width:44px;height:8px;border-radius:2px;background:var(--sky)}
          .cs-tech-change:nth-child(2)::before{background:var(--butter)}
          .cs-tech-change:nth-child(3)::before{background:var(--coral)}
          .cs-tech-change:nth-child(4)::before{background:var(--sage)}
          .cs-tech-change h3{font-size:1.2rem;line-height:1.25}
          .cs-tech-change p{color:var(--sage)}
          .cs-tech-tools{display:flex;flex-wrap:wrap;gap:10px}
          .cs-tech-tools li{font-size:.84rem;font-weight:700;padding:10px 14px;background:var(--warm-white);border:1px solid var(--light-sage);border-left:5px solid var(--sky);border-radius:6px;color:var(--ink)}
          .cs-tech-tools li:nth-child(2){border-left-color:var(--butter)}
          .cs-tech-tools li:nth-child(3){border-left-color:var(--coral)}
          .cs-tech-tools li:nth-child(4){border-left-color:var(--sage)}

          .cs-tech-panel{background:var(--butter-soft);border-radius:12px;padding:clamp(28px,5vw,60px);display:grid;gap:22px;color:var(--ink)}
          .cs-tech-panel .cs-tech-kicker{color:var(--ink)}
          .cs-tech-panel h2{max-width:24ch}
          .cs-tech-panel p{max-width:62ch}
          .cs-tech-about{margin-top:28px}
          .cs-tech-cta .btn{background:var(--ink);color:var(--warm-white)}
          .cs-tech-cta .btn:hover{background:color-mix(in srgb,var(--ink) 85%,var(--warm-white));color:var(--warm-white)}

          .cs .cs-tech-hero.plain{background-image:none}
          .cs-tech-hero.plain::after{display:none}
          .cs-tech-hero-note{margin-top:14px}
          .cs-tech-results.single{grid-template-columns:1fr}
          .cs-tech-odo{position:fixed;left:14px;bottom:14px;z-index:55;display:flex;gap:10px;align-items:center;padding:9px 14px;border-radius:999px;background:var(--ink);color:var(--warm-white);font-size:.74rem;font-weight:700;letter-spacing:.03em;box-shadow:4px 4px 0 var(--butter);pointer-events:none}
          .cs-tech-odo i{display:block;width:8px;height:8px;border-radius:50%;background:var(--coral)}
          .cs-tech-odo b{color:var(--butter);font-variant-numeric:tabular-nums}

          /* local SEO demos (Maruti Suzuki: ShowroomMap, NetworkAudit, NapConsistency, LandingPagePreview, ReviewLane, RoadStops, ResultDials) */
          .cs-car .body{fill:var(--coral);stroke:var(--ink);stroke-width:1.4;stroke-linejoin:round}
          .cs-car .win{fill:var(--sky-soft)}
          .cs-car .wheel{fill:var(--ink)}
          .cs-car .hub{fill:var(--warm-white)}
          .cs-ctl{display:flex;flex-wrap:wrap;gap:10px;align-items:center}
          .cs-ctl .btn{min-height:44px;padding:10px 20px;font-size:.92rem}
          .cs-ctl .btn:disabled{opacity:.5;cursor:default;transform:none}
          .cs-stats{display:flex;flex-wrap:wrap;gap:10px}
          .cs-stats li{font-size:.8rem;font-weight:700;padding:8px 12px;border-radius:999px;background:var(--pale-sage);color:var(--ink)}
          .cs-stats b{font-size:1rem;font-variant-numeric:tabular-nums}
          .cs-chips-on button[aria-pressed="true"]{background:var(--ink);color:var(--warm-white);border-color:var(--ink)}

          .cs-map{background:var(--pale-sage);border:1.5px solid var(--ink);border-radius:14px;overflow:hidden;box-shadow:8px 8px 0 var(--butter-soft);margin-right:8px}
          .cs-map svg{display:block;width:100%;height:auto}
          .cs-map .bg{fill:var(--pale-sage)}
          .cs-map .blk{fill:var(--warm-white);opacity:.7}
          .cs-map .rd{fill:none;stroke:var(--warm-white);stroke-width:18;stroke-linecap:round}
          .cs-map .you{fill:var(--sky);stroke:var(--ink);stroke-width:2}
          .cs-pin{cursor:pointer;outline:none}
          .cs-pin .o{fill:var(--coral);stroke:var(--ink);stroke-width:2;transition:fill 250ms}
          .cs-pin.on .o{fill:var(--butter)}
          .cs-pin:focus-visible .o{stroke-width:4}
          .cs-pin .hole{fill:var(--warm-white)}
          .cs-pin text{font:700 10px var(--sans);fill:var(--ink);text-anchor:middle;pointer-events:none}
          .cs-map-ui{display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;padding:12px 14px;background:var(--warm-white);border-top:1.5px solid var(--ink)}
          .cs-map-info{flex:1 1 200px;font-size:.84rem;font-weight:600;color:var(--ink)}

          .cs-net{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
          .cs-dl{font:inherit;text-align:left;padding:12px;border-radius:8px;border:1.5px solid var(--light-sage);background:var(--warm-white);cursor:pointer;display:grid;gap:8px;color:var(--ink);transition:border-color var(--t) var(--ease),background 300ms,transform var(--t) var(--ease)}
          .cs-dl b{font-size:.86rem}
          .cs-dl.scan{border-color:var(--ink);transform:translateY(-3px)}
          .cs-dl.fixed{background:color-mix(in srgb,var(--sky-soft) 45%,var(--warm-white));border-color:var(--sky)}
          .cs-dl-tags{display:flex;flex-wrap:wrap;gap:5px}
          .cs-dl-tags span{font-size:.66rem;font-weight:700;padding:4px 6px;border-radius:4px;background:var(--pale-sage);color:var(--sage);transition:background 250ms}
          .cs-dl-tags span.bad{background:var(--coral-soft);color:var(--ink)}
          .cs-dl-tags span.ok{background:var(--sky-soft);color:var(--ink)}

          .cs-nap-split{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,2fr);gap:20px;align-items:start}
          .cs-nap,.cs-nap-rows{display:grid;gap:10px}
          .cs-nap-head,.cs-nap-row{display:grid;grid-template-columns:150px minmax(0,1fr) minmax(0,1.5fr) minmax(0,1fr);gap:8px;align-items:center}
          .cs-nap-head{padding:0 14px;font-size:.72rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--sage)}
          .cs-nap-row{padding:14px;border:1px solid var(--light-sage);border-radius:8px;background:color-mix(in srgb,var(--pale-sage) 40%,var(--warm-white))}
          .cs-nap-row > b{font-size:.8rem;color:var(--ink)}
          .cs-cell{font:600 .88rem var(--sans);padding:10px 12px;border-radius:6px;text-align:left;color:var(--ink);border:1.5px solid transparent;min-height:42px;display:flex;flex-wrap:wrap;align-items:center;gap:4px 8px;transition:background 300ms}
          .cs-cell.ok{background:var(--sky-soft)}
          .cs-cell.bad{background:var(--coral-soft);border:1.5px dashed var(--ink);cursor:pointer}
          .cs-cell small{margin-left:auto;font-size:.68rem;font-weight:700;text-transform:uppercase}
          .cs-gauge-wrap{display:grid;gap:10px;justify-items:center;text-align:center}
          .cs-gauge{width:min(260px,100%);height:auto}
          .cs-gauge .tr{fill:none;stroke:var(--pale-sage);stroke-width:16;stroke-linecap:round}
          .cs-gauge .fg{fill:none;stroke:var(--sky);stroke-width:16;stroke-linecap:round;stroke-dasharray:251.3;transition:stroke-dashoffset 700ms var(--ease)}
          .cs-gauge text{font:700 22px var(--sans);fill:var(--ink);text-anchor:middle}
          .cs-gauge .hub,.cs-dial .hub{fill:var(--ink)}
          .cs-needle{stroke:var(--ink);stroke-width:4;stroke-linecap:round;transform-origin:100px 100px;transform:rotate(var(--a,-90deg));transition:transform 700ms var(--ease)}
          .cs-gauge-lab{font-size:.74rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:color-mix(in srgb,var(--sky) 65%,var(--ink))}
          .cs-gauge-wrap .cs-sim-caption{min-height:4em}

          .cs-lp{border:1.5px solid var(--ink);border-radius:10px;background:color-mix(in srgb,var(--pale-sage) 40%,var(--warm-white));overflow:hidden;min-width:0}
          .cs-lp-bar{padding:9px 12px;background:var(--pale-sage);border-bottom:1px solid var(--light-sage);font-size:.78rem;font-weight:600;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
          .cs-lp-body{padding:16px;display:grid;gap:12px}
          .cs-lp-body h3{font-size:1.35rem;line-height:1.15}
          .cs-lp-map{height:92px;border-radius:8px;background:linear-gradient(90deg,transparent 48%,var(--warm-white) 48% 52%,transparent 52%),linear-gradient(transparent 55%,var(--warm-white) 55% 61%,transparent 61%),var(--pale-sage);position:relative}
          .cs-lp-map::after{content:"";position:absolute;left:46%;top:30%;width:18px;height:18px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:var(--coral);border:2px solid var(--ink)}
          .cs-lp-nap{font-size:.86rem;font-weight:600;line-height:1.6;color:var(--ink)}
          .cs-lp-loc{border:1.5px dashed var(--sage);border-radius:8px;padding:12px;background:color-mix(in srgb,var(--sky-soft) 45%,var(--warm-white));font-size:.9rem;color:var(--sage)}
          .cs-lp-side{display:grid;gap:14px;align-content:start}
          .cs-why{display:grid;gap:8px;padding-left:1.1em;list-style:disc;color:var(--sage);font-size:.95rem}
          .cs-why li::marker{color:var(--coral)}

          .cs-lane{position:relative;height:56px;border-radius:8px;background:var(--pale-sage);overflow:hidden}
          .cs-lane::before{content:"";position:absolute;left:0;right:0;top:50%;border-top:3px dashed var(--warm-white)}
          .cs-lane-car{position:absolute;top:12px;left:0;width:56px;height:28px}
          .cs-rsteps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}
          .cs-rsteps span{font-size:.7rem;font-weight:700;line-height:1.3;letter-spacing:.03em;text-transform:uppercase;text-align:center;padding:10px 6px;border-radius:6px;background:var(--pale-sage);color:var(--sage);transition:background 250ms,color 250ms}
          .cs-rsteps span.on{background:var(--ink);color:var(--warm-white)}

          .cs-road{position:relative;padding-left:64px}
          .cs-road-line{position:absolute;left:22px;top:0;bottom:0;border-left:4px dashed var(--ink)}
          .cs-road-car{position:absolute;left:2px;top:1px;width:44px;height:22px;transform:rotate(90deg);z-index:2}
          .cs-stop{position:relative;padding:18px 20px;border-radius:8px;background:var(--warm-white);border:1.5px solid var(--light-sage);margin-bottom:18px;opacity:.5;display:grid;gap:4px;transition:opacity 300ms,border-color 300ms}
          .cs-stop::before{content:"";position:absolute;left:-52px;top:22px;width:20px;height:20px;border-radius:50%;background:var(--warm-white);border:3px solid var(--ink);transition:background 300ms}
          .cs-stop.arrived{opacity:1;border-color:var(--ink)}
          .cs-stop.arrived::before{background:var(--coral)}
          .cs-stop small{font-size:.74rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:color-mix(in srgb,var(--sky) 65%,var(--ink))}
          .cs-stop b{font-size:1.2rem;line-height:1.25;color:var(--ink)}
          .cs-stop span{font-size:.95rem;color:var(--sage)}

          .cs-dials{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
          .cs-dial{background:var(--warm-white);border:1px solid var(--light-sage);border-radius:10px;padding:18px;display:grid;gap:6px;justify-items:center;text-align:center}
          .cs-dial svg{width:100%;max-width:220px;height:auto}
          .cs-dial .z{fill:none;stroke-width:16}
          .cs-dial .z1{stroke:var(--coral-soft)}
          .cs-dial .z2{stroke:var(--butter-soft)}
          .cs-dial .z3{stroke:var(--sky-soft)}
          .cs-dial h3{font-size:1.15rem;line-height:1.25}
          .cs-dial p{font-size:.76rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:color-mix(in srgb,var(--sky) 65%,var(--ink))}
          .cs-dial .cs-needle{--a:-72deg;transition:transform 1500ms var(--ease)}
          .cs-dials.in .cs-needle{--a:55deg}
          .cs-dials-wrap{margin-bottom:28px}
          .cs-dials-wrap > .note{margin-top:12px}

          @media (max-width:1000px){
            .cs-net{grid-template-columns:repeat(3,minmax(0,1fr))}
          }
          @media (max-width:900px){
            .cs-tech-hero-grid,.cs-tech-results{grid-template-columns:1fr}
            .cs-nap-split{grid-template-columns:1fr}
          }
          @media (max-width:860px){
            .cs-nap-head{display:none}
            .cs-nap-row{grid-template-columns:1fr}
          }
          @media (max-width:760px){
            .cs-dials{grid-template-columns:1fr}
          }
          @media (max-width:700px){
            .cs-net{grid-template-columns:repeat(2,minmax(0,1fr))}
          }
          @media (max-width:760px){
            .cs-tech-metrics{grid-template-columns:1fr}
            .cs-tech-metric{min-height:0}
          }
          @media (max-width:720px){
            .cs-tech-changes{grid-template-columns:1fr}
          }

          /* origin + cta */
          .cs .cs-close{padding-top:0}
          .cs-about{display:grid;gap:16px;padding:clamp(22px,3vw,32px);border:1px solid var(--light-sage);border-radius:10px;background:var(--warm-white)}
          .cs-about h2{font-size:1.5rem;line-height:1.2;letter-spacing:-.02em}
          .cs-about p{max-width:64ch}
          .cs-cta{background:var(--coral-soft);color:var(--ink);border-radius:12px;padding:clamp(28px,5vw,56px);display:grid;gap:20px;margin-top:28px;position:relative;overflow:hidden}
          .cs-cta::after{content:"";position:absolute;right:0;bottom:0;width:clamp(80px,14vw,180px);height:clamp(80px,14vw,180px);background:var(--butter);clip-path:polygon(100% 0,100% 100%,0 100%)}
          .cs-cta h2{font-size:clamp(1.5rem,2.4vw,1.95rem);line-height:1.12;max-width:24ch}
          .cs-cta p{max-width:54ch}
          .cs-cta .cta-row{position:relative;z-index:1}
          .cs-cta.alone{margin-top:0}

          @media (max-width:1040px){
            .cs-metrics{grid-template-columns:repeat(2,minmax(0,1fr))}
            .cs-steps{grid-template-columns:repeat(2,minmax(0,1fr))}
            .cs-step:nth-child(n){margin-top:0}
            .cs-lift{display:none}
            .cs-bento{grid-template-columns:repeat(2,minmax(0,1fr))}
            .cs-bento .wide{grid-column:1/-1}
            .cs-changes{grid-template-columns:repeat(2,minmax(0,1fr))}
            .cs-build{grid-template-columns:1fr}
            .cs-mockwrap{position:static}
            .cs-ui-wrap{grid-template-columns:1fr}
            .cs-ui-wrap .cs-frame.big,.cs-ui-wrap .cs-phone-wrap{grid-column:1;grid-row:auto}
          }
          @media (max-width:900px){
            .cs-code-split,.cs-schema,.cs-pipe{grid-template-columns:1fr}
            .cs-hero-grid,.cs-split,.cs-rcard.count,.cs-seo-grid,.cs-shot-row{grid-template-columns:1fr}
            .cs-rcard.count{grid-template-areas:"top" "dots" "note"}
            .cs-split.sticky > :first-child{position:static}
            .cs-nsteps{grid-template-columns:1fr}
            .cs-nsteps li:nth-child(n){margin-top:0}
            .cs-countcard{grid-template-columns:1fr;grid-template-areas:"top" "dots" "note"}
            .cs-countcard-top{flex-direction:row;align-items:baseline;flex-wrap:wrap}
            .cs-countcard .cs-dots{grid-template-columns:repeat(10,minmax(0,1fr))}
            .cs-rise{grid-template-columns:1fr}
            .cs-rise li{margin-bottom:0}
          }
          @media (max-width:760px){
            .cs-pbox{grid-template-columns:1fr}
            .cs-audit-row{grid-template-columns:minmax(0,1fr) auto}
            .cs-audit-row p{grid-column:1/-1;grid-row:2}
            .cs-problems,.cs-tools,.cs-versus,.cs-changes,.cs-rate,.cs-sc,.cs-pp-plans,.cs-seo-points.cols{grid-template-columns:1fr}
            .cs-sc-col{min-height:0}
          }
          @media (max-width:560px){
            .cs-scale-mark span{font-size:.75rem}
            .cs-scale-mark.value{transform:translateX(-70%)}
            .cs-scale-mark.limit{transform:translateX(-30%)}
          }
          @media (max-width:640px){
            .cs-wf{--lab:96px}
            .cs-wf-row{font-size:.76rem}
            .cs-term-row{grid-template-columns:minmax(0,1fr) auto}
            .cs-term-row > span:nth-child(2){grid-column:1/-1;grid-row:2;padding-left:1em}
            .cs-metrics,.cs-audience,.cs-steps,.cs-bento{grid-template-columns:1fr}
            .cs-bento .wide{grid-column:auto}
            .cs-journey{flex-direction:column;align-items:stretch}
            .cs-bi{grid-template-columns:1fr}
            .cs-spark{height:56px}
            .cs-j-arrow{display:none}
            .cs-pdp{grid-template-columns:1fr}
            .cs-seg.add,.cs-pp-controls .cs-seg{flex-wrap:wrap;border-radius:22px}
            .cs-pp-controls .cs-seg button{flex:1 1 auto;padding:9px 12px}
            .cs-table th,.cs-table td{padding:9px 6px;font-size:.88rem}
            .cs-table tbody th{font-size:1rem}
            .cs-seg.add button{flex:1 1 auto}
            .cs-g-row{grid-template-columns:minmax(0,1fr) auto}
            .cs-g-track{grid-column:1/-1;order:3}
            .cs-g-axis{padding:0}
          }
          @media (prefers-reduced-motion:reduce){
            .cs *,.cs *::before,.cs *::after{animation:none !important;transition:none !important}
            .cs .draw,.cs-lift .line{stroke-dashoffset:0}
            .cs-serp-marker{transform:none}
          }
        `;
