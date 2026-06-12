"use client";

import React, { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden select-none shadow-lg border border-slate-200"
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* After Image (Background) - Zoomed 105% to hide watermarks */}
      <img
        src={afterImage}
        alt="After cleaning"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-105 origin-center"
      />
      <div className="absolute right-4 top-4 bg-emerald-600 text-white text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md z-10">
        {afterLabel}
      </div>

      {/* Before Image (Foreground overlay) - Zoomed 105% to hide watermarks */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Before cleaning"
          className="absolute inset-0 w-full h-full object-cover max-w-none scale-105 origin-center"
          style={{ width: containerRef.current?.getBoundingClientRect().width }}
        />
        <div className="absolute left-4 top-4 bg-slate-900 text-white text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-lg border border-slate-350 font-bold text-xs">
          ↔
        </div>
      </div>
    </div>
  );
}
