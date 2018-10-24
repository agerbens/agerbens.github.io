import React, { Component } from 'react';
import './contact.css';

import GitHubLogo from '../../images/GitHub-Mark-64px.png';
import LinkedInLogo from '../../images/In-Black-94px-TM.png';
import MailIcon from '../../images/mail.png';

class Contact extends Component {
  render() {
    return (
      <div className="ContactSection">
        <div className="ContactTitle">Contact me</div>
        <div className="ContactSocialButtons">
          <a href="mailto:adam.gerbens@gmail.com?subject=Hello from adamgerbens.com">
            <img
              className="ContactSocialButton"
              src={MailIcon}
              alt="Email adam.gerbens@gmail.com"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/adam-gerbens-b06342121/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="ContactSocialButton"
              src={LinkedInLogo}
              alt="LinkedIn Logo"
            />
          </a>
          <a
            href="https://github.com/agerbens"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="ContactSocialButton"
              src={GitHubLogo}
              alt="GitHub Logo"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
