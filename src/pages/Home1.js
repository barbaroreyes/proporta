import React from 'react';
import {Link} from 'react-router-dom';
const Home1 = () => {
  return (
    <ul >
      <Link  to='/'>Home</Link>
      <Link to='/portafolio'>Portafolio</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/about'>About</Link>
    </ul>
  );
}

export default Home1;
