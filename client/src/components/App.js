import '../App.css';
import MaterializeCSS from 'materialize-css/dist/css/materialize.min.css';

import React, { Component } from 'react';
import logo from '../logo.svg';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2> Dashboard </h2>;
const SurveyNew = () => <h2> SurveyNew </h2>;
const Landing = () => <h2> Landing </h2>;


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <BrowserRouter>
          <div>
            <Route exact path="/surveys" component= {Dashboard} />
            <Route exact path="/surveys/new" component= {SurveyNew} />
            <Route exact path="/" component= {Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="App-title">Welcome to React Modified</h1>
//   </header>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//     <br/>
//     <a href="/auth/google"> Login using google </a>
//   </p>
// </div>

export default App;
