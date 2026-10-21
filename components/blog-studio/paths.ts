/*
 * The studio's URLs (safe to import from client code). Both contain the same unguessable
 * segment, so the login endpoint cannot be found without already knowing the studio URL.
 * The folder name `app/sk-studio-ufn5xdafhll7` and the one under `app/api/` must match.
 */
export const STUDIO_PATH = '/sk-studio-ufn5xdafhll7';

/** Where the sign-in form posts. A path of its own so a Vercel WAF rule can rate-limit login attempts alone. */
export const STUDIO_LOGIN_PATH = '/api/sk-studio-ufn5xdafhll7/login';
