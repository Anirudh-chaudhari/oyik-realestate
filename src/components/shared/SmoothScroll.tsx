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
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1,
        wheelMultiplier: 0.9,
      }}
    >
      {/* @ts-expect-error - React 19 / 18 ReactNode type conflict bypass */}
      {children}
    </ReactLenis>
  );
}
