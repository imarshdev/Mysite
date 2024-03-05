// hi, this is my personnal site in react
// i had react-router-dom because i had multiple pages but now i just want to use one page
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
