import React from 'react';
import Picture from '../info/fotoperfil.jpeg'

const Header = () => {
  return (
    <header>
       <img  src ={Picture}  alt ='phot'/>
      <span>Barbaro Reyes</span>
     </header>
  );
}

export default Header;
