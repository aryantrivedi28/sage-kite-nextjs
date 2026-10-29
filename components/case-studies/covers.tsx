import type { ReactNode } from 'react';

/*
 * Cover illustrations for the /case-studies listing cards (decision.md D050).
 *
 * Every cover is drawn here from scratch: no photos, stock images, client screenshots, logos,
 * brand or product names, text, numbers or faces, so there is no copyright question. They are
 * decorative (aria-hidden): the card's heading already names the study.
 *
 * Colours come only from classes defined in the case studies page's <style> block, scoped
 * under .cs-cover and mapped to the brand tokens (f-* fills, s-* strokes with no fill, o-*
 * outlines for filled shapes, thin = 2px). Never a hex value or a fill attribute.
 *
 * The viewBox is 16:9 like the card media. With `slice`, a wider or taller box crops the
 * edges, so the main subject stays inside x 120–520, y 40–320.
 *
 * Adding a study: write a cover below (taking CoverProps and passing `fit` to CoverFrame), then set
 * `cover: <YourCover />` in its study.tsx.
 */

export interface CoverProps {
  /**
   * `slice` (default) fills a 16:9 card. `meet` shows the whole drawing in a box of another shape, such as the
   * featured card's media, which stretches to the text beside it: the background and the soft shapes that run off
   * the edge carry on into the box (same colour as the media background), so nothing is cut off.
   */
  fit?: 'slice' | 'meet';
}

function CoverFrame({ children, fit = 'slice' }: { children: ReactNode; fit?: CoverProps['fit'] }) {
  return (
    <svg
      className="cs-cover"
      viewBox="0 0 640 360"
      preserveAspectRatio={`xMidYMid ${fit}`}
      overflow={fit === 'meet' ? 'visible' : 'hidden'}
      aria-hidden="true"
      focusable="false"
    >
      <rect className="bg" x="-640" y="-360" width="1920" height="1080" />
      {children}
    </svg>
  );
}

/** A browser window: frame, top bar and three dots. */
function Window({ x, y, w, h, body = 'f-white' }: { x: number; y: number; w: number; h: number; body?: string }) {
  return (
    <g>
      <rect className={`${body} o-ink`} x={x} y={y} width={w} height={h} rx="10" />
      <path className="s-ink" d={`M${x} ${y + 26} H${x + w}`} />
      <circle className="f-sage" cx={x + 16} cy={y + 13} r="4" />
      <circle className="f-sage" cx={x + 30} cy={y + 13} r="4" />
      <circle className="f-sage" cx={x + 44} cy={y + 13} r="4" />
    </g>
  );
}

/** A pine tree: two stacked triangles on a trunk, standing on (x, base). */
function Pine({ x, base, size = 1 }: { x: number; base: number; size?: number }) {
  const s = size;
  return (
    <g>
      <rect className="f-ink" x={x - 2 * s} y={base - 10 * s} width={4 * s} height={10 * s} />
      <path className="f-sage" d={`M${x - 16 * s} ${base - 10 * s} L${x} ${base - 34 * s} L${x + 16 * s} ${base - 10 * s} Z`} />
      <path className="f-sage" d={`M${x - 12 * s} ${base - 26 * s} L${x} ${base - 46 * s} L${x + 12 * s} ${base - 26 * s} Z`} />
    </g>
  );
}

/** An A-frame cabin standing on (cx, base). */
function Cabin({ cx, base }: { cx: number; base: number }) {
  return (
    <g>
      <path className="f-white o-ink thin" d={`M${cx - 34} ${base} L${cx} ${base - 60} L${cx + 34} ${base} Z`} />
      <path className="s-ink thin" d={`M${cx - 40} ${base - 2} L${cx} ${base - 70} L${cx + 40} ${base - 2}`} />
      <rect className="f-ink" x={cx - 8} y={base - 22} width="16" height="22" rx="2" />
      <circle className="f-butter o-ink thin" cx={cx} cy={base - 38} r="6" />
    </g>
  );
}

