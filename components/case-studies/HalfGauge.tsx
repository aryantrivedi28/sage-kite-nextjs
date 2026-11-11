/** Length of the gauge's half-circle arc (radius 80). */
const ARC = 251.3;

/** Coral below the first cut, butter below the second, sky above. */
export const gaugeTone = (v: number, low: number, high: number) => (v < low ? 'var(--coral)' : v < high ? 'var(--butter)' : 'var(--sky)');

/** A half-circle gauge from 0 to 100 with a needle; the fill and needle animate to `value`. No hooks, so it renders anywhere. */
export function HalfGauge({ value, color, showValue, ariaLabel }: { value: number; color: string; showValue?: boolean; ariaLabel?: string }) {
  return (
    <svg className="cs-ms-gz" viewBox="0 0 200 125" {...(ariaLabel ? { role: 'img', 'aria-label': ariaLabel } : { 'aria-hidden': true })}>
      <path className="tr" d="M20,100 A80,80 0 0 1 180,100" />
      <path className="fg" d="M20,100 A80,80 0 0 1 180,100" style={{ strokeDasharray: ARC, strokeDashoffset: ARC * (1 - value / 100), stroke: color }} />
      <g className="nd" style={{ transform: `rotate(${value * 1.8 - 90}deg)` }}><line x1="100" y1="100" x2="100" y2="36" /></g>
      <circle className="hub" cx="100" cy="100" r="7" />
      {showValue && <text className="v" x="100" y="90" textAnchor="middle">{value}</text>}
      <text x="20" y="118" textAnchor="middle">0</text>
      <text x="180" y="118" textAnchor="middle">100</text>
    </svg>
  );
}
