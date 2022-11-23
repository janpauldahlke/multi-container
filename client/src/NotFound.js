import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h5>page not found</h5>
      <Link to="/">Homepage</Link>
    </div>
  )
}

export default NotFound;