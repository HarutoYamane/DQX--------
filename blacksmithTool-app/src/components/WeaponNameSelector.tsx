import WeaponNameList from "./WeaponNameList";
import { useWeaponContext } from "../hooks/useContext";
import { GiBowieKnife } from "react-icons/gi";

export default function WeaponNameSelector() {
  const { weaponType } = useWeaponContext();

  // weaponTypeが選択されていない場合は何も表示しない
  if (!weaponType) {
    return null;
  }

  return (
    <form className="flex flex-col gap-4 w-full">
      <div className="text-2xl font-bold">武器名の選択</div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-1 items-center">
          <GiBowieKnife size={24} color="red" />
          <label htmlFor="weaponName">武器名</label>
        </div>
        <select
          id="weaponName"
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">武器名を選択してください</option>
          {WeaponNameList.filter((weapon) => weapon.Typeid === weaponType).map(
            (weapon) => {
              return (
                <option key={weapon.name} value={weapon.name}>
                  {weapon.name}
                </option>
              );
            }
          )}
        </select>
      </div>
    </form>
  );
}
