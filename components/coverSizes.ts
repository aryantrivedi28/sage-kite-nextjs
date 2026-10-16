import type { StaticImageData } from 'next/image';

/**
 * Builds a next/image `sizes` value for a photo shown with `object-fit: cover` in a frame
 * of aspect ratio `frameAspect` (width / height, e.g. 4 / 5).
 *
 * A photo wider than the frame is scaled to the frame's height and its sides cropped, so it
 * is drawn wider than the frame. Each frame width is multiplied by that factor so the browser
 * picks a source with enough pixels left after cropping. Photos narrower than the frame fill
 * its width and are unchanged.
 *
 * `widths` are [media condition or null, frame width] pairs, in `sizes` order.
 */
export function coverSizes(
  image: StaticImageData,
  frameAspect: number,
  widths: [media: string | null, frameWidth: string][],
): string {
  const scale = Math.ceil(Math.max(1, image.width / image.height / frameAspect) * 1000) / 1000;
  return widths
    .map(([media, width]) => {
      let scaled = width;
      if (scale > 1) {
        const px = /^(\d+(?:\.\d+)?)px$/.exec(width);
        const inner = width.startsWith('calc(') ? width.slice(4) : width;
        scaled = px ? `${Math.ceil(Number(px[1]) * scale)}px` : `calc(${inner} * ${scale})`;
      }
      return media ? `${media} ${scaled}` : scaled;
    })
    .join(', ');
}
