import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About-us";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav activeClass={location.pathname}/>
        <Routes>
          <Route path="*" Component={Home} />
          <Route path="/contact" Component={Contact} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/about-us" Component={About} />
        </Routes>
        <h1>Hello</h1>
        <h2>Mani</h2>
      </BrowserRouter>
    </>
  );
}

export default App;
