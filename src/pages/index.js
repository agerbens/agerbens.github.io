import React from 'react';
import { Link, Element } from 'react-scroll';
import classNames from 'classnames';

import './styles/home.css';

import SiteLayout from '../layouts/site';

import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import useDarkMode from '../hooks/useDarkMode';

const IndexPage = () => {
  const [isDarkMode, setDarkMode] = useDarkMode();

  const classes = {
    home: true,
    dark: isDarkMode,
  };

  return (
    <SiteLayout title="Home">
      <div className={classNames(classes)}>
        <div className="hero-section">
          <div className="hero-content">
            <div
              className="avatar"
              title={`Click Me For ${isDarkMode ? 'Light' : 'Dark'} Mode!`}
              onClick={() => setDarkMode(!isDarkMode)}
            />
            <div>
              <h1>Hi! I'm Adam Gerbens</h1>
              <p>
                I'm a Full-Stack Web Developer living in Mesa, AZ. I have been
                building interactive web applications for the last five years,
                focusing primarily on modern javascript development with React
                and Node.js.
              </p>
              <p>
                For inquiries, please send me an email at{' '}
                <a href="mailto:adam.gerbens@gmail.com">
                  adam.gerbens@gmail.com
                </a>
                , or check the <Link to="contact">contact section</Link> for
                more information.
              </p>
            </div>
          </div>
        </div>
        <div className="main-section">
          <div className="main-content">
            <Element name="work">
              <Work />
            </Element>
            <hr />
            <Element name="contact">
              <Contact />
            </Element>
          </div>
        </div>
        <Footer />
      </div>
    </SiteLayout>
  );
};

export default IndexPage;
