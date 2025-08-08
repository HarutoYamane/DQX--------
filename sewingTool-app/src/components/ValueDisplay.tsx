import { memo } from "react";
import { LuCircleCheck, LuCircleX, LuCircleAlert } from "react-icons/lu";
import { useMainToolsContext } from "../hooks/useContext";

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

const evaluationIcon = (value: number | null) => {
  //状態アイコンを返す関数
  if (value === null) return; //null
  if (value < -5) return <LuCircleX className="text-red-600" />;
  if (value === 0) return <LuCircleCheck className="text-green-500" />;
  if (value > 5) return <LuCircleAlert className="text-gray-600" />;
  if (value >= 3) return <LuCircleCheck className="text-yellow-600" />;
  if (value < 3) return <LuCircleCheck className="text-yellow-600" />;
  return;
};

const evaluationText = (value: number | null) => {
  //状態テキストを返す関数
  if (value === null) return; //null
  if (value < -5) return <p className="text-red-600">重大な問題</p>; //-5以上はアウト
  if (value === 0) return <p className="text-green-500">完璧</p>; //0は完璧
  if (value >= 5) return <p className="text-gray-600">調整中</p>; //基本的に調整中
  if (value >= 3) return <p className="text-gray-600">微調整必要</p>; //3以上は微調整必要（手加減縫い等)
  if (value < 3) return <p className="text-yellow-600">調整済み</p>; //3未満は調整済み
  return;
};

const ValueDisplay = memo(function ValueDisplay({
  value,
  label,
  size = "medium",
}: ValueDisplayProps) {
  const { armorName } = useMainToolsContext();

  const sizeClasses = {
    small: "w-16 h-16 text-sm",
    medium: "w-20 h-20 text-lg",
    large: "w-24 h-24 text-xl",
  };

  return (
    <div>
      {label && (
        <div className="text-sm font-medium text-gray-700">{label}</div>
      )}
      <div className="flex flex-row items-center gap-2">
        {evaluationIcon(value)}
        {evaluationText(value)}
      </div>
      <div
        className={`${sizeClasses[size]} ${getTextColor(value)} ${
          armorName == null ? "bg-gray-500" : "bg-orange-100"
        } border-2 border-orange-300 rounded-lg flex items-center justify-center font-bold shadow-sm`}
      >
        {value}
      </div>
    </div>
  );
});

export default ValueDisplay;
