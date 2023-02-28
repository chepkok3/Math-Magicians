import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <h2 className="nav-header">Math Magicians</h2>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </div>
    </nav>
  );
}

export default Nav;
