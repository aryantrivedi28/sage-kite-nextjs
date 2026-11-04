// The real next/image (CommonJS, no exports map): Node's ESM import gives the exports object, so re-export its default.
import image from 'next/image.js';
export default image.default ?? image;
