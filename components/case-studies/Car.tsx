import type React from 'react';

/**
 * The small car used by the local SEO demos (ShowroomMap, ReviewLane, RoadStops), drawn in a 40 × 20 box.
 * `CarShape` is the bare shapes, for use inside another SVG; `Car` wraps them in their own SVG.
 * Colours come from the .cs-car classes in caseStudyStyles.ts.
 */
export function CarShape() {
  return (
    <g className="cs-car">
      <path className="body" d="M2 13 L5 8 Q6 6 9 6 H24 Q27 6 29 9 L34 11 Q38 12 38 14 V16 H2 Z" />
      <path className="win" d="M10.5 7.4 H23 Q25 7.4 26.4 9.6 H9.2 Z" />
      <circle className="wheel" cx="10" cy="16" r="3.3" />
      <circle className="wheel" cx="29" cy="16" r="3.3" />
      <circle className="hub" cx="10" cy="16" r="1.2" />
      <circle className="hub" cx="29" cy="16" r="1.2" />
    </g>
  );
}

export function Car({ className, style, svgRef }: { className?: string; style?: React.CSSProperties; svgRef?: React.Ref<SVGSVGElement> }) {
  return (
    <svg ref={svgRef} className={className} style={style} viewBox="0 0 40 20" aria-hidden="true">
      <CarShape />
    </svg>
  );
}
