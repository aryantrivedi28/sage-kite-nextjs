/**
 * An error whose message was written in this app and is safe to show to the person using the
 * studio (for example "Production can only publish to the production dataset"). Anything that is
 * not a SafeError (Sanity, the network, a bug) is replaced by a generic message before it reaches
 * the browser, because those messages can carry request details.
 */
export class SafeError extends Error {
  /** True when the visitor has no valid session (the studio shows its sign-in dialog again). */
  readonly signIn: boolean;

  constructor(message: string, options: { signIn?: boolean } = {}) {
    super(message);
    this.name = 'SafeError';
    this.signIn = !!options.signIn;
  }
}
