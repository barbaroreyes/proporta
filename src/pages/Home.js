import React from 'react';
import Portafolio from '../compo/Portafolio'
import Home1 from '../pages/Home1'
import {Switch , Route} from 'react-router-dom'
const Home = (props) => {
  return (
    <div className='home'>
    <Switch>
        <Route exact path='/'>
            <Home1/>
        </Route>
        <Route exact path='/about'>
            home
        </Route>
        <Route exact path='/portafolio'>
        <Portafolio
        {...props}
        />
        </Route>
        <Route exact path='/contact'>
          Contact
        </Route>

    </Switch>

     
    </div>
  );
}

export default Home;
