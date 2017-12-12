import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Dasboard extends React.Component{

  render (){

    return (

      <div>
        Dashboard ...
        <div className="fixed-action-btn">
          <Link className="btn-floating btn-large red" to={"/surveys/new"}>
            <i className="material-icons dp48">Add</i>
          </Link>
        </div>
      </div>

    );
  }
}
