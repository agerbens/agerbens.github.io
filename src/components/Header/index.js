import React from 'react';
import { Link } from 'gatsby';

import './header.css';

const Header = () => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link exact to="/" activeClassName="active">
        Home
      </Link>
      <Link exact to="/work" activeClassName="active">
        Work
      </Link>
      <Link exact to="/contact" activeClassName="active">
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
