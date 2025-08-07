interface ValueDisplayProps {
  value: number | null;
  label?: string;
  size?: "small" | "medium" | "large";
}

export default function ValueDisplay({
  value,
  label,
  size = "medium",
}: ValueDisplayProps) {
  const sizeClasses = {
    small: "w-16 h-16 text-sm",
    medium: "w-20 h-20 text-lg",
    large: "w-24 h-24 text-xl",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {label && (
        <div className="text-sm font-medium text-gray-700">{label}</div>
      )}
      <div
        className={`${sizeClasses[size]} bg-orange-100 border-2 border-orange-300 rounded-lg flex items-center justify-center font-bold text-orange-800 shadow-sm`}
      >
        {value}
      </div>
    </div>
  );
}
