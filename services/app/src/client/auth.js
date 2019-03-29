import axios from 'axios';
import qs from 'querystring';

export const createUser = async (username, password) => {
  const { data } = await axios.post('/signup', qs.stringify({
    username,
    password,
  }));
  return data;
};

export const login = async (username, password) => {
  const params = qs.stringify({ username, password });
  const { data } = await axios.post('/login', params);
  return data;
};

export const logout = async () => {
  const { data } = await axios.post('/logout');
  return data;
};

export const checkLogin = async () => {
  const { data } = await axios.get('/user');
  return data;
};
