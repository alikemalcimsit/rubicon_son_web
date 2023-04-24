
import { Route, Routes } from "react-router";
import Navbar from "./layouts/navbar/Navbar";
import AboutPage from "./pages/aboutpage/AboutPage";
import ContactPage from "./pages/contactpage/ContactPage";
import HomePage from "./pages/homepage/HomePage";
import MembersPage from "./pages/memberspage/MembersPage";
import ProjectPage from "./pages/projectspage/ProjectPage";
import Atakar from "./pages/atakarpages/Atakar";
import AllPage from "./pages/AllPage";


function App() {

  return (
    <div >
   
 <Routes>
<Route exact path="/" element={<AllPage></AllPage>}>
</Route>


<Route  path="/project/atakar" element={<Atakar></Atakar>}>
  
</Route>

 </Routes>

   
    </div>
  );
}

export default App;
