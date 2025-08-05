// Contextを使用するためのカスタムフック
import { useContext } from "react";
import { BlackSmithContext } from "../contexts/TodoContext";

export const useWeaponContext = () => {
  const context = useContext(BlackSmithContext);
  if (context === undefined) {
    throw new Error("useWeaponContext must be used within a WeaponProvider");
  }
  return context;
};
