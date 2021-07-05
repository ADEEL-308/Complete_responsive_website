import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Social from './components/Social';

import {Switch,Route,Redirect} from 'react-router-dom';


const App =()=>{
    return(
        <>  <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
            <Social/>
            <Footer/>
        </>
    );
}

export default App;