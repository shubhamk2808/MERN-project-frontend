import { createAsyncThunk } from '@reduxjs/toolkit'
import ApiInstance from 'src/Services/Axios';

export const loginUser: any = createAsyncThunk(
  'auth/loginUser',
  async (payload, { rejectWithValue }) => {
    try {
    } catch (e: any) {
      return rejectWithValue(e.response)
    }
  }
)

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
