// Stand-in for next/cache: records what would be revalidated. Set globalThis.__revalidateThrows to simulate a failure.
export function revalidatePath(path, type) {
  if (globalThis.__revalidateThrows) throw new Error('simulated cache failure');
  (globalThis.__revalidated ??= []).push(type ? [path, type] : [path]);
}
