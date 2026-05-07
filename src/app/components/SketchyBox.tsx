import { ReactNode } from "react";

interface SketchyBoxProps {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "dashed";
  padding?: string;
}

export function SketchyBox({ children, className = "", variant = "solid", padding = "p-4" }: SketchyBoxProps) {
  const id = `sketchy-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`relative ${padding} ${className}`}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
        <defs>
          <filter id={id}>
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="3"
          strokeDasharray={variant === "dashed" ? "10,5" : "0"}
          filter={`url(#${id})`}
        />
      </svg>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
