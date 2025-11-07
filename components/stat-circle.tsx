interface StatCircleProps {
  value: string;
  label: string;
  arcLength?: number;
  strokeWidth?: number;
  strokeColor?: string;
  rotation?: number;
  showStar?: boolean;
  className?: string;
}
export default function StatCircle({
  value,
  label,
  arcLength = 314,
  strokeWidth = 8,
  strokeColor = "#f59e0b",
  rotation = -90,
  showStar = true,
  className = "",
}: StatCircleProps) {
  return (
    <div className={`relative w-72 h-72 ${className}`}>
      {showStar && (
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-amber-500 text-2xl">
          ✦
        </div>
      )}

      {/* Circle with arc border */}
      <div className="w-full h-full rounded-full bg-white/70 relative overflow-hidden">
        {/* Orange arc at top */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <circle
            cx="50%"
            cy="50%"
            r="calc(50% - 4px)"
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeDasharray={arcLength}
            strokeLinecap="round"
          />
        </svg>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-2xl sm:text-6xl font-bold">{value}</div>
          <div className="text-gray-500 text-xs sm:text-base">{label}</div>
        </div>
      </div>
    </div>
  );
}
