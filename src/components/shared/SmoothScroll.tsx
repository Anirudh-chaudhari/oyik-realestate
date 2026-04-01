"use client";

import { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075,
        duration: 1.05,
        smoothWheel: true,
        syncTouch: true,
        syncTouchLerp: 0.08,
        touchMultiplier: 0.92,
        wheelMultiplier: 0.9,
      }}
    >
      {/* @ts-expect-error - React 19 / 18 ReactNode type conflict bypass */}
      {children}
    </ReactLenis>
  );
}
