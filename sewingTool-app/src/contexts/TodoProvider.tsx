import { useState } from "react";
import { MainToolsContext } from "./TodoContext";

export const ArmorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [armorType, setArmorType] = useState<string>("");
  const [armorName, setArmorName] = useState<string>("");
  const [values, setValues] = useState<(number | null)[]>([
    //入力値（最初と入力後はnull、送信はnumber)
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
  const [nowValues, setNowValues] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [settingValues, setSettingValues] = useState<(number | null)[]>([
    //設定値
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

  const value = {
    armorType,
    setArmorType,
    armorName,
    setArmorName,
    values,
    setValues,
    nowValues,
    setNowValues,
    settingValues,
    setSettingValues,
  };

  return (
    <MainToolsContext.Provider value={value}>
      {children}
    </MainToolsContext.Provider>
  );
};
