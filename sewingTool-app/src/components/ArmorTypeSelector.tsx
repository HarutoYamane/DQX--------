import { useMainToolsContext } from "../hooks/useContext";
import { Gi3dHammer } from "react-icons/gi";

export default function WeaponTypeSelector() {
  const { armorType, setArmorType } = useMainToolsContext();

  return (
    <form className="flex flex-col gap-4 ">
      <div className="text-2xl font-bold">防具種類の選択</div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center">
          <div className="scale-x-[-1] rotate-[30deg]">
            {/* 左右反転 + 20度回転 */}
            <Gi3dHammer size={24} color="red" />
          </div>
          <label htmlFor="Type">防具種類</label>
        </div>

        <div className="flex flex-row gap-2">
          <select
            id="Type"
            value={armorType}
            onChange={(e) => setArmorType(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">防具種類を選択してください</option>
            <option value="head">頭防具</option>
            <option value="body_upper">体上防具</option>
            <option value="body_lower">体下防具</option>
            <option value="arm">腕防具</option>
            <option value="leg">脚防具</option>
          </select>
        </div>
      </div>
    </form>
  );
}
