import React from 'react';
import Link from 'gatsby-link';

import SiteLayout from '../layouts/site';
import UnderConstruction from '../components/UnderConstruction';

import './styles/home.css';

const IndexPage = () => (
  <SiteLayout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Professional Web Application Developer</h1>
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
          check the{' '}
          <Link exact to="/contact">
            contact page
          </Link>{' '}
          for more information.
        </p>
        <UnderConstruction />
      </div>
    </div>
  </SiteLayout>
);

export default IndexPage;
