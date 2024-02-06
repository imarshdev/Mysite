import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Home from "./pages/home";
import About from "./pages/about";
import Notes from "./pages/notes";
import Projects from "./pages/projects";
import Contacts from "./pages/contacts";
import Play from "./pages/play";

function App() {


  return (
    <div style={{width: '100%'}}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
