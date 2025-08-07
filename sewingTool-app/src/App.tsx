import WeaponTypeSelector from "./components/ArmorTypeSelector";
import WeaponNameSelector from "./components/ArmorNameSelector";
import MainTool from "./components/MainTool";
import { ArmorProvider } from "./contexts/TodoProvider";

function App() {
  return (
    <ArmorProvider>
      <div className="bg-orange-100 h-screen w-screen">
        <div className="flex h-full w-full bg-orange-100">
          <div className="flex flex-col gap-4 p-4 m-4 border-2 border-gray-300 rounded-md">
            <WeaponTypeSelector />
            <WeaponNameSelector />
          </div>
          <div className="flex flex-col gap-4 p-4 m-4 border-2 border-gray-300 rounded-md">
            <MainTool />
          </div>
        </div>
      </div>
    </ArmorProvider>
  );
}

export default App;
