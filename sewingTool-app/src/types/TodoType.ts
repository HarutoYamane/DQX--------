//後から機能を拡張するものは、typeではなくinterfaceを使用する
export type ArmorType = "head" | "body_upper" | "body_lower" | "arm" | "leg";
export type ClothType = 1 | 2 | 3 | 4;
export type PowerRotate = "強い" | "弱い" | "最強" | "普通" | "？";

export interface ArmorInfo {
  TypeId: ArmorType; //防具種類
  Name: string; //防具名
  SettingValues: (number | null)[]; // 最大値の配列(左上→中央上→右上→左中央→中央→右中央→左下→中央下→右下）
  PowerRotate: string[]; // 縫いパワーのローテーション
  ClothId: ClothType; // 布の種類をと説明もある為、数字で指定(1~4)
}
