import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h5>Iam Otherpage</h5>
      <Link to='/' >Go back home</Link>
    </div>
  )
}