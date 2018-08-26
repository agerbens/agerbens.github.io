import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './reset.css';
import './site.css';

const SiteLayout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Personal portfolio site for Adam Gerbens',
            },
            {
              name: 'keywords',
              content: 'adam,gerbens,web,application,developer,portfolio',
            },
          ]}
        />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        {children}
        <Footer />
      </Fragment>
    )}
  />
);

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteLayout;
