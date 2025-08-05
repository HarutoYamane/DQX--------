interface WeaponName {
  Typeid: string;
  name: string;
}

const WeaponNameList: WeaponName[] = [
  { Typeid: "sword", name: "鉄の剣" },
  { Typeid: "sword", name: "鋼の剣" },
  { Typeid: "sword", name: "銀の剣" },
  { Typeid: "sword", name: "金の剣" },
  { Typeid: "greatSword", name: "鉄の両手剣" },
  { Typeid: "greatSword", name: "鋼の両手剣" },
  { Typeid: "greatSword", name: "銀の両手剣" },
  { Typeid: "greatSword", name: "金の両手剣" },
  { Typeid: "katana", name: "鉄の短剣" },
  { Typeid: "katana", name: "鋼の短剣" },
  { Typeid: "katana", name: "銀の短剣" },
];

export default WeaponNameList;
