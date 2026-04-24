"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

type Stat = {
  value: number;
  label: string;
  icon: React.ReactNode;
};

export default function StatsSection({ stats = [] }: { stats?: Stat[] }) {
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full flex justify-center mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-14 text-center">

        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={start ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="mb-3 text-[#c79a5c]">
              {item.icon}
            </div>

            <CountUp end={item.value} start={start} />

            <span className="text-sm text-black/60 mt-1">
              {item.label}
            </span>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

function CountUp({ end, start }: { end: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / 30;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <span className="text-3xl md:text-4xl font-semibold">
      {count}+
    </span>
  );
}