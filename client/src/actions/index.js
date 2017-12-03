import axios from 'axios';

import { FETCH_USER } from './action_types';

export const fetchUser = () => async (dispatch) => {

  const res = await axios.get('/api/current_user');

  console.log('FETCH_USER', FETCH_USER);
  console.log('res.data', res);

  dispatch({ type: FETCH_USER, payload: res.data });

}

export const handleToken = (token) => async (dispatch) => {

  console.log('handleToken token: ', token);

  const res = await axios.post('/api/stripe', token);

  console.log('--> handleToken token completed ');

  dispatch({ type: FETCH_USER, payload: res.data });

}

export const submitSurvey = (values) => async (dispatch) => {

  console.log('handleToken token: ', values);

  // const res = await axios.post('/api/stripe', token);

  //console.log('--> handleToken token completed ');

  dispatch({ type: FETCH_USER, payload: values });

}
