import React, { Component } from 'react';

export default ({ input, label, meta }) => {

  console.log(meta);

  return (
    <div>
      <label>{label}</label>
      <input {... input} />
      { meta.error }
    </div>
  );

};
