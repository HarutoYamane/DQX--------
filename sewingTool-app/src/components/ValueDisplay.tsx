import { memo } from "react";

interface ValueDisplayProps {
  value: number | null;
  label?: string;
  size?: "small" | "medium" | "large";
}

const getTextColor = (value: number | null) => {
  //文字色を返す関数
  if (value === null) return; //null
  if (value < -5) return "text-red-600";
  if (value === 0) return "text-green-600";
  if (value < 5) return "text-yellow-600";
  return "text-black";
};

const ValueDisplay = memo(function ValueDisplay({
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
        className={`${sizeClasses[size]} ${getTextColor(
          value
        )} bg-orange-100 border-2 border-orange-300 rounded-lg flex items-center justify-center font-bold shadow-sm`}
      >
        {value}
      </div>
    </div>
  );
});

export default ValueDisplay;
