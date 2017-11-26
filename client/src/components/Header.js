import React, { Component } from 'react';
import { connect } from 'react-redux';

//import { authReducer } from './authReducer'

export default class Header extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (<nav>
              <div className="nav-wrapper">
                <a className="left brand-logo"> Header </a>
                <ul className="right">
                  <li>
                    <a>Login With Google</a>
                  </li>
                </ul>
              </div>
            </nav> );
  }
}

// function mapStateToProps(){
//   auth: authReducer
// }

// export default connect(mapStateToProps)(Header);
