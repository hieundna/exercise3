import React from 'react';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Login from './containers/Login/Login';
import Register from './containers/Login/Register';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Switch>
    </>
  );
}

export default App;
