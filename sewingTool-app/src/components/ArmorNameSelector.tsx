import ArmorInfoList from "./ArmorInfoList";
import { useMainToolsContext } from "../hooks/useContext";
import { LuSearch } from "react-icons/lu";
import { useMemo, useEffect } from "react";
import ValueDisplay from "./ValueDisplay";
import { getClothType, ArmorObjIndex } from "../hooks/useTodo";

export default function ArmorNameSelector() {
  const {
    armorType,
    setArmorName,
    armorName,
    setSettingValues,
    settingValues,
  } = useMainToolsContext();

  const ClothColor = (value: string) => {
    switch (value) {
      case "再生布":
        return "text-green-500";
      case "虹布":
        return "bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent";
      case "会心布":
        return "text-red-500";
      case "倍半布":
        return "text-yellow-500";
    }
  };

  // 布の種類と説明を表示（防具名と防具種類が変わったら再計算）
  const clothType = useMemo((): string[] => {
    const obj = ArmorInfoList[ArmorObjIndex(armorName, armorType)];
    return getClothType(obj?.ClothId || 0);
  }, [armorName, armorType]);

  // 防具名と防具種類が変更されたときに設定値を更新
  useEffect((): void => {
    const obj = ArmorInfoList[ArmorObjIndex(armorName, armorType)];
    if (armorName == "" || armorType == "") {
      setSettingValues([null, null, null, null, null, null, null, null, null]);
    } else if (obj) {
      setSettingValues(obj.SettingValues as (number | null)[]);
    }
  }, [armorName, armorType, setSettingValues]);

  // 設定値を表示用に加工
  const ValueSetting = useMemo((): (number | null)[] => {
    return (
      settingValues || [null, null, null, null, null, null, null, null, null]
    );
  }, [settingValues]);

  // armorTypeが選択されていない場合は何も表示しない
  if (!armorType) {
    return null;
  }

  return (
    <div>
      <form className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-1 items-center">
            <LuSearch size={24} color="red" />
            <label htmlFor="weaponName">防具名</label>
          </div>
          <select
            id="weaponName"
            onChange={(e) => setArmorName(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">防具名を選択してください</option>
            {ArmorInfoList.filter((armor) => armor.TypeId === armorType).map(
              (armor) => {
                return (
                  <option key={armor.Name} value={armor.Name}>
                    {armor.Name}
                  </option>
                );
              }
            )}
          </select>
        </div>
      </form>

      {/* 布の種類と説明を表示 */}
      <div>
        <div className="flex flex-row">
          <p>布の種類：</p>
          <p className={ClothColor(clothType[0])}>{clothType[0]}</p>
        </div>
        <div className="flex flex-row">
          <p>説明：</p>
          <p>{clothType[1]}</p>
        </div>
      </div>

      {/* 設定値を表示 */}
      <div className="grid grid-cols-3 gap-4">
        {ValueSetting.map((value, index) => (
          <ValueDisplay
            key={index}
            value={value}
            label={`設定値${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
