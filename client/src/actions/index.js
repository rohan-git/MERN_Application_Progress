import axios from 'axios';

import {FETCH_USER} from './action_types';

export const fetchUser = () =>

 function(dispatch){

  axios.get('api/current_user').then(res => {

    console.log('FETCH_USER', FETCH_USER);

    dispatch({ type: FETCH_USER, payload: res });

  });

}
