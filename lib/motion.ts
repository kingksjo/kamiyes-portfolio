import type { Transition } from "motion/react";

// Signature spring for all hover and entrance motion across the site.
// Matches the interaction spec: spring physics, stiffness 100, damping 20.
export const springSnappy: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};
