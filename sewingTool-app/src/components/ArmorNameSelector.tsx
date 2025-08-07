import ArmorInfoList from "./ArmorInfoList";
import { useMainToolsContext } from "../hooks/useContext";
import { GiBowieKnife } from "react-icons/gi";

export default function WeaponNameSelector() {
  const { armorType, setArmorName } = useMainToolsContext();

  // armorTypeが選択されていない場合は何も表示しない
  if (!armorType) {
    return null;
  }

  return (
    <form className="flex flex-col gap-4 w-full">
      <div className="text-2xl font-bold">防具名の選択</div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-1 items-center">
          <GiBowieKnife size={24} color="red" />
          <label htmlFor="weaponName">防具名</label>
        </div>
        <select
          id="weaponName"
          onChange={(e) => setArmorName(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">武器名を選択してください</option>
          {ArmorInfoList.filter((armor) => armor.Typeid === armorType).map(
            (armor) => {
              return (
                <option key={armor.name} value={armor.name}>
                  {armor.name}
                </option>
              );
            }
          )}
        </select>
      </div>
    </form>
  );
}
