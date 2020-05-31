import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NavBar from './Components/Widgets/NavBar'
import Welcome from './Components/Welcome'
import LogIn from './Components/LogIn';
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import FoodAvailable from './Components/FoodAvailable';




function App() {
  return (
    <>
    <Router>
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={LogIn} />
            <Route path='/home' component={Home} />
            <Route path='/Donaciones' component={FoodAvailable} />
            <Route path='/AboutUs' component={WeAre} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
