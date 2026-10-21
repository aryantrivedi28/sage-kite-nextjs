import { createElement } from 'react';
import { serializeJsonLd } from './blogJsonLd';

/**
 * The one way blog pages embed JSON-LD: a script element whose content is escaped by
 * serializeJsonLd. Written with createElement (no JSX) so a test can render it on its own.
 */
export function JsonLd({ data }: { data: unknown }) {
  return createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: serializeJsonLd(data) },
  });
}
