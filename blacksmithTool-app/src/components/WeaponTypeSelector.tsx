import { useWeaponContext } from "../hooks/useContext";
import { Gi3dHammer } from "react-icons/gi";

export default function WeaponTypeSelector() {
  const { weaponType, setWeaponType } = useWeaponContext();

  return (
    <form className="flex flex-col gap-4 ">
      <div className="text-2xl font-bold">武器種類の選択</div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center">
          <div className="scale-x-[-1] rotate-[30deg]">
            {/* 左右反転 + 20度回転 */}
            <Gi3dHammer size={24} color="red" />
          </div>
          <label htmlFor="Type">武器種類</label>
        </div>

        <div className="flex flex-row gap-2">
          <select
            id="Type"
            value={weaponType}
            onChange={(e) => setWeaponType(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">武器種類を選択してください</option>
            <option value="sword">片手剣</option>
            <option value="greatSword">両手剣</option>
            <option value="katana">短剣</option>
            <option value="axe">斧</option>
            <option value="hammer">ハンマー</option>
            <option value="spear">ヤリ</option>
            <option value="bow">弓</option>
            <option value="scythe">鎌</option>
          </select>
        </div>
      </div>
    </form>
  );
}
