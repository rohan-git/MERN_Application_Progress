import React, { Component } from 'react';
import { connect } from 'react-redux';

//import { authReducer } from './authReducer'

export default class Header extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (<div> Header </div> );
  }
}

// function mapStateToProps(){
//   auth: authReducer
// }

// export default connect(mapStateToProps)(Header);