/** One coffee bean, centred on (cx, cy). */
function Bean({ cx, cy, angle, tone }: { cx: number; cy: number; angle: number; tone: string }) {
  return (
    <g transform={`rotate(${angle} ${cx} ${cy})`}>
      <ellipse className={tone} cx={cx} cy={cy} rx="15" ry="10" />
      <path className="s-white thin" d={`M${cx - 10} ${cy} C${cx - 3} ${cy - 5} ${cx + 3} ${cy + 5} ${cx + 10} ${cy}`} />
    </g>
  );
}

/** A five-pointed star centred on (cx, cy). */
function Star({ cx, cy, r, className }: { cx: number; cy: number; r: number; className: string }) {
  const points = Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? r : r * 0.45;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    return `${(cx + radius * Math.cos(angle)).toFixed(1)},${(cy + radius * Math.sin(angle)).toFixed(1)}`;
  }).join(' ');
  return <polygon className={className} points={points} />;
}

/** A leaf pointing right from (0, 0); place it with a transform. */
const LEAF = 'M0 0 C8 -11 24 -11 32 0 C24 11 8 11 0 0 Z';

/* ── Hemlock Reserve: direct booking website for luxury cabins ─────────── */
export function HemlockCover({ fit }: CoverProps) {
  return (
    <CoverFrame fit={fit}>
      <circle className="f-butter-soft" cx="560" cy="60" r="90" />
      <Window x={110} y={56} w={330} h={236} />
      {/* two cabin cards */}
      {[130, 286].map((x) => (
        <g key={x}>
          <rect className="f-white o-light" x={x} y={100} width="140" height="172" rx="8" />
          <rect className="f-butter-soft" x={x + 8} y={108} width="124" height="96" rx="6" />
          <Cabin cx={x + 52} base={198} />
          <Pine x={x + 104} base={198} />
          <Pine x={x + 122} base={198} size={0.7} />
          <rect className="f-light" x={x + 10} y={218} width="96" height="9" rx="4" />
          <rect className="f-light" x={x + 10} y={236} width="64" height="9" rx="4" />
        </g>
      ))}
      {/* booking calendar */}
      <g>
        <rect className="f-white o-ink" x="380" y="140" width="140" height="162" rx="10" />
        <path className="f-sage" d="M380 150 a10 10 0 0 1 10 -10 h120 a10 10 0 0 1 10 10 v16 h-140 Z" />
        {Array.from({ length: 4 }, (_, row) =>
          Array.from({ length: 5 }, (_, col) => {
            const booked = row === 1 && col >= 1 && col <= 3;
            return (
              <rect
                key={`${row}-${col}`}
                className={booked ? 'f-butter' : 'f-light'}
                x={394 + col * 23}
                y={178 + row * 22}
                width="16"
                height="16"
                rx="3"
              />
            );
          }),
        )}
        <rect className="f-coral" x="410" y="272" width="80" height="18" rx="9" />
      </g>
    </CoverFrame>
  );
}

