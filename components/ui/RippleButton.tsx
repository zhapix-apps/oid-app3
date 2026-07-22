"use client";

import { useState, MouseEvent, ReactNode, ButtonHTMLAttributes } from "react";

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function RippleButton({ children, className = "", onClick, ...rest }: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
    onClick?.(e);
  };

  return (
    <button className={`sweep ${className}`} onClick={handleClick} {...rest}>
      {children}
      {ripples.map((r) => (
        <span key={r.id} className="ripple-span" style={{ left: r.x, top: r.y }} />
      ))}
    </button>
  );
}
