// The real next/link (CommonJS, no exports map): Node's ESM import gives the exports object, so re-export its default.
import link from 'next/link.js';
export default link.default ?? link;
