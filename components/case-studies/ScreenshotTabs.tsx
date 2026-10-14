'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';

export interface Screenshot {
  /** Tab label, e.g. "Home page". */
  label: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Shown under the screenshot while its tab is selected. */
  caption: string;
}

/** Screenshots of a site in one browser frame, switched by tabs. */
export function ScreenshotTabs({ title, url, shots, note }: { title?: string; url: string; shots: Screenshot[]; note: ReactNode }) {
  const [on, setOn] = useState(0);

  return (
    <div className="cs-gallery">
      {title && <h3 className="cs-gallery-title">{title}</h3>}
      <div className="cs-tabs" role="group" aria-label="Choose a screenshot">
        {shots.map((s, i) => (
          <button key={s.label} type="button" className="cs-ghost" aria-pressed={on === i} onClick={() => setOn(i)}>
            {s.label}
          </button>
        ))}
      </div>
      <figure className="cs-frame big">
        <div className="cs-frame-bar" aria-hidden="true"><i></i><i></i><i></i><span>{url}</span></div>
        <div className="cs-shots">
          {shots.map((s, i) => (
            <Image
              key={s.src}
              className={on === i ? 'on' : undefined}
              src={s.src}
              width={s.width}
              height={s.height}
              alt={s.alt}
              title={s.alt}
              sizes="(max-width: 1180px) 100vw, 1100px"
              aria-hidden={on !== i}
            />
          ))}
        </div>
        <figcaption aria-live="polite">{shots[on].caption}</figcaption>
      </figure>
      <p className="note">{note}</p>
    </div>
  );
}
