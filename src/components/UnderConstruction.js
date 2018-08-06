import React from 'react';
import Warning from './icons/Warning';

export default function UnderConstruction() {
  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <Warning />
      <p style={{ color: 'gold', fontWeight: 'bold' }}>
        Under construction. I will be adding content and making the site
        responsive in the coming days.
      </p>
    </span>
  );
}
