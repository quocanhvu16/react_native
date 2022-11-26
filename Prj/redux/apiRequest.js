import axios from 'axios';
import {loginStart} from './authSlice';

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
};
