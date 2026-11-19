/*
 * A fake @sanity/client. It never touches the network: every call is recorded in
 * globalThis.__sanityCalls. Tests can set globalThis.__sanityFetch = (query, params) => result
 * to control what reads return.
 */
const calls = () => (globalThis.__sanityCalls ??= []);

export function createClient(config) {
  calls().push({ op: 'createClient', projectId: config.projectId, dataset: config.dataset, hasToken: !!config.token });
  return {
    async fetch(query, params) {
      calls().push({ op: 'fetch', query, params });
      return globalThis.__sanityFetch ? globalThis.__sanityFetch(query, params) : [];
    },
    transaction() {
      const ops = [];
      const tx = {
        createOrReplace(doc) { ops.push({ op: 'createOrReplace', doc }); return tx; },
        delete(id) { ops.push({ op: 'delete', id }); return tx; },
        patch(id, patch) { ops.push({ op: 'patch', id, patch }); return tx; },
        async commit() {
          if (globalThis.__sanityCommitError) throw globalThis.__sanityCommitError;
          calls().push({ op: 'commit', ops });
          return {};
        },
      };
      return tx;
    },
    async delete(arg) {
      calls().push({ op: 'deleteQuery', arg });
      return {};
    },
    assets: {
      async upload(kind, body, options) {
        calls().push({ op: 'upload', kind, bytes: body.length, options });
        return { url: 'https://cdn.sanity.io/images/lk42drbi/production/' + 'a'.repeat(40) + '-1200x675.webp' };
      },
    },
  };
}
