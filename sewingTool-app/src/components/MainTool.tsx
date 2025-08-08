import { useMainToolsContext } from "../hooks/useContext";
import ValueDisplay from "./ValueDisplay";
import { LuCheck, LuInfo, LuArrowBigRight } from "react-icons/lu";
import { useMemo } from "react";
import ArmorInfoList from "../components/ArmorInfoList";
import { ArmorObjIndex } from "../hooks/useTodo";

export default function MainTool() {
  const {
    armorName,
    armorType,
    values,
    setValues,
    nowValues,
    setNowValues,
    settingValues,
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

  // 縫い強度のローテート順を取得
  const PowerRotate = useMemo(
    () => ArmorInfoList[ArmorObjIndex(armorName, armorType)]?.PowerRotate || [],
    [armorName, armorType]
  );

  const PowerColor = (value: string) => {
    switch (value) {
      case "強い":
        return "bg-orange-500 px-2 py-1";
      case "弱い":
        return "bg-blue-500 px-2 py-1";
      case "普通":
        return "bg-green-500 px-2 py-1";
      case "最強":
        return "bg-red-500 px-2 py-1";
      case "?":
        return "bg-gray-500 px-4 py-1";
    }
  };

  // 入力値を更新する為の関数
  const InputValue = (index: number, newValue: number) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  return (
    <div>
      <h1>裁縫職人ツール</h1>
      <div>
        <h2>{armorName}</h2>
        <div className="flex flex-row gap-2">
          {PowerRotate.map((value, index) => (
            <div key={index} className="flex flex-row items-center">
              <div className={`${PowerColor(value)} text-white rounded-md`}>
                {value}
              </div>
              {index < PowerRotate.length - 1 && (
                <LuArrowBigRight className="mx-2 text-gray-700" size={24} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-8 mt-4">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-4 mb-4">
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
            <div className="flex flex-row items-center gap-2 mt-4 bg-blue-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-600">
              <LuCheck size={24} color="white" />
              <button type="submit">入力</button>
            </div>

            <div className="flex flex-row items-center gap-2 mt-4 bg-green-500 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-green-600">
              <LuInfo size={24} color="white" />
              <button
                type="button"
                onClick={() => {
                  setNowValues(settingValues.map((value) => value || 0));
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
          </div>
        </form>

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
