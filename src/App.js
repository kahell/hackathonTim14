// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
// import Welcome from './components/welcome.js';
// import RepoList from './components/repolist.js';
// import RepoInfo from './components/repoinfo.js';
import Auth from './components/auth.js';
import Login from './components/login.js';
import Register from './components/register.js';
import Home from './components/home.js';
import ChooseBank from './components/choose_bank';

export default class App extends Component{
  render(){
    return(
      <Router showNavigationBar={false}> 
        <Scene key="root">
          <Scene key="Auth" component={Auth} hideNavBar={true}/>
          <Scene key="Login" component={Login} title="Login" />
          <Scene key="Register" component={Register} title="Register" />
          <Scene key="Home" component={Home} title="Home" hideNavBar={true} />
          <Scene key="ChooseBank" component={ChooseBank} title="Pilih Bank" hideNavBar={false} initial={true} />
          {/* <Scene key="Welcome" component={Welcome} title="Welcome" />
          <Scene key="RepoList" component={RepoList} title="RepoList" />
          <Scene key="RepoInfo" component={RepoInfo} title="RepoInfo" /> */}
        </Scene>
      </Router>
    );
  }
}
