import React from 'react';

export const MY_CONST = 'MY_CONST';

export default function (state = {}, action) {
switch (action.type) {
    case MY_CONST:

      break;
    default:
      return state;

  }
}
