import React from 'react';
import SiteLayout from '../layouts/site';
import UnderConstruction from '../components/UnderConstruction';

const ContactPage = () => (
  <SiteLayout>
    <div
      style={{
        margin: '0 auto',
        width: '100%',
        padding: '300px 50px',
        backgroundColor: 'black',
      }}
    >
      <UnderConstruction />
    </div>
  </SiteLayout>
);

export default ContactPage;
