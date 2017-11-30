import React, { Component } from 'react';

export default ({ input, label, meta : {error, touched } }) => {

  console.log(meta);

  return (
    <div>
      <label>{label}</label>
      <input {... input} />
      { touched && error }
    </div>
  );

};
