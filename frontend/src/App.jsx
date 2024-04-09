import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import FormRes from "./pages/FormRes";
import ResponsePage from "./pages/ResponsePage";
import SuccessPage from "./pages/SuccessPage";
import Navbar from "./components/common/Navbar";
import { Toaster } from "@/components/ui/sonner"

function NavbarRenderer() {
  const location = useLocation();
  const showNavBar = location.pathname.startsWith('/form/') || location.pathname.startsWith('/success');
  return !showNavBar && <Navbar />;
}

function App() {

  return (
    <Router>
      <div className="App">
        <NavbarRenderer/>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<FormPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/form-res/:id" element={<FormRes />} />
          <Route path="/form/:id" element={<ResponsePage/>}/>
          <Route path="/success" element={<SuccessPage/>}/>
        </Routes>
        <Toaster/>
      </div>
    </Router>
  );
}

export default App;
