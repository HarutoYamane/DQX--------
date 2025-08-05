import { createContext } from "react";

interface BlackSmithContextType {
  weaponType: string;
  setWeaponType: (weaponType: string) => void;
}

export const BlackSmithContext = createContext<
  BlackSmithContextType | undefined
>(undefined);
