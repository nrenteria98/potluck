import Home from './pages/Home';
import Search from './pages/Search';
import Bubbles from './components/Bubbles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style/App.scss';
require('dotenv').config()

function App() {
  return (
    <div className="Main">
      <Router basename='/potluck'>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      {/* Bubbles for background animation */}
      <Bubbles></Bubbles>
    </div>
  );
}

export default App;
