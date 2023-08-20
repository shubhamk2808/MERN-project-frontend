import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginUser: any = createAsyncThunk(
  'auth/loginUser',
  async (payload, { rejectWithValue }) => {
    try {
    } catch (e: any) {
      return rejectWithValue(e.response)
    }
  }
)
