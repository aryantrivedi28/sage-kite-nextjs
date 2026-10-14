'use client';

import { useState } from 'react';

export interface Layer {
  title: string;
  text: string;
  /** Button label for the step that adds this layer, e.g. "+ Custom Liquid". */
  button: string;
  /** Caption while this step is selected. */
  caption: string;
}

/**
 * Layers built up from a base, e.g. a theme, custom code on top, and the
 * result. `layers` runs bottom to top; each button shows the stack up to that layer.
 */
export function LayerStack({ title, layers, note }: { title: string; layers: Layer[]; note: string }) {
  const [step, setStep] = useState(layers.length);

  return (
    <div className="cs-sim">
      <div className="cs-sim-top">
        <h3>{title}</h3>
        <div className="cs-seg" role="group" aria-label="Choose a layer to show">
          {layers.map((l, i) => (
            <button key={l.title} type="button" aria-pressed={step === i + 1} onClick={() => setStep(i + 1)}>
              {l.button}
            </button>
          ))}
        </div>
      </div>
      <div className="cs-stack" aria-hidden="true">
        {[...layers].reverse().map((l, ri) => {
          const i = layers.length - 1 - ri;
          return (
            <div key={l.title} className={`cs-slab l${i}${i >= step ? ' off' : ''}`}>
              <b>{l.title}</b><span>{l.text}</span>
            </div>
          );
        })}
      </div>
      <p className="cs-sim-caption" aria-live="polite">{layers[step - 1].caption}</p>
      <p className="note">{note}</p>
    </div>
  );
}
