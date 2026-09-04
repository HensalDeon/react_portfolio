/**
 * Seconds after load when the preloader curtain starts to rise. Above-the-fold
 * entrance animations wait on this (via `--intro-delay` on <html>) so they play
 * as the page is revealed rather than while it is still covered. Kept outside
 * the client module so the server layout can read it as a plain number.
 */
export const INTRO_DELAY_S = 1.85;
