import assert from 'node:assert/strict';
import { test } from 'node:test';
import { isExternalHref, safeHref } from '@/components/blog-studio/postUtils';

// Links in studio posts (decision.md D037, finding 6 of D036): which hrefs render at all, and which
// count as external (new tab, rel="noopener noreferrer").

test('site paths, anchors, http(s) and mailto links are kept', () => {
  for (const href of ['/blog', '/platforms/hubspot#pricing', '#faq', 'https://www.sagekite.com/about', 'http://example.com', 'mailto:hello@sagekite.com']) {
    assert.equal(safeHref(href), href, href);
  }
});

test('links that browsers would send to another host, and other schemes, render as text', () => {
  for (const href of ['//evil.com', '/\\evil.com', '/\\/evil.com', 'javascript:alert(1)', 'JavaScript:alert(1)', 'data:text/html,x', 'vbscript:x', 'evil.com', '']) {
    assert.equal(safeHref(href), null, href);
  }
});

test('only www.sagekite.com over https is internal', () => {
  for (const href of ['https://www.sagekite.com', 'https://www.sagekite.com/', 'https://www.sagekite.com/blog?x=1', 'https://www.sagekite.com#top', 'HTTPS://WWW.SAGEKITE.COM/blog', '/blog', '#faq', 'mailto:hello@sagekite.com']) {
    assert.equal(isExternalHref(href), false, href);
  }
});

test('look-alike hosts and other sites are external', () => {
  for (const href of ['https://www.sagekite.com.evil.com', 'https://www.sagekite.com.evil.com/blog', 'https://www.sagekite.com@evil.com', 'https://www.sagekite.company', 'https://www.sagekite.com:8443/x', 'http://www.sagekite.com/blog', 'https://example.com']) {
    assert.equal(isExternalHref(href), true, href);
  }
});
