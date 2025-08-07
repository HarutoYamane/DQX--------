import { useMainToolsContext } from "../hooks/useContext";
import ValueDisplay from "./ValueDisplay";
import ArmorInfoList from "./ArmorInfoList";

export default function MainTool() {
  const { armorName, values, setValues } = useMainToolsContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // データを送信する処理（ここにAPI呼び出しなどを追加）
    console.log("送信データ:", values);

    // 値を空にする
    setValues([null, null, null, null, null, null, null, null, null]);
  };

  // 入力値を更新する為の関数
  const InputValue = (index: number, newValue: number) => {
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  // 防具名ごとに設定値を更新する為の関数
  const ValueSetting = (): (number | null)[] => {
    const obj = ArmorInfoList.find((item) => item.name === armorName);
    if (obj) {
      return obj.SettingValues;
    }
    return [null, null, null, null, null, null, null, null, null];
  };

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
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            更新
          </button>
        </form>

        <div className="grid grid-cols-3 gap-4">
          {ValueSetting().map((value, index) => (
            <ValueDisplay key={index} value={value} label={`${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
