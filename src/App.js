import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import NFLPage from './pages/NFLPage';
import NHLPage from './pages/NHLPage';
import EPLPage from './pages/EPLPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/nfl" element={<NFLPage/>} />
          <Route path="/nhl" element={<NHLPage/>} />
          <Route path="/epl" element={<EPLPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
