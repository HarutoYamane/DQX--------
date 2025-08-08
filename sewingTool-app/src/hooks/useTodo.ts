import ArmorInfoList from "../components/ArmorInfoList";

// 布の種類と説明を取得
export const getClothType = (ClothId: number) => {
  if (ClothId === 1)
    return [
      "再生布",
      "4回毎に、誤差5以上のマスをランダムで選び、現在値が12~16戻る。",
    ];
  if (ClothId === 2)
    return [
      "虹布",
      "2回毎に、差5以上のマスをランダムで選び、集中力の消費が1.5倍になり会心率が上昇する効果と、集中力消費半減効果が交互に発生する。",
    ];
  if (ClothId === 3)
    return [
      "会心布",
      "4回毎に、誤差5以上のマスをランダムで選び、会心率が大幅に上昇し入力値が2倍になる。",
    ];
  if (ClothId === 4)
    return [
      "倍半布",
      "2回毎に、全てのマスで入力値が2倍になる効果と、入力値が0.5倍になる効果が交互に発生する。",
    ];
  return ["", ""];
};

//防具名毎にオブジェクト内のインデックスを取得
export const ArmorObjIndex = (armorName: string, armorType: string) => {
  return ArmorInfoList.findIndex(
    (item) => item.Name === armorName && item.TypeId === armorType
  );
};
