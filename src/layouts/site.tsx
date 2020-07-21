import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SEO from '../components/SEO';

import './reset.css';
import './site.css';

type SiteLayoutProps = {
  title: string;
};

const SiteLayout: React.FC<SiteLayoutProps> = ({ title, children }) => (
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
      <>
        <SEO title={title} />
        {children}
      </>
    )}
  />
);

export default SiteLayout;
