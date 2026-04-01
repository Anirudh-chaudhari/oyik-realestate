"use client";

import { useEffect, useRef, useState } from "react";

interface CanvasSequenceProps {
  folderPath: string;
  frameCount: number;
  filenamePrefix?: string;
  extension?: string;
  padLength?: number;
  className?: string;
  fps?: number;
  isActive?: boolean; // Only load + play when true
}

export function CanvasSequence({
  folderPath,
  frameCount,
  filenamePrefix = "frame_",
  extension = ".webp",
  padLength = 4,
  className = "",
  fps = 24,
  isActive = true,
}: CanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const frameIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);

  // ── Draw a frame onto the canvas ──
  const drawFrame = (idx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[idx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    if (canvas.width !== img.naturalWidth) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };

  // ── Lazy-load frames only when isActive becomes true ──
  useEffect(() => {
    if (!isActive) return;
    if (imagesRef.current.length > 0) {
      // Already loaded — just start playing
      setIsLoaded(true);
      return;
    }

    let loaded = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const padded = String(i).padStart(padLength, "0");
      img.src = `${folderPath}/${filenamePrefix}${padded}${extension}`;

      img.onload = () => {
        loaded++;
        if (loaded === frameCount) {
          imagesRef.current = imgs;
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loaded++;
        if (loaded === frameCount) {
          imagesRef.current = imgs;
          setIsLoaded(true);
        }
      };

      imgs[i - 1] = img;
    }
  }, [isActive, folderPath, frameCount, filenamePrefix, extension, padLength]);

  // ── rAF animation loop — only runs when isActive + isLoaded ──
  useEffect(() => {
    if (!isActive || !isLoaded) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    const interval = 1000 / fps;

    const loop = (now: number) => {
      if (now - lastTimeRef.current >= interval) {
        drawFrame(frameIndexRef.current);
        frameIndexRef.current = (frameIndexRef.current + 1) % frameCount;
        lastTimeRef.current = now;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isActive, isLoaded, fps, frameCount]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {/* Loading spinner */}
      {isActive && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover"
        style={{ display: isLoaded ? "block" : "none" }}
      />
    </div>
  );
}
