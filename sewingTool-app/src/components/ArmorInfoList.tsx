interface ArmorInfo {
  Typeid: string; //防具種類
  name: string; //防具名
  SettingValues: (number | null)[]; // 最大値の配列(左上→中央上→右上→左中央→中央→右中央→左下→中央下→右下）
}

const ArmorInfoList: ArmorInfo[] = [
  {
    Typeid: "head",
    name: "鋼の頭防具",
    SettingValues: [10, 15, 20, 25, 30, 35, 40, 45, 50],
  },
  {
    Typeid: "body_upper",
    name: "鉄の体上防具",
    SettingValues: [20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
  {
    Typeid: "body_lower",
    name: "鉄の体下防具",
    SettingValues: [30, 35, 40, 45, 50, 55, 60, 65, 70],
  },
  {
    Typeid: "arm",
    name: "金の腕防具",
    SettingValues: [40, 45, 50, 55, 60, 65, 70, 75, 80],
  },
  {
    Typeid: "leg",
    name: "プラチナの脚防具",
    SettingValues: [15, 20, 25, 30, 35, 40, 45, 50, 55],
  },
  {
    Typeid: "leg",
    name: "鋼の脚防具",
    SettingValues: [25, 30, 35, 40, 45, 50, 55, 60, 65],
  },
  {
    Typeid: "leg",
    name: "銀の脚防具",
    SettingValues: [35, 40, 45, 50, 55, 60, 65, 70, 75],
  },
  {
    Typeid: "leg",
    name: "金の脚防具",
    SettingValues: [45, 50, 55, 60, 65, 70, 75, 80, 85],
  },
  {
    Typeid: "head",
    name: "鉄の頭防具",
    SettingValues: [8, 12, 16, 20, 24, 28, 32, 36, 40],
  },
  {
    Typeid: "body_upper",
    name: "鋼の体上防具",
    SettingValues: [16, 20, 24, 28, 32, 36, 40, 44, 48],
  },
  {
    Typeid: "body_lower",
    name: "銀の体下防具",
    SettingValues: [24, 28, 32, 36, 40, 44, 48, 52, 56],
  },
];

export default ArmorInfoList;
