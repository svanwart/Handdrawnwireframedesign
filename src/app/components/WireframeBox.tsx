export function WireframeBox({
  width = "100%",
  height = "200px",
  label = "IMAGE",
  className = ""
}: {
  width?: string;
  height?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative bg-gray-50 ${className}`}
      style={{ width, height }}
    >
      {/* Hand-drawn border */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
        <defs>
          <filter id="sketchy">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          fill="none"
          stroke="#666"
          strokeWidth="2"
          strokeDasharray="8,4"
          filter="url(#sketchy)"
        />
        <line x1="5%" y1="5%" x2="95%" y2="95%" stroke="#999" strokeWidth="1.5" filter="url(#sketchy)" />
        <line x1="95%" y1="5%" x2="5%" y2="95%" stroke="#999" strokeWidth="1.5" filter="url(#sketchy)" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs text-gray-600 bg-gray-50 px-2" style={{ fontFamily: 'Patrick Hand, cursive' }}>
          {label}
        </span>
      </div>
    </div>
  );
}
