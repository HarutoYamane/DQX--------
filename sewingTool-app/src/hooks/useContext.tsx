// Contextを使用するためのカスタムフック
import { useContext } from "react";
import { MainToolsContext } from "../contexts/TodoContext";

export const useMainToolsContext = () => {
  const context = useContext(MainToolsContext);
  if (context === undefined) {
    throw new Error("武器選択フォームでエラーが発生しました");
  }
  return context;
};
