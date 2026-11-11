const POSITIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export interface PositionStripsProps {
  /** The big figure, e.g. "120+". */
  value: string;
  /** One strip of the first ten search positions per state; `on` are the highlighted positions. `after` draws them in sky with a pop. */
  strips: { title: string; ariaLabel: string; on: number[]; after?: boolean }[];
  note: string;
}

/** The results card: a big figure over strips of search positions 1–10 with the before and after positions highlighted. No hooks. */
export function PositionStrips({ value, strips, note }: PositionStripsProps) {
  return (
    <div className="cs-nw-users">
      <p className="cs-nw-bignum">{value}</p>
      {strips.map((s) => (
        <div key={s.title} className="cs-nw-group">
          <p className="cs-nw-bars-title">{s.title}</p>
          <div className={`cs-jn-pos${s.after ? ' after' : ''}`} role="img" aria-label={s.ariaLabel}>
            {POSITIONS.map((n) => <i key={n} className={s.on.includes(n) ? 'on' : undefined}>{n}</i>)}
          </div>
        </div>
      ))}
      <p className="note">{note}</p>
    </div>
  );
}
