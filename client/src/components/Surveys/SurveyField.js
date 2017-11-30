import React, { Component } from 'react';

export default ({ input, label, meta : {error, touched } }) => {

  //console.log(touched);

  return (
    <div>
      <label>{label} -- {touched} -- {error}</label>
        <input {... input} style = {{"marginBottom": "5px"}} />
        { touched && error }
    </div>
  );

};
