"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/** False during server render and hydration, true afterwards. */
export function useMounted(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}
