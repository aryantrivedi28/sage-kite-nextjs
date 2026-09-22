'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo">
          <img src="/sage-kite-logo-transparent.png" alt="Sage Kite" />
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
                                    <li><Link href="/#services" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link href="/#platforms" onClick={() => setOpen(false)}>Platforms</Link></li>
            <li><Link href="/#industries" onClick={() => setOpen(false)}>Industries</Link></li>
            <li><Link href="/blog" onClick={() => setOpen(false)}>Blogs</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About us</Link></li>
            <li className="mobile-only-btn"><Link href="/contact" className="btn btn-small" onClick={() => setOpen(false)}>Book a discovery call</Link></li>
          </ul>
        </nav>
        
        <div className="header-cta">
          <Link href="/contact" className="btn btn-small">Book a discovery call</Link>
        </div>
      </div>
    </header>
  );
}