/* ── LumenGrowth: AI receptionist SaaS, multi-currency pricing and checkout ── */
export function LumenGrowthCover({ fit }: CoverProps) {
  return (
    <CoverFrame fit={fit}>
      <circle className="f-sky-soft" cx="70" cy="300" r="100" />
      <Window x={110} y={52} w={300} h={256} />
      {/* currency switch: five options, one chosen */}
      <rect className="f-white o-ink thin" x="140" y="96" width="132" height="26" rx="13" />
      {[158, 182, 206, 230, 254].map((cx, i) => (
        <circle key={cx} className={i === 0 ? 'f-sky' : 'f-light'} cx={cx} cy="109" r="7" />
      ))}
      {/* monthly / yearly toggle */}
      <rect className="f-light" x="300" y="98" width="52" height="22" rx="11" />
      <circle className="f-ink" cx="341" cy="109" r="8" />
      {/* three plans, the middle one highlighted */}
      {[
        { x: 134, y: 152, w: 74, h: 130, tone: 'f-white o-ink thin', line: 'f-light' },
        { x: 220, y: 138, w: 80, h: 156, tone: 'f-sky o-ink', line: 'f-white' },
        { x: 312, y: 152, w: 74, h: 130, tone: 'f-white o-ink thin', line: 'f-light' },
      ].map((p) => (
        <g key={p.x}>
          <rect className={p.tone} x={p.x} y={p.y} width={p.w} height={p.h} rx="8" />
          <rect className={p.line} x={p.x + 12} y={p.y + 16} width={p.w - 32} height="8" rx="4" />
          <rect className={p.line} x={p.x + 12} y={p.y + 34} width={p.w - 24} height="14" rx="5" />
          <rect className={p.line} x={p.x + 12} y={p.y + 60} width={p.w - 28} height="6" rx="3" />
          <rect className={p.line} x={p.x + 12} y={p.y + 74} width={p.w - 36} height="6" rx="3" />
          <rect className={p.line} x={p.x + 12} y={p.y + p.h - 30} width={p.w - 24} height="16" rx="8" />
        </g>
      ))}
      {/* phone: a chat with the receptionist and its voice */}
      <rect className="f-white o-ink" x="420" y="78" width="100" height="204" rx="16" />
      <path className="s-ink thin" d="M458 92 H482" />
      <rect className="f-sky-soft" x="430" y="110" width="66" height="28" rx="12" />
      <rect className="f-white o-ink thin" x="444" y="148" width="66" height="28" rx="12" />
      {[
        { x: 444, h: 16 },
        { x: 456, h: 34 },
        { x: 468, h: 24 },
        { x: 480, h: 12 },
      ].map((b) => (
        <rect key={b.x} className="f-sky" x={b.x} y={226 - b.h / 2} width="8" height={b.h} rx="4" />
      ))}
    </CoverFrame>
  );
}

/* ── Santa Barbara Trapeze: Shopify store, smart collections, countdowns ── */
export function SantaBarbaraTrapezeCover({ fit }: CoverProps) {
  const tiles = [
    { x: 171, y: 150, tag: true },
    { x: 275, y: 150, tag: false },
    { x: 379, y: 150, tag: true },
    { x: 171, y: 234, tag: false },
    { x: 275, y: 234, tag: true },
    { x: 379, y: 234, tag: false },
  ];
  return (
    <CoverFrame fit={fit}>
      <circle className="f-coral-soft" cx="590" cy="320" r="110" />
      {/* the trapeze, mid-swing */}
      <g transform="rotate(8 320 0)">
        <path className="s-ink" d="M272 -6 V106 M368 -6 V106" />
        <rect className="f-coral o-ink" x="258" y="100" width="124" height="14" rx="7" />
      </g>
      {/* store grid; the tagged tiles form one smart collection */}
      {tiles.map((t) => (
        <g key={`${t.x}-${t.y}`}>
          <rect className="f-white o-ink thin" x={t.x} y={t.y} width="90" height="70" rx="8" />
          <circle className="f-light" cx={t.x + 45} cy={t.y + 30} r="16" />
          <rect className="f-light" x={t.x + 22} y={t.y + 54} width="46" height="6" rx="3" />
          {t.tag && <path className="f-coral" d={`M${t.x + 62} ${t.y} H${t.x + 82} a8 8 0 0 1 8 8 V${t.y + 28} Z`} />}
        </g>
      ))}
      {/* countdown: a clock and three empty time blocks */}
      <rect className="f-white o-ink" x="388" y="282" width="132" height="34" rx="17" />
      <circle className="f-white o-ink thin" cx="408" cy="299" r="10" />
      <path className="s-ink thin" d="M408 299 V292 M408 299 L413 302" />
      {[428, 456, 484].map((x) => (
        <rect key={x} className="f-coral-soft" x={x} y="289" width="22" height="20" rx="5" />
      ))}
      {[453, 481].map((x) => (
        <g key={x}>
          <circle className="f-ink" cx={x} cy="295" r="1.8" />
          <circle className="f-ink" cx={x} cy="303" r="1.8" />
        </g>
      ))}
    </CoverFrame>
  );
}

