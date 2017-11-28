import React from 'react';
import { FETCH_USER } from '../actions/action_types'

export default function (state = null, action) {

  console.log('FETCH_USER reducer action:', action);

  switch (action.type) {

    case FETCH_USER:
        return action.payload || false;
      break;

    default:
      return state;

    }
}
