import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  constructor(props){
    super(props);
  }


  renderContent(){

    switch (this.props.auth) {

      case null:
          return 'Still logging in...';
        break;
      case false:
          return 'Sign in with Google';
        break;

      default:
        return 'Sign out'; //this.props.auth.data.user.id;

    }

  }

  render(){
    console.log('in header', this.props);
    return (<nav>
              <div className="nav-wrapper">
                <a className="left brand-logo"> Header </a>
                <ul className="right">
                  <li>
                    <a>{this.renderContent()}</a>
                  </li>
                </ul>
              </div>
            </nav> );
  }
}

function mapStateToProps(state){
  auth: state.auth;
}

export default connect(mapStateToProps)(Header);
