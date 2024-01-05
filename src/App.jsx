import "./App.css";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Singin from "./Pages/Authentication/Singin";
import Signup from "./Pages/Authentication/Signup";
import Home from "./Pages/Home";
import Activities from "./Pages/Activities";
import Files from "./Pages/Files";
import Webinars from "./Pages/Webinars";

function App() {
  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Singin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Files" element={<Files />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Webinars" element={<Webinars />} />
        </Routes>
      </Routers>
    </>
  );
}

export default App;
