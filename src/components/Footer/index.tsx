import React from 'react';
import './footer.css';

export const Footer = () => {
  return (
    <div className="Footer">
      &copy; {new Date().getFullYear()} adamgerbens.com
    </div>
  );
};
