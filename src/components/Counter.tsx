import { useEffect, useRef, useState } from 'react';

/**
 * Counts a numeric value up from 0 when it scrolls into view. Parses the number out of a
 * display string ("43 591 LOC", "58%") so it keeps the surrounding prefix/suffix, and
 * re-formats with spaces as thousands separators. Respects prefers-reduced-motion.
 */
export default function Counter({ value, duration = 1400 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  const m = value.match(/^(\D*?)([\d\s  .,]*\d)(.*)$/s);
  const prefix = m?.[1] ?? '';
  const numStr = m?.[2] ?? value;
  const suffix = m?.[3] ?? '';
  const digits = numStr.replace(/\D/g, '');
  const target = parseInt(digits, 10);
  const hasNumber = digits.length > 0 && Number.isFinite(target);

  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !hasNumber) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hasNumber]);

  useEffect(() => {
    if (!started || !hasNumber) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setN(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration, hasNumber]);

  if (!hasNumber) return <span ref={ref}>{value}</span>;

  const formatted = n.toLocaleString('en-US').replace(/,/g, ' ');
  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
