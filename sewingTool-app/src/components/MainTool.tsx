import { useMainToolsContext } from "../hooks/useContext";
import ValueDisplay from "./ValueDisplay";
import ArmorInfoList from "./ArmorInfoList";
import { useMemo } from "react";

export default function MainTool() {
  const {
    armorName,
    armorType,
    values,
    setValues,
    nowValues,
    setNowValues,
    settingValues,
    setSettingValues,
  } = useMainToolsContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (armorType == "") {
      return alert("防具種類を選択してください");
    }
    if (armorName == "") {
      return alert("防具名を選択してください");
    }

    // 残り値から入力値を引く
    const newNowValues = [...nowValues];
    values.forEach((value, index) => {
      if (value !== null) {
        newNowValues[index] = newNowValues[index] - value;
      }
    });
    setNowValues(newNowValues);

    // 入力値を空にする
    setValues([null, null, null, null, null, null, null, null, null]);
  };

  // 入力値を更新する為の関数
  const InputValue = (index: number, newValue: number) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  // 防具名ごとに設定値を更新する（防具名と防具種類が変わったら再計算）
  const ValueSetting = useMemo((): (number | null)[] => {
    const obj = ArmorInfoList.find(
      (item) => item.name === armorName && item.Typeid === armorType
    );
    if (obj) {
      setSettingValues(obj.SettingValues as number[]);
      return settingValues;
    }
    return [null, null, null, null, null, null, null, null, null];
  }, [armorName, armorType, settingValues, setSettingValues]);

  return (
    <div>
      <h1>裁縫職人ツール</h1>
      <div>
        <h2>{armorName}</h2>
      </div>
      <div className="flex flex-row gap-4">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-4">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col gap-2">
                <label className="text-sm font-medium">値 {index + 1}</label>
                <input
                  type="number"
                  value={value || ""}
                  className="border border-gray-300 rounded-md p-2"
                  onChange={(e) => InputValue(index, Number(e.target.value))}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-4">
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              入力
            </button>
            <button
              type="button"
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              onClick={() => {
                setNowValues(settingValues);
                setValues([
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                ]);
              }}
            >
              リセット
            </button>
          </div>
        </form>

        <div className="grid grid-cols-3 gap-4">
          {ValueSetting.map((value, index) => (
            <ValueDisplay
              key={index}
              value={value}
              label={`設定値${index + 1}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {nowValues.map((value, index) => (
            <ValueDisplay
              key={index}
              value={value}
              label={`残り値${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
