// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routers />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
