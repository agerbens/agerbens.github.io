import React from 'react';
import Warning from './icons/Warning';

export default function UnderConstruction() {
  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <Warning />
      <p className="warning">
        This site is currently under construction. Check back soon for updates.
      </p>
    </span>
  );
}
