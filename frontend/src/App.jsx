import "./App.css";
import { Button } from "./components/ui/button";
import Navbar from "./components/common/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar/>
      <HomePage/>
    </>
  );
}

      {/* <div className="text-3xl font-bold ">Hello World</div>
      <Button>Heelo</Button> */}
export default App;