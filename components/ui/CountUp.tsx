"use client";

import { useCountUp } from "@/lib/hooks/useCountUp";

interface CountUpProps {
  target: number;
  trigger: boolean;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

function formatNumber(value: number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CountUp({ target, trigger, suffix = "", decimals, duration = 1800, className }: CountUpProps) {
  const value = useCountUp(target, trigger, duration);
  const display = decimals
    ? (trigger ? target.toFixed(decimals) : (0).toFixed(decimals))
    : formatNumber(value);
  return (
    <span className={className}>
      {display}
      {suffix}
    </span>
  );
}