/* ── LabTheory: men's skincare product page redesign and CRO ───────────── */
export function LabTheoryCover({ fit }: CoverProps) {
  return (
    <CoverFrame fit={fit}>
      <circle className="f-coral-soft" cx="60" cy="70" r="90" />
      <Window x={120} y={52} w={400} h={256} />
      {/* product photo tile with a plain tube */}
      <rect className="f-coral-soft" x="144" y="96" width="150" height="190" rx="10" />
      <rect className="f-white o-ink" x="196" y="122" width="46" height="120" rx="12" />
      <path className="s-ink thin" d="M198 134 H240" />
      <rect className="f-light" x="205" y="168" width="28" height="7" rx="3" />
      <rect className="f-light" x="205" y="184" width="20" height="7" rx="3" />
      <rect className="f-ink" x="204" y="242" width="30" height="24" rx="4" />
      {/* product details, options and the buy button */}
      <rect className="f-light" x="318" y="104" width="150" height="14" rx="7" />
      <rect className="f-light" x="318" y="128" width="178" height="8" rx="4" />
      <rect className="f-light" x="318" y="144" width="130" height="8" rx="4" />
      <rect className="f-ink" x="318" y="170" width="42" height="24" rx="12" />
      <rect className="f-white o-ink thin" x="368" y="170" width="42" height="24" rx="12" />
      <rect className="f-white o-ink thin" x="418" y="170" width="42" height="24" rx="12" />
      <rect className="f-coral" x="318" y="212" width="170" height="36" rx="8" />
      <rect className="f-white" x="372" y="227" width="62" height="6" rx="3" />
      {/* more orders: a rising line with an arrow */}
      <path className="s-sky" d="M322 288 L364 272 L400 278 L450 256" />
      <path className="s-sky" d="M436 252 L452 255 L446 270" />
    </CoverFrame>
  );
}

/* ── Get Daily: fitness coffee D2C site, pre-orders, waiting list, rewards ── */
export function GetDailyCover({ fit }: CoverProps) {
  return (
    <CoverFrame fit={fit}>
      <circle className="f-butter-soft" cx="80" cy="300" r="110" />
      {/* a plain drinks can */}
      <rect className="f-light o-ink" x="178" y="78" width="80" height="18" rx="7" />
      <rect className="f-sky-soft o-ink" x="170" y="90" width="96" height="198" rx="18" />
      <rect className="f-butter" x="172" y="172" width="92" height="42" />
      <path className="s-ink" d="M171 172 H265 M171 214 H265" />
      <rect className="f-white" x="186" y="108" width="10" height="52" rx="5" />
      {/* coffee beans */}
      <Bean cx={292} cy={268} angle={-20} tone="f-sage" />
      <Bean cx={318} cy={290} angle={15} tone="f-ink" />
      <Bean cx={286} cy={296} angle={40} tone="f-sage" />
      {/* phone with the waiting-list form */}
      <rect className="f-white o-ink" x="348" y="72" width="120" height="228" rx="18" />
      <path className="s-ink thin" d="M394 86 H422" />
      <rect className="f-butter-soft" x="366" y="100" width="84" height="44" rx="6" />
      <rect className="f-light" x="366" y="156" width="70" height="8" rx="4" />
      <rect className="f-white o-ink thin" x="366" y="174" width="84" height="26" rx="6" />
      <rect className="f-butter o-ink thin" x="366" y="212" width="84" height="28" rx="14" />
      <rect className="f-light" x="374" y="254" width="68" height="6" rx="3" />
      {/* rewards badge */}
      <circle className="f-butter-soft o-ink" cx="474" cy="96" r="26" />
      <Star cx={474} cy={97} r={15} className="f-butter o-ink thin" />
    </CoverFrame>
  );
}

