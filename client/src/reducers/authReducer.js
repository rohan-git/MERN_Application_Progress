import React from 'react';
import {FETCH_USER} from '../actions/action_types'

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
