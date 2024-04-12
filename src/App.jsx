import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
   <div className="w-[100vw] h-[100vh] min-h-screen bg-[#000814] overflow-y-auto ">
    <Navbar>
    </Navbar>
    <Home></Home>
    <Footer></Footer>
   </div>
  );
}

export default App;
