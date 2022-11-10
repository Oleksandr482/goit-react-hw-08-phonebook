const { createAsyncThunk } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('', credentials);
    return data;
  } catch (e) {}
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('', credentials);
    return data;
  } catch (e) {}
});

export const logOut = createAsyncThunk('auth/olgout', async () => {
  try {
    await axios.post('');
  } catch (e) {}
});
