import WeaponTypeSelector from "./components/WeaponTypeSelector";
import WeaponNameSelector from "./components/WeaponNameSelector";
import { WeaponProvider } from "./contexts/TodoProvider";

function App() {
  return (
    <WeaponProvider>
      <div className="bg-orange-100 h-screen w-screen">
        <div className="flex h-full w-full bg-orange-100">
          <div className="flex flex-col gap-4 p-4 m-4 border-2 border-gray-300 rounded-md">
            <WeaponTypeSelector />
            <WeaponNameSelector />
          </div>
        </div>
      </div>
    </WeaponProvider>
  );
}

export default App;
