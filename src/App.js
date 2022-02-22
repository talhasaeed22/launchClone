import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Features from './Components/Features';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";
import Pricing from './Components/Pricing';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/Features" element={<Features/>}>
          </Route>
          <Route exact path="/Pricing" element={<Pricing/>}>
          </Route>
          <Route exact path="/About" element={<About/>}>
          </Route>
          <Route exact path="/Contact" element={<Contact/>}>
          </Route>
        </Routes>
          <Footer/>
      </Router>

    </>
  );
}

export default App;
