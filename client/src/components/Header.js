import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  constructor(props){
    super(props);
  }

  renderHeader(){

    switch (this.props.auth) {

      case null:
        return;

      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;

      default:
        return <li><a>Logout</a></li>;

    }
  }

  render(){

    return ( <nav>
              <div className="nav-wrapper">
                <a className="left brand-logo"> Header </a>
                <ul className="right">
                  {this.renderHeader()}
                </ul>
              </div>
             </nav> );
  }
}

function mapStateToProps(state){
  auth: state.auth
}

export default connect(mapStateToProps)(Header);
