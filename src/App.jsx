import { Route, Routes } from "react-router-dom";
import "./App.css";
import Addition from "./pages/Addition";
import Subtraction from "./pages/Subtraction";
import Home from "./pages/Home";
import DotProduct from "./pages/DotProduct";

function App() {
  return (
    <div className="bg-gray-50 w-full h-full flex justify-center items-center py-6">
      <div className="w-[70%] h-full flex justify-center items-center px-5 ml-[10%] border-l border-r  border-gray-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addition" element={<Addition />} />
          <Route path="/subtraction" element={<Subtraction />} />
          <Route path="/d-product" element={<DotProduct />} />
          <Route path="/dot-product" element={<DotProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
