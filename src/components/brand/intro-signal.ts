/** Event the preloader dispatches on `window` once its curtain has left the screen. */
export const INTRO_DONE_EVENT = "introdone";

/** Attribute on the preloader root; its presence means the curtain is still up. */
export const PRELOADER_ATTRIBUTE = "data-preloader";

/**
 * Runs `callback` once the intro curtain is gone. If there is no curtain in
 * the document (it already finished, or was never rendered) the callback
 * runs immediately. Returns a function that cancels the subscription.
 *
 * Heavy work such as mounting a WebGL scene waits on this so the main thread
 * stays free while the monogram draws: stroke animations run on the main
 * thread and would stutter under script evaluation.
 */
export function whenIntroDone(callback: () => void): () => void {
  if (!document.querySelector(`[${PRELOADER_ATTRIBUTE}]`)) {
    callback();
    return () => {};
  }
  window.addEventListener(INTRO_DONE_EVENT, callback, { once: true });
  return () => window.removeEventListener(INTRO_DONE_EVENT, callback);
}
