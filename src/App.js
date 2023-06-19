import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./components/Input";
import Lorem from "./components/Lorem";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Input />}/>
          <Route path="/lorem" element={<Lorem />}/>  
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

