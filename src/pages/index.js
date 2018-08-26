import React from 'react';
import { Link, Element } from 'react-scroll';

import './styles/home.css';

import SiteLayout from '../layouts/site';
import Work from '../components/Work';

const IndexPage = () => (
  <SiteLayout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Full Stack Dev</h1>
        <p>
          Hi! I'm Adam Gerbens, a Full-Stack Web Developer living in Mesa, AZ.
        </p>
        <p>
          I have been building interactive web applications for the last four
          years, focusing primarily on modern javascript development with React
          and Node.js.
        </p>
        <p>
          For inquiries, please send me an email at{' '}
          <a href="mailto:adam.gerbens@gmail.com">adam.gerbens@gmail.com</a>, or
          check the <Link to="contact">contact section</Link> for more
          information.
        </p>
      </div>
    </div>
    <Element name="about">
      <div>About me</div>
    </Element>
    <Element name="work">
      <Work />
    </Element>
    <Element name="contact">
      <div>Contact Section</div>
    </Element>
  </SiteLayout>
);

export default IndexPage;
