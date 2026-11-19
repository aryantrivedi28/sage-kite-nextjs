// Stand-in for next/navigation. Tests set globalThis.__testPathname to choose what usePathname() returns.
export function usePathname() {
  return globalThis.__testPathname ?? '/';
}
