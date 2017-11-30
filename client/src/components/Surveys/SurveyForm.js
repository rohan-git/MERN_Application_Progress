import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import SurveyField from './SurveyField';

const FIELDS = [{ label: 'Survey Title', name: 'title' },
                { label: 'Subject Line', name: 'subject' },
                { label: 'Email body', name: 'body' },
                { label: 'Recipient List', name: 'emails' }];

class SurveyForm extends React.Component {

  renderFields() {

     // console.log('--> renderFields');

    return ( _.map( FIELDS, ({ label, name }) => {
      return <Field key={label} component={SurveyField} type="text" label={label} name={name} />
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
            <i className="material-icons right done">Next</i>
          </button>
          <Link className="red btn-flat right white-text" to="/surveys">
            <i className="material-icons right done">Cancel</i>
          </Link>
        </form>
      </div>

    );

  }

}

function validate(values, meta){

  const errors = {};

  if(!values.title && meta.touched){
    errors.title = 'You must provide a title!';
  }

  return errors;
}

export default reduxForm({
  form: 'surveyForm',
  validate
})(SurveyForm);
