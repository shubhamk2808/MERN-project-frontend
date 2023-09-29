import { createAsyncThunk } from '@reduxjs/toolkit'
import ApiInstance from 'src/Services/Axios';

export const getProducts = createAsyncThunk('user/products',
  async (payload, { rejectWithValue }) => {
    console.log({ payload }, "check products")
    try {
      const response = await ApiInstance.get('/products');
      console.log({ response })
      return response
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
)

export const getUsers = async () => {
  console.log("get users");
  try {
    const response = await ApiInstance.get('/users');
    const token = response.data.token; // Assuming your server returns a token
    localStorage.setItem('token', token);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  // if you type your function argument here
  async (userId: number) => {
    const response = await fetch(`https://reqres.in/api/users/${userId}`)
    return (await response.json())
  }
)