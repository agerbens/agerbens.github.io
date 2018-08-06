import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">Home</Link>
      <Link to="/work">Work</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </div>
);

export default Header;
