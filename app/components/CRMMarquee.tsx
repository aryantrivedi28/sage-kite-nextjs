"use client";

import React from "react";

const crmPlatforms = [
  "GoHighLevel",
  "Keap",
  "Custom CRM Development",
  "Follow Up Boss",
  "Lofty",
  "ServiceTitan",
  "Housecall Pro",
  "Jobber",
  "Kajabi",
  "Clio Grow",
  "Dubsado",
  "Mindbody",
  "Bloomerang",
  "HoneyBook",
];

interface MarqueeRowProps {
  items: string[];
  direction?: "left" | "right";
  duration?: number;
}

function MarqueeRow({ items, direction = "left", duration = 40 }: MarqueeRowProps) {
  const animationName = direction === "left" ? "marqueeLeft" : "marqueeRight";

  return (
    <div className="marquee-row">
      <div
        className="marquee-track"
        style={{
          animationName,
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {/* Render items twice for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

interface CRMMarqueeProps {
  items?: string[];
}

export default function CRMMarquee({ items = crmPlatforms }: CRMMarqueeProps) {
  // Split items across 3 rows
  const row1 = items.slice(0, 5);
  const row2 = items.slice(5, 10);
  const row3 = items.slice(10);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .crm-marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: clamp(24px, 3vw, 40px);
        }

        /* Edge fade masks */
        .crm-marquee::before,
        .crm-marquee::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: clamp(60px, 12vw, 160px);
          z-index: 2;
          pointer-events: none;
        }
        .crm-marquee::before {
          left: 0;
          background: linear-gradient(to right, var(--warm-white) 0%, transparent 100%);
        }
        .crm-marquee::after {
          right: 0;
          background: linear-gradient(to left, var(--warm-white) 0%, transparent 100%);
        }

        /* When inside a .tint section, use the tint background for masks */
        .tint .crm-marquee::before {
          background: linear-gradient(to right, var(--light-sage) 0%, transparent 100%);
        }
        .tint .crm-marquee::after {
          background: linear-gradient(to left, var(--light-sage) 0%, transparent 100%);
        }

        .marquee-row {
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        .marquee-row:hover .marquee-track {
          animation-play-state: paused !important;
        }

        .marquee-item {
          flex-shrink: 0;
          padding: 0 clamp(24px, 4vw, 56px);
          font-family: var(--serif);
          font-size: clamp(1.1rem, 2vw, 1.6rem);
          font-weight: 500;
          color: var(--ink);
          white-space: nowrap;
          opacity: 0.7;
          transition: opacity 0.3s ease;
          letter-spacing: -0.01em;
          line-height: 1;
        }

        .marquee-item:hover {
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation-play-state: paused !important;
          }
        }

        @media (max-width: 768px) {
          .crm-marquee {
            gap: 20px;
          }
          .marquee-item {
            padding: 0 20px;
          }
        }
      `}} />
      <div className="crm-marquee">
        <MarqueeRow items={row1} direction="left" duration={35} />
        <MarqueeRow items={row2} direction="right" duration={42} />
        <MarqueeRow items={row3} direction="left" duration={38} />
      </div>
    </>
  );
}
