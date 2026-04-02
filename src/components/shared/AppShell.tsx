"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import PageFaqSection from "@/components/shared/PageFaqSection";
import SmoothScroll from "@/components/shared/SmoothScroll";

type AppShellProps = {
  children: ReactNode;
};

const CHROMELESS_PATHS = new Set(["/thank-you"]);

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const showSiteChrome = !CHROMELESS_PATHS.has(pathname);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pageContent = (
    <>
      {showSiteChrome ? (
        <>
          {!reduceMotion && mounted ? (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-[linear-gradient(90deg,#2b256f_0%,#4f46e5_52%,#93c5fd_100%)] shadow-[0_0_24px_rgba(99,102,241,0.45)]"
              style={{ scaleX: scrollYProgress }}
            />
          ) : null}
          <Navbar />
        </>
      ) : null}

      <motion.main
        key={pathname}
        initial={reduceMotion || !mounted ? { opacity: 1 } : { opacity: 0, y: 12, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: reduceMotion || !mounted ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
        className="flex-grow"
      >
        {children}
      </motion.main>

      {showSiteChrome ? (
        <>
          <PageFaqSection />
          <Footer />
        </>
      ) : null}
    </>
  );

  if (!showSiteChrome) {
    return pageContent;
  }

  return <SmoothScroll>{pageContent}</SmoothScroll>;
}
