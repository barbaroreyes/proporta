import React from 'react';
import Picture from '../info/fotoperfil.jpeg'
import Footer from './Footer'
const Header = () => {
  return (
    <header>
       <img  src ={Picture}  alt ='phot'/>
      Barbaro Reyes
     
      <Footer/>
    </header>
  );
}

export default Header;
