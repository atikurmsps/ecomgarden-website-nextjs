'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Props {
  value: number | null;
  disabled: boolean;
  onRoll: (value: number) => void;
}

const DOT_POSITIONS: Record<number, [number, number][]> = {
  1: [[50, 50]],
  2: [[28, 28], [72, 72]],
  3: [[28, 28], [50, 50], [72, 72]],
  4: [[28, 28], [72, 28], [28, 72], [72, 72]],
  5: [[28, 28], [72, 28], [50, 50], [28, 72], [72, 72]],
  6: [[28, 22], [72, 22], [28, 50], [72, 50], [28, 78], [72, 78]],
};

export default function Dice({ value, disabled, onRoll }: Props) {
  const [display, setDisplay] = useState(value ?? 1);
  const [rolling, setRolling] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Keep display in sync when value changes externally
  useEffect(() => {
    if (value !== null && !rolling) setDisplay(value);
  }, [value, rolling]);

  const handleClick = () => {
    if (disabled || rolling) return;
    setRolling(true);
    let count = 0;
    timerRef.current = setInterval(() => {
      setDisplay(Math.floor(Math.random() * 6) + 1);
      count++;
      if (count >= 10) {
        clearInterval(timerRef.current!);
        const final = Math.floor(Math.random() * 6) + 1;
        setDisplay(final);
        setRolling(false);
        onRoll(final);
      }
    }, 70);
  };

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);

  const dots = DOT_POSITIONS[display] ?? DOT_POSITIONS[1];

  return (
    <button
      onClick={handleClick}
      disabled={disabled || rolling}
      aria-label={`Dice showing ${display}. Click to roll.`}
      className={`
        w-16 h-16 rounded-xl border-4 border-gray-700 bg-white shadow-lg
        transition-all duration-150 select-none
        ${!disabled && !rolling ? 'hover:scale-110 hover:shadow-xl cursor-pointer active:scale-95' : 'opacity-60 cursor-not-allowed'}
        ${rolling ? 'animate-bounce' : ''}
      `}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full p-1">
        {dots.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={9} fill="#1f2937" />
        ))}
      </svg>
    </button>
  );
}
