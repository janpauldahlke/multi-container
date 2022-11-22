import React from 'react';
import { Link} from 'react-router-dom';

const Otherpage = () => {
  return (
    <div>
      <h5>Iam Otherpage</h5>
      <Link to="/">go back</Link>
    </div>
  )
};

export default Otherpage;