import React, { Component } from 'react';

import SurveyForm from './SurveyForm';

export default class SurveyNew extends React.Component{

  render(){
    return ( <div>
              <h5> .. New Survey .. </h5>
              <SurveyForm />
            </div>);
  }
}
