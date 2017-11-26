import axios from 'axios';

import { FETCH_USER } from './types';

const fetchUser = () => {

  return function(dispatch){

    axios.get('api/current_user');
  }
}
