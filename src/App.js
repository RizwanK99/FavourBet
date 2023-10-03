import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NFLPage from './pages/NFLPage';

function App() {
  return (
    <>
      <Navbar className='navbar-background'>
          <NavLink className='navbar-container' href="/">Home</NavLink>
          <NavLink className='navbar-container' href="/nfl">NFL</NavLink>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nfl" element={<NFLPage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
