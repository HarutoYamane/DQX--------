import { createContext } from "react";

interface MainToolsContextType {
  // 武器選択フォーム関連
  armorType: string; //武器種類
  setArmorType: (armorType: string) => void;
  armorName: string; //武器名
  setArmorName: (armorName: string) => void;

  // 裁縫数値フォーム関連
  values: (number | null)[]; //入力値
  setValues: (values: (number | null)[]) => void;
  nowValues: number[]; //現在値
  setNowValues: (nowValues: number[]) => void;
  settingValues: number[]; //設定値
  setSettingValues: (settingValues: number[]) => void;
}

export const MainToolsContext = createContext<MainToolsContextType | undefined>(
  undefined
);
