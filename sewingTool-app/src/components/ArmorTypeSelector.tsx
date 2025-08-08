import { useMainToolsContext } from "../hooks/useContext";
import { LuShirt, LuSearch } from "react-icons/lu";

export default function ArmorTypeSelector() {
  const { armorType, setArmorType } = useMainToolsContext();

  return (
    <form className="flex flex-col gap-4 ">
      <div className="flex flex-row items-center gap-2">
        <LuShirt size={24} color="red" />
        <div className="text-2xl font-bold">防具種類の選択</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center">
          <div>
            <LuSearch size={24} color="red" />
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
            <option value="head">アタマ - 防具</option>
            <option value="body_upper">体上 - 防具</option>
            <option value="body_lower">体下 - 防具</option>
            <option value="arm">ウデ - 防具</option>
            <option value="leg">足 - 防具</option>
          </select>
        </div>
      </div>
    </form>
  );
}
