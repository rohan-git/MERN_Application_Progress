import '../App.css';
import 'materialize-css/dist/css/materialize.min.css';

import React, { Component } from 'react';
import logo from '../logo.svg';

import { connect } from 'react-redux';

import { BrowserRouter, Route } from 'react-router-dom';

import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './Surveys/SurveyNew';

class App extends Component {

  componentDidMount(){

    this.props.fetchUser();
  }

  render() {

    return (
        <div className="component">
              <BrowserRouter>
                <div className="container">
                  <Header />
                  <Route exact path="/surveys" component={Dashboard} />
                  <Route exact path="/surveys/new" component={SurveyNew} />
                  <Route exact path="/" component={Landing} />
                  <Dashboard />
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

//export default App;
export default connect(null, actions)(App);
