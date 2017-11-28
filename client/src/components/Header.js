import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

class Header extends Component {

  constructor(props){

    super(props);
  }

  renderHeader(){

    switch (this.props.auth) {

      case null:
        return <li>Logging in ...</li>;;

      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;

      default:
        return [
                 <li key="1"><Payments /></li> ,
                 <li key="2">Credits: {this.props.auth.credits}</li> ,
                 <li key="3"><a href="/api/logout">Logout</a></li>
               ];

    }
  }

  render(){

    return ( <nav>
              <div className="nav-wrapper">
                <Link className="left brand-logo" to={this.props.auth ? '/surveys': '/' }> Emaily! </Link>
                <ul className="right">
                  {this.renderHeader()}
                </ul>
              </div>
             </nav> );
  }
}

function mapStateToProps(state){

  console.log('state.auth', state.auth);
  return {auth: state.auth};
}

export default connect(mapStateToProps)(Header);
