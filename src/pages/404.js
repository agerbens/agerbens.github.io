import React from 'react';
import SiteLayout from '../layouts/site';

// TODO Add a custom 404
const NotFoundPage = () => (
  <SiteLayout title="404">
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </SiteLayout>
);

export default NotFoundPage;
