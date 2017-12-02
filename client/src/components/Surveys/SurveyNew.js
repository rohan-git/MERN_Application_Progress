import React, { Component } from 'react';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

export default class SurveyNew extends React.Component {

  state = {formReview: false};

  render(){
    return ( <div>
              <h5> .. New Survey .. </h5>
              <SurveyForm />
            </div>);
  }
}
