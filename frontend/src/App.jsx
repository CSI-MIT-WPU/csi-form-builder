import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import Navbar from "./components/common/Navbar";
import FormRes from "./pages/FormRes";
import { Toaster } from "@/components/ui/sonner"
import ResponsePage from "./pages/ResponsePage";

function NavbarRenderer() {
  const location = useLocation();
  const isResponsePage = location.pathname.startsWith('/form/');
  return !isResponsePage && <Navbar />;
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
        </Routes>
        <Toaster/>
      </div>
    </Router>
  );
}

export default App;
