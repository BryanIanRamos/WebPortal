import "./App.css";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Singin from "./Pages/Authentication/Singin";
import Signup from "./Pages/Authentication/Signup";
import Home from "./Pages/Home";
import Activities from "./Pages/Activities";
import Files from "./Pages/Files";
import Webinars from "./Pages/Webinars";
import { Protector } from "./Middleware/helper";
import AddLessons from "./Pages/Extra Pages/AddLessons";
import AddWebinar from "./Pages/Extra Pages/AddWebinar";
import AddActivities from "./Pages/Extra Pages/AddActivities";

function App() {
  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Singin />} />
          <Route path="/Signup" element={<Signup />} />

          <Route path="/AddLesson" element={<AddLessons />} />
          <Route path="/AddWebinar" element={<AddWebinar />} />
          <Route path="/AddActivities" element={<AddActivities />} />
          {/* <Route path="/Signup" element={<Signup />} />
          <Route path="/Signup" element={<Signup />} /> */}

          {/* ProtectedRoutes */}
          <Route path="/Home" element={<Protector Component={Home} />} />
          <Route path="/Files" element={<Protector Component={Files} />} />
          <Route
            path="/Activities"
            element={<Protector Component={Activities} />}
          />
          <Route
            path="/Webinars"
            element={<Protector Component={Webinars} />}
          />
        </Routes>
      </Routers>
    </>
  );
}

export default App;
