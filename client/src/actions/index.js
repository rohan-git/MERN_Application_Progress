import axios from 'axios';

import {FETCH_USER} from './action_types';

export const fetchUser = () => async (dispatch) => {

  const res = await axios.get('/api/current_user');

  console.log('FETCH_USER', FETCH_USER);
  console.log('res.data', res);

  dispatch({ type: FETCH_USER, payload: res.data });

}

export const handleToken = (token) => async (dispatch) => {

  const res = await axios.post('/api/stripe', token);

  console.log('handleToken token: ', token);

  dispatch({ type: FETCH_USER, payload: res.data });

}
