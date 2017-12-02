import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import SurveyField from './SurveyField';
import validateEmails from '../utils/validateEmails';

const FIELDS = [{ label: 'Survey Title', name: 'title' },
                { label: 'Subject Line', name: 'subject' },
                { label: 'Email body', name: 'body' },
                { label: 'Recipient List', name: 'emails' }];

class SurveyForm extends React.Component {

  renderFields() {

     // console.log('--> renderFields');

    return ( _.map( FIELDS, ({ label, name }) => {

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
        <form onSubmit={ this.props.handleSubmit(values => console.log(values)) }>
          { this.renderFields() }
          <button className="teal btn-flat right white-text" type="submit">
            <i className="material-icons right">done</i>Done
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

  error.emails = validateEmails(values.emails || '');

  _.each(FIELDS, ({name}) => {

    if(!values[name])
      error[name] = 'You must provide a value';

  });

  return error;
}

export default reduxForm({
  form: 'surveyForm',
  validate
})(SurveyForm);
