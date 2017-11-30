import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import SurveyField from './SurveyField';


class SurveyForm extends React.Component{


  renderFields(){

    return (<div>
              <Field type="text" name="surveyTitle" component={SurveyField} />
            </div>);

      // <Field type="text" name="surveyTitle" component="input" />
      // <Field type="text" name="surveyTitle" component="input" />
      // <Field type="text" name="surveyTitle" component="input" />
      //
      // <button type="submit"> Submit! </button>
  }


  render(){
    return (
      <div>
        <h3>Form ! </h3>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
