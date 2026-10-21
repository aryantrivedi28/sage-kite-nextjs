// Stand-in for next/headers. Tests set globalThis.__testCookies (a Map) and globalThis.__testHeaders (an object);
// every cookie write is also recorded, with its options, in globalThis.__cookieSets.
export async function cookies() {
  const jar = (globalThis.__testCookies ??= new Map());
  const sets = (globalThis.__cookieSets ??= []);
  return {
    get: (name) => (jar.has(name) ? { name, value: jar.get(name) } : undefined),
    set: (a, b) => {
      if (typeof a === 'string') { jar.set(a, b); sets.push({ name: a, value: b }); }
      else { jar.set(a.name, a.value); sets.push({ ...a }); }
    },
    delete: (name) => jar.delete(name),
  };
}
export async function headers() {
  const h = globalThis.__testHeaders ?? {};
  return { get: (name) => h[name.toLowerCase()] ?? null };
}
