import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar(){

  return(
        <div className="navbar">
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/nfl">NFL</Link>
              <Link to="/nhl">NHL</Link>
              <Link to="/epl">EPL</Link>
           </ul>
        </div>
  );

}