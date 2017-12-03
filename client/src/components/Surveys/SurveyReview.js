import React from 'react';
import { connect } from 'react-redux';

import formFields from './formFields';

const SurveyReview = ({onCancel, formValues}) => {


  function displayFormFields(){

    const x = formFields.map(field => {
      return (
              <div key={field.name}>
                <label key={field.label}>{field.label}</label>
                <div>
                  {formValues[field.name]}
                </div>
              </div>
            );
    })

    return x;
  }

  return (<div>
            <h5> Please confirm your entries ...  </h5>
            <div>
              {displayFormFields()}
            </div>
            <button
              className="yellow darken-3 btn-flat"
              onClick={onCancel} >
                Back
            </button>
            <button
              className="red darken-3 btn-flat right"
              onClick={submitSurvey} >
                Send Survey! <i className="material-icons right">email</i>
            </button>
          </div>);
}



function mapStateToProps(state){

  console.log('--> state', state);
  return {formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps)(SurveyReview);