/* ── 260 Sample Sale: Shopify maintenance, checkout, loyalty and emails ── */
export function SampleSaleCover({ fit }: CoverProps) {
  const rows = [118, 152, 186, 220, 254];
  const widths = [110, 88, 120, 96, 104];
  return (
    <CoverFrame fit={fit}>
      <circle className="f-sky-soft" cx="600" cy="300" r="120" />
      {/* shopping bag behind the list */}
      <path className="s-ink" d="M178 132 C178 92 250 92 250 132" />
      <path className="f-light o-ink" d="M140 132 H290 L302 300 H128 Z" />
      {/* the fixes checklist */}
      <rect className="f-white o-ink" x="204" y="92" width="190" height="212" rx="10" />
      {rows.map((y, i) => (
        <g key={y}>
          <rect className="f-sky-soft o-ink thin" x="222" y={y} width="22" height="22" rx="5" />
          <path className="s-sky" d={`M227 ${y + 11} L232 ${y + 16} L240 ${y + 6}`} />
          <rect className="f-light" x="256" y={y + 7} width={widths[i]} height="8" rx="4" />
        </g>
      ))}
      {/* email and loyalty card */}
      <rect className="f-white o-ink" x="412" y="100" width="104" height="72" rx="8" />
      <path className="s-ink" d="M414 106 L464 144 L514 106" />
      <rect className="f-sky o-ink" x="414" y="198" width="104" height="66" rx="8" />
      <Star cx={442} cy={231} r={14} className="f-white" />
      <rect className="f-white" x="464" y="222" width="40" height="6" rx="3" />
      <rect className="f-white" x="464" y="236" width="28" height="6" rx="3" />
    </CoverFrame>
  );
}

/* ── Esma: WooCommerce to Shopify migration for a jewellery brand ──────── */
export function EsmaCover({ fit }: CoverProps) {
  return (
    <CoverFrame fit={fit}>
      <circle className="f-butter-soft" cx="570" cy="330" r="100" />
      {/* the old site: plain */}
      <Window x={120} y={100} w={150} h={170} body="f-light" />
      <rect className="f-white" x="136" y="144" width="118" height="44" rx="4" />
      <rect className="f-white" x="136" y="200" width="88" height="8" rx="4" />
      <rect className="f-white" x="136" y="216" width="104" height="8" rx="4" />
      <rect className="f-white" x="136" y="232" width="70" height="8" rx="4" />
      {/* the move: customers, products and orders */}
      <path className="s-ink dash" d="M278 186 H350" />
      <path className="s-ink" d="M340 176 L352 186 L340 196" />
      <circle className="f-white o-ink thin" cx="290" cy="186" r="12" />
      <circle className="f-sage" cx="290" cy="182" r="4" />
      <path className="f-sage" d="M282 193 a8 6 0 0 1 16 0 Z" />
      <circle className="f-white o-ink thin" cx="316" cy="186" r="12" />
      <rect className="f-butter" x="310" y="180" width="12" height="12" rx="2" />
      <circle className="f-white o-ink thin" cx="342" cy="186" r="12" />
      <path className="f-light o-ink thin" d="M337 178 H347 V194 L344.5 191.5 L342 194 L339.5 191.5 L337 194 Z" />
      {/* the new storefront */}
      <Window x={360} y={70} w={160} h={220} />
      {[
        { x: 376, y: 110 },
        { x: 448, y: 110 },
        { x: 376, y: 186 },
        { x: 448, y: 186 },
      ].map((t, i) => (
        <g key={`${t.x}-${t.y}`}>
          <rect className="f-butter-soft" x={t.x} y={t.y} width="60" height="64" rx="6" />
          {i === 0 ? (
            <>
              <path className="s-ink thin" d={`M${t.x + 12} ${t.y + 10} Q${t.x + 30} ${t.y + 44} ${t.x + 48} ${t.y + 10}`} />
              <path className="f-butter o-ink thin" d={`M${t.x + 30} ${t.y + 34} C${t.x + 36} ${t.y + 42} ${t.x + 36} ${t.y + 50} ${t.x + 30} ${t.y + 52} C${t.x + 24} ${t.y + 50} ${t.x + 24} ${t.y + 42} ${t.x + 30} ${t.y + 34} Z`} />
            </>
          ) : (
            <circle className="f-sage" cx={t.x + 30} cy={t.y + 30} r={i === 3 ? 10 : 13} />
          )}
        </g>
      ))}
      <rect className="f-light" x="376" y="264" width="90" height="8" rx="4" />
    </CoverFrame>
  );
}

