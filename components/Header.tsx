'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/public/sage-kite-logo-transparent.png';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo">
          {/* Displayed at --w (135px, 140px at 420px and below) in globals.css. The fixed
              aspect-ratio keeps the original's proportions; a resized file rounds its height. */}
          <Image
            src={logo}
            alt="Sage Kite" title="Sage Kite"
            sizes="(max-width: 420px) 140px, 135px"
            loading="eager"
            style={{ aspectRatio: `${logo.width} / ${logo.height}` }}
          />
        </Link>
        
        <button 
          className="menu-toggle" 
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>

        <nav className={`nav ${open ? 'open' : ''}`}>
          <ul>
                                    <li><Link href="/services" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link href="/platforms" onClick={() => setOpen(false)}>Platforms</Link></li>
            <li><Link href="/industries" onClick={() => setOpen(false)}>Industries</Link></li>
            <li><Link href="/case-studies" onClick={() => setOpen(false)}>Case studies</Link></li>
            <li><Link href="/blog" onClick={() => setOpen(false)}>Blogs</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About us</Link></li>
            <li className="mobile-only-btn"><Link href="/contact" className="btn btn-small" onClick={() => setOpen(false)}>Get in touch</Link></li>
          </ul>
        </nav>
        
        <div className="header-cta">
          <Link href="/contact" className="btn btn-small">Get in touch</Link>
        </div>
      </div>
    </header>
  );
}
