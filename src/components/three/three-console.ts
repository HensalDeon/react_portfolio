import { setConsoleFunction } from "three";

/**
 * Three r183 deprecated `Clock` in favour of `Timer`, but React Three Fiber 9
 * still constructs a `Clock` for every Canvas, so each scene mount logs a
 * deprecation warning we cannot act on from application code. Fiber only
 * migrates to `Timer` in v10 (pmndrs/react-three-fiber#3741).
 *
 * Three exposes a typed hook for routing its own logging. We use it to drop
 * that single message and pass everything else through to the console
 * untouched. Delete this module once Fiber 10 is stable and installed.
 */
const SUPPRESSED = ["THREE.Clock: This module has been deprecated"];

type StackTraceLike = { isStackTrace: true; getError: (message: string) => Error };

function isStackTrace(value: unknown): value is StackTraceLike {
  return typeof value === "object" && value !== null && "isStackTrace" in value;
}

setConsoleFunction((type, message, ...params) => {
  if (type === "warn" && SUPPRESSED.some((prefix) => message.startsWith(prefix))) return;

  // Mirror Three's default handling: a captured stack trace becomes an Error
  // so the console shows where the message originated.
  const [first] = params;
  if (isStackTrace(first)) {
    console[type](first.getError(message));
    return;
  }
  console[type](message, ...params);
});
