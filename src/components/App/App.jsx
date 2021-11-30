import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar' 

const App=()=>{
  return (<div>
    <HashRouter>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </HashRouter>
  </div>);
}

export default App;