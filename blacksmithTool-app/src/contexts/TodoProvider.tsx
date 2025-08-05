import { useState } from "react";
import { BlackSmithContext } from "./TodoContext";

export const WeaponProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [weaponType, setWeaponType] = useState<string>("");

  const value = {
    weaponType,
    setWeaponType,
  };

  return (
    <BlackSmithContext.Provider value={value}>
      {children}
    </BlackSmithContext.Provider>
  );
};
