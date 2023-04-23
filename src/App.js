import Navbar from "./layouts/navbar/Navbar";
import AboutPage from "./pages/AboutPage";
import CarDesignPage from "./pages/CarDesignPage";
import CardDetailsPage from "./pages/CardDetailsPage";
import HomePage from "./pages/HomePage";
import MembersPage from "./pages/MembersPage";


function App() {
  return (
    <div >
      <Navbar></Navbar>
     <HomePage></HomePage>
     <CarDesignPage></CarDesignPage>
     <CardDetailsPage></CardDetailsPage>
     <AboutPage></AboutPage>
     <MembersPage></MembersPage>
    </div>
  );
}

export default App;
