import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SurveyField from './SurveyField';
import SurveyReview from './SurveyReview';
import formFields from './formFields';

import validateEmails from '../utils/validateEmails';

class SurveyForm extends React.Component {

  renderFields() {

     // console.log('--> renderFields');

    return ( _.map( formFields, ({ label, name }) => {

      return <Field key={label}
                    component={SurveyField}
                    type="text"
                    label={label}
                    name={name} />
      })
    );

  }

  render(){

    return (

      <div>
        <h3>Form!</h3>
        <form onSubmit={ this.props.handleSubmit( this.props.onSurveySubmit ) }>
          { this.renderFields() }
          <button className="teal btn-flat right white-text" type="submit">
            <i className="material-icons right">done</i>Next
          </button>
          <Link className="red btn-flat right white-text" to="/surveys">
            <i className="material-icons right">cancel</i>Cancel
          </Link>
        </form>
      </div>

    );

  }

}

function validate(values, meta){

  console.log('--> values', values);
  console.log('--> meta', meta);

  const error = {};

  //  error.emails = validateEmails(values.emails || '');
  error.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({name}) => {

    if(!values[name])
      error[name] = 'You must provide a value';

  });

  return error;
}

export default reduxForm({
  form: 'surveyForm',
  validate,
  destroyOnUnmount: false
})(SurveyForm);
