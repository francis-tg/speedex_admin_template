import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashbord from "./Pages/Dashbord";
import SideBar from "./Pages/components/SideBar";
import NavBar from "./Pages/components/NavBar";
import Users from "./Pages/Users";
import Articles from "./Pages/Articles";
import Settings from "./Pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <NavBar/>
      <main>
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Dashbord />} />
            <Route path="/users" element={<Users />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/settings" element={<Settings/>}/>
        </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
