import axios from 'axios';

import {FETCH_USER} from './action_types';

export const fetchUser = () => async (dispatch) => {

  const res = await axios.get('api/current_user');

    console.log('FETCH_USER', FETCH_USER);

    dispatch({ type: FETCH_USER, payload: res });

  });

}
