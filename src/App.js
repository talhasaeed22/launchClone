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
        </Routes>
          <Footer/>
      </Router>

    </>
  );
}

export default App;
