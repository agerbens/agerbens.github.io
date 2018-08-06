import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'lightgray',
      maxWidth: 1024,
      padding: '50px 0px',
      margin: '10px auto',
    }}
  >
    <Link
      to="/"
      style={{
        color: 'black',
        textDecoration: 'none',
        margin: 'auto',
      }}
    >
      © ADAMGERBENS.COM 2018
    </Link>
  </div>
);

export default Header;
