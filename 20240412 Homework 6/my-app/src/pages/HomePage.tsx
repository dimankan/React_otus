import React from 'react';
import withAuth from '../hoc/withAuth';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default withAuth(HomePage);
