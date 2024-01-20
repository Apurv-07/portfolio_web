import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About-us";


function App() {
  return (
    <div className="main-body">
      <BrowserRouter>
        <Nav activeClass={location.pathname}/>
        <Routes>
          <Route path="*" Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/about-us" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
   
      </BrowserRouter>
    </div>
  );
}

export default App;
