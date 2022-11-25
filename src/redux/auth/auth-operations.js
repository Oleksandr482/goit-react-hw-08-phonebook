import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (e) {}
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (e) {}
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (e) {}
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, ThunkAPI) => {
    const state = ThunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) return ThunkAPI.rejectWithValue();

    token.set(persistedToken);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (e) {}
  }
);
