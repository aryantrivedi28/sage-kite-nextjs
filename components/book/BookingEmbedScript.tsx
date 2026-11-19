'use client';

import { useEffect } from 'react';

const SRC = 'https://pay.ghlscaleup.com/js/form_embed.js';

/**
 * Loads GoHighLevel's form_embed.js, which sizes the booking iframe to fit.
 *
 * The script only hooks up iframes that exist when it runs. next/script runs a
 * src once per session, so after client-side navigation back to /book the new
 * iframe was never resized and the calendar was cut off until a refresh.
 * Adding a fresh <script> on every mount re-runs it for the current iframe.
 */
export function BookingEmbedScript() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = SRC;
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return null;
}
