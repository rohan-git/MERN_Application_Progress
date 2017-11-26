import React from 'react';

export const MY_CONST = 'MY_CONST';

export default function (state = {}, action) {
switch (action.type) {
    case FETCH_USER:
        console.log('FETCH_USER reducer action:', action);
        return action;
      break;
    default:
      return state;

  }
}
