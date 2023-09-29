import { createAsyncThunk } from "@reduxjs/toolkit"
import ApiInstance from "src/Services/Axios";

export const loginRequest: any = createAsyncThunk('auth/loginUser',
    async (payload: any, { rejectWithValue }) => {
        console.log(payload)
        try {
            const response = await ApiInstance.post('https://dummyjson.com/auth/login', {
                username: payload.email,
                password: payload.password,
            })
            localStorage.setItem("token", response.data.token);
            return response;
        } catch (e: any) {
            return rejectWithValue(e.response)
        }
    });