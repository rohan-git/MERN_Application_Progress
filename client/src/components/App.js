import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2> Header </h2>;
const Dashboard = () => <h2> Dashboard </h2>;
const SurveyNew = () => <h2> SurveyNew </h2>;
const Landing = () => <h2> Landing </h2>;


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/dashboard" component= {Dashboard} />
            <Route path="/surveys" component= {SurveyNew} />
            <Route path="/" exact={true} component= {Landing} />
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
