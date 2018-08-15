import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        &copy; {new Date().getFullYear()} adamgerbens.com
      </div>
    );
  }
}

export default Footer;
