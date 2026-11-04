import Link from 'next/link';
import { PLATFORMS } from '@/content/platforms';

/*
 * The "Platforms we implement" strip at the bottom of the /services hero (decision.md D070).
 * Every platform in content/platforms.ts, in its order: a platform with a page links to it, one
 * without (GoHighLevel) is plain text with the same look. Styled by the .sv-plat rules in
 * app/services/page.tsx's <style> block. Text only: no logos.
 */
export function PlatformStrip() {
  return (
    <nav className="sv-plat" aria-label="Platforms we implement">
      <p className="label">Platforms we implement</p>
      <ul className="sv-chips">
        {PLATFORMS.map((p) => (
          <li key={p.name}>
            {p.slug ? (
              <Link className="sv-chip" href={`/platforms/${p.slug}`}>{p.name}</Link>
            ) : (
              <span className="sv-chip">{p.name}</span>
            )}
          </li>
        ))}
        <li>
          <Link className="sv-chip" href="/services/crm-implementation#custom-crm">Custom CRM</Link>
        </li>
        <li className="sv-plat-all">
          <Link className="link" href="/platforms">See all platforms</Link>
        </li>
      </ul>
      <p className="sv-plat-note">Platform names are trademarks of their owners. Sage Kite is independent and not affiliated with them.</p>
    </nav>
  );
}
