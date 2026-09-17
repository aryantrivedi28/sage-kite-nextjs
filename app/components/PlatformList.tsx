"use client";

import React from "react";

interface PlatformItem {
  label: string;
}

const DEFAULT_PLATFORMS: PlatformItem[] = [
  { label: "GoHighLevel, Keap, custom CRM development" },
  { label: "Follow Up Boss, Lofty" },
  { label: "ServiceTitan, Housecall Pro, Jobber" },
  { label: "Kajabi" },
  { label: "Clio Grow" },
  { label: "Dubsado" },
  { label: "Mindbody" },
  { label: "Bloomerang" },
  { label: "HoneyBook" },
];

interface PlatformListProps {
  items?: PlatformItem[];
}

export default function PlatformList({ items = DEFAULT_PLATFORMS }: PlatformListProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .platform-list {
          list-style: none;
          margin: 0;
          padding: 0;
          border-top: 1px solid var(--light-sage);
        }
        .platform-list-item {
          padding: 28px 0;
          border-bottom: 1px solid var(--light-sage);
          font-family: var(--serif);
          font-size: clamp(1.15rem, 1.8vw, 1.4rem);
          line-height: 1.4;
          color: var(--ink);
          font-weight: 400;
        }
        @media (max-width: 768px) {
          .platform-list-item {
            padding: 24px 0;
            font-size: 1.1rem;
          }
        }
      `}} />
      <ul className="platform-list">
        {items.map((item, index) => (
          <li key={index} className="platform-list-item">
            {item.label}
          </li>
        ))}
      </ul>
    </>
  );
}
