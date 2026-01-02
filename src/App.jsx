import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gray-50 w-full h-full flex justify-center items-center py-6">
      <div className="w-[55%] px-5 ml-[10%] border-l border-r  border-gray-400">
        <Home />
      </div>
    </div>
  );
}

export default App;
