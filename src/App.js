
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
// import Welcome from './components/welcome.js';
// import RepoList from './components/repolist.js';
// import RepoInfo from './components/repoinfo.js';
import Auth from './components/auth.js';
import Login from './components/login.js';
import Register from './components/register.js';
import RegisterSuccess from './components/registerSuccess';
import Home from './components/home.js';
import ChooseBank from './components/choose_bank';
import Queue from './components/queue';
import QueueSuccess from './components/queueSuccess';

export default class App extends Component{
  render(){
    return(
      <Router showNavigationBar={false}> 
        <Scene key="root">
          <Scene key="Auth" component={Auth} hideNavBar={true} initial={false}/>
          <Scene key="Login" component={Login} title="Login" />
          <Scene key="Register" component={Register} title="Register" initial={false}/>
          <Scene key="RegisterSuccess" component={RegisterSuccess} initial={false} hideNavBar={true}/>
          <Scene key="Home" component={Home} title="Home" hideNavBar={true} initial={true}  />
          <Scene key="ChooseBank" component={ChooseBank} title="Pilih Bank" hideNavBar={false} initial={false} />
          <Scene key="Queue" component={Queue} title="Buat Antrian" hideNavBar={false} initial={false} />
          <Scene key="QueueSuccess" component={QueueSuccess} hideNavBar={true} initial={false} />
          {/* <Scene key="Welcome" component={Welcome} title="Welcome" />
          <Scene key="RepoList" component={RepoList} title="RepoList" />
          <Scene key="RepoInfo" component={RepoInfo} title="RepoInfo" /> */}
        </Scene>
      </Router>
    );
  }
}
