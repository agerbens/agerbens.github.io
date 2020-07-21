import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import favicon from '../images/favicon.png';

import './reset.css';
import './site.css';

const SiteLayout = ({ children }) => (
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
    render={(data) => (
      <>
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
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        {children}
      </>
    )}
  />
);

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteLayout;
