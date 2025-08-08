import type { ArmorInfo } from "../types/TodoType";

// TypeId {head:頭 body_upper:体上 body_lower:体下 arm:腕 leg:脚}
// ClothId {1:再生布 2:虹布 3:会心布 4:倍半布}
const ArmorInfoList: ArmorInfo[] = [
  {
    TypeId: "head",
    Name: "鋼の頭防具",
    SettingValues: [10, 15, 20, 25, 30, 35, 40, 45, 50],
    PowerRotate: ["強い", "弱い", "最強", "普通", "?", "弱い"],
    ClothId: 1,
  },
  {
    TypeId: "body_upper",
    Name: "鉄の体上防具",
    SettingValues: [20, 25, 30, 35, 40, 45, 50, 55, 60],
    PowerRotate: ["強い", "弱い", "最強", "普通", "?", "弱い"],
    ClothId: 2,
  },
  {
    TypeId: "body_lower",
    Name: "鉄の体下防具",
    SettingValues: [30, 35, 40, 45, 50, 55, 60, 65, 70],
    PowerRotate: ["強い", "弱い", "最強", "普通", "?", "弱い"],
    ClothId: 2,
  },
  {
    TypeId: "arm",
    Name: "金の腕防具",
    SettingValues: [40, 45, 50, 55, 60, 65, 70, 75, 80],
    PowerRotate: ["強い", "弱い", "最強", "普通", "?", "弱い"],
    ClothId: 4,
  },
  {
    TypeId: "leg",
    Name: "プラチナの脚防具",
    SettingValues: [15, 20, 25, 30, 35, 40, 45, 50, 55],
    PowerRotate: ["強い", "弱い", "最強", "普通", "?", "弱い"],
    ClothId: 2,
  },
  {
    TypeId: "leg",
    Name: "鋼の脚防具",
    SettingValues: [25, 30, 35, 40, 45, 50, 55, 60, 65],
    PowerRotate: ["強い", "弱い", "最強", "普通", "?", "弱い"],
    ClothId: 1,
  },
  {
    TypeId: "leg",
    Name: "銀の脚防具",
    SettingValues: [35, 40, 45, 50, 55, 60, 65, 70, 75],
    PowerRotate: ["強い", "弱い", "最強", "普通", "?", "弱い"],
    ClothId: 3,
  },
  {
    TypeId: "leg",
    Name: "金の脚防具",
    SettingValues: [45, 50, 55, 60, 65, 70, 75, 80, 85],
    PowerRotate: ["強い", "弱い", "最強", "普通", "?", "弱い"],
    ClothId: 4,
  },
  {
    TypeId: "head",
    Name: "鉄の頭防具",
    SettingValues: [8, 12, 16, 20, 24, 28, 32, 36, 40],
    PowerRotate: ["強い", "弱い", "最強", "普通", "?", "弱い"],
    ClothId: 2,
  },
  {
    TypeId: "body_upper",
    Name: "鋼の体上防具",
    SettingValues: [16, 20, 24, 28, 32, 36, 40, 44, 48],
    PowerRotate: ["強い", "弱い", "最強", "普通", "?", "弱い"],
    ClothId: 3,
  },
  {
    TypeId: "body_lower",
    Name: "銀の体下防具",
    SettingValues: [24, 28, 32, 36, 40, 44, 48, 52, 56],
    PowerRotate: ["強い", "弱い", "最強", "普通", "?", "弱い"],
    ClothId: 4,
  },
];

export default ArmorInfoList;
