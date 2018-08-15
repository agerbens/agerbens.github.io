import React from 'react';
import { Link } from 'react-scroll';

import './header.css';

const Header = () => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link
        to="work"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        Work
      </Link>
      <Link
        to="contact"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
