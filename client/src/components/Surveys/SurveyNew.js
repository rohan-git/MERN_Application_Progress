import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';

class SurveyNew extends React.Component {

  state = { showFormReview: false };
  // constructor(props){
  //   super(props);

  //   this.state = { new: true};
  // }


  renderContent(){

    if(this.state.showFormReview){

      return (<SurveyReview
                onCancel = {() => this.setState({showFormReview: false})}
                />);
    }

    return (<SurveyForm
                onSurveySubmit= {() => this.setState({showFormReview: true})}
                />) ;
  }

  render(){
    return ( <div>
                <h5> .. New Survey .. </h5>
                {this.renderContent()}
             </div> );
  }
}


export default reduxForm({
  form: 'surveyForm',
})(SurveyNew);
