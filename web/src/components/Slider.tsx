import React, { useEffect, useRef, useState } from "react";

interface SliderProps {
  children: React.ReactNode;
}

export default function Slider({ children }: SliderProps) {
  const sliderRef = useRef(null);
  const isMounted = useRef(false);


  return (
    <div className="slider">
      <div className="slider__box">
        <div className="slider__slides" ref={sliderRef}>
          {children}
        </div>
      </div>
    </div>
  );
}