/* ── Jenson USA: cycling retailer, category pages into the top three ───── */
export function JensonCover({ fit }: CoverProps) {
  const rows = [124, 156, 188, 220, 252];
  const widths = [104, 92, 110, 86, 98];
  return (
    <CoverFrame fit={fit}>
      <circle className="f-sky-soft" cx="80" cy="70" r="100" />
      {/* bicycle */}
      <circle className="s-ink" cx="160" cy="232" r="40" />
      <circle className="s-ink" cx="272" cy="232" r="40" />
      <path className="s-sky" d="M160 232 L212 234 L200 170 Z M200 170 L258 172 L212 234 M258 172 L272 232" />
      <path className="s-ink" d="M190 160 H212 M258 172 L262 154 L280 150" />
      <circle className="f-white o-ink thin" cx="212" cy="234" r="8" />
      <circle className="f-ink" cx="160" cy="232" r="4" />
      <circle className="f-ink" cx="272" cy="232" r="4" />
      {/* search results */}
      <rect className="f-white o-ink" x="330" y="60" width="190" height="240" rx="10" />
      <rect className="f-white o-ink thin" x="346" y="76" width="158" height="28" rx="14" />
      <circle className="s-ink thin" cx="362" cy="89" r="6" />
      <path className="s-ink thin" d="M366.5 93.5 L372 99" />
      {rows.map((y, i) => (
        <g key={y}>
          <circle className={i < 3 ? 'f-sky' : 'f-light'} cx="354" cy={y + 8} r="6" />
          <rect className="f-light" x="368" y={y} width={widths[i]} height="10" rx="5" />
          <rect className="f-light" x="368" y={y + 15} width={widths[i] - 34} height="6" rx="3" />
        </g>
      ))}
      {/* a page moving up from the lower results into the top three */}
      <path className="s-sky" d="M492 262 C516 236 516 178 494 150" />
      <path className="s-sky" d="M488 164 L494 150 L508 156" />
    </CoverFrame>
  );
}

/* ── Jiva Ayurveda: organic growth beyond branded search ───────────────── */
export function JivaCover({ fit }: CoverProps) {
  return (
    <CoverFrame fit={fit}>
      <circle className="f-butter-soft" cx="580" cy="300" r="110" />
      {/* growth: a rising line with three points, no axis or numbers */}
      <path className="s-sky" d="M130 296 C220 290 260 240 320 210 S440 120 510 74" />
      {[
        [130, 296],
        [320, 210],
        [510, 74],
      ].map(([cx, cy]) => (
        <circle key={cx} className="f-sky o-ink thin" cx={cx} cy={cy} r="7" />
      ))}
      {/* sprigs */}
      <path className="s-sage" d="M236 216 C220 184 200 162 168 142" />
      <path className="s-sage" d="M366 216 C384 182 410 162 444 146" />
      {[
        { x: 214, y: 182, a: 215 },
        { x: 196, y: 162, a: 200 },
        { x: 222, y: 196, a: 150 },
        { x: 390, y: 180, a: -35 },
        { x: 412, y: 162, a: -20 },
        { x: 382, y: 196, a: 30 },
      ].map((l) => (
        <path key={`${l.x}-${l.y}`} className="f-sage" d={LEAF} transform={`translate(${l.x} ${l.y}) rotate(${l.a})`} />
      ))}
      {/* mortar and pestle */}
      <g transform="rotate(28 330 170)">
        <rect className="f-butter o-ink" x="317" y="104" width="26" height="118" rx="13" />
      </g>
      <path className="f-sage o-ink" d="M222 222 H378 C378 280 340 300 300 300 C260 300 222 280 222 222 Z" />
      <rect className="f-light o-ink" x="210" y="208" width="180" height="18" rx="9" />
      <rect className="f-ink" x="272" y="298" width="56" height="12" rx="4" />
    </CoverFrame>
  );
}

/* ── Default: for a study without its own cover ────────────────────────── */
export function DefaultCover({ fit }: CoverProps) {
  return (
    <CoverFrame fit={fit}>
      <path className="f-coral-soft o-ink thin" d="M250 80 L330 180 L250 280 L170 180 Z" />
      <path className="f-butter-soft o-ink thin" d="M320 70 L410 180 L320 290 L230 180 Z" />
      <path className="f-sky-soft o-ink thin" d="M390 90 L470 180 L390 270 L310 180 Z" />
      <path className="s-ink thin" d="M390 270 C400 300 380 312 396 330" />
    </CoverFrame>
  );
}
