import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './containers/home';
import ShopProfile from './containers/shopprofile';


class App extends Component {
  render() {
    return (
     <HashRouter>
       <>
      <Route component ={Navbar} />
      <Route path='/' exact component={Home} />   
      <Route path='./containers/shopprofile'exact component={ShopProfile}/>
       </>
     </HashRouter>
    );
  }
}

export default App;