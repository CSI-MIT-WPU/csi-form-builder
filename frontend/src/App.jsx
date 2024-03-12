import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import Navbar from "./components/common/Navbar";
import FormRes from "./pages/FormRes";
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<FormPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/form-res/:id" element={<FormRes />} />
        </Routes>
        <Toaster/>
      </div>
    </Router>
  );
}

export default App;
