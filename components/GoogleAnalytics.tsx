'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/*
 * Google tag (gtag.js): GA4, measurement ID G-QQFH3W77TS. Rendered once, by the root layout, so it
 * loads on every page except one that contains an element with `data-no-analytics` (the blog studio,
 * decision.md D038): its unlisted URL and title must not reach GA, and no third-party script should
 * run in a signed-in studio session. A marker is used instead of the path, so the studio's URL is
 * never in the JavaScript sent to public pages. ContactForm sends generate_lead through this tag.
 *
 * next/script, not raw <script> tags: React never runs <script> elements it renders in the browser
 * (e.g. the 404 fallback under /blog), and next/script loads each script once across client-side
 * navigations. Once loaded, the tag stays for the rest of that visit.
 */
export function GoogleAnalytics() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!document.querySelector('[data-no-analytics]')) setEnabled(true);
  }, [pathname]);

  if (!enabled) return null;
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-QQFH3W77TS" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-QQFH3W77TS');`}
      </Script>
    </>
  );
}
