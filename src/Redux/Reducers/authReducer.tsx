import { createSlice } from '@reduxjs/toolkit';
import { loginRequest } from '../Actions/AuthAction';
let token = localStorage.getItem("token");

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        isLogin: false,
        userInfo: null,
        userToken: null,
        error: null,
        success: false,
    },
    reducers: {
        // openDrawer(state) {
        //     state.isLogin = !state.isLogin
        // }
        logout: (state) => {
            localStorage.removeItem('token') // deletes token from storage
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
            state.isLogin = false
        },
    },
    extraReducers: {
        [loginRequest.pending]: (state, { payload }) => {
            state.loading = true;
            state.error = null
        },
        [loginRequest.fulfilled]: (state, { payload }) => {
            state.isLogin = true;
            state.loading = false;
            state.success = true;
            state.userInfo = payload;
            state.userToken = payload.token
        },
        [loginRequest.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload
        },
        // [logoutRequest]: state => ({
        //     ...state,
        //     loading: true,
        //     logout: false
        // }),
        // [logoutSuccess]: (state, { payload }) => ({
        //     ...state,
        //     loggedIn: false,
        //     loading: false,
        //     logout: true
        // }),
        // [logoutFailure]: (state, { payload }) => ({
        //     ...state,
        //     loading: false,
        //     logout: false
        // }),

        // [loninWithGooglePop.pending]: (state: any, { payload }) => {
        //     state.loading = true;
        // },
        // [loninWithGooglePop.fulfilled]: (state: any, { payload }) => {
        //     state.login = true;
        //     state.user = payload;
        // },
        // [loninWithGooglePop.rejected]: (state: any, { payload }) => {
        //     state.loading = false
        // },
        // [logoutGoogle.pending]: (state: any, { payload }) => {
        //     state.loading = true;
        // },
        // [logoutGoogle.fulfilled]: (state: any, { payload }) => {
        //     state.login = false;
        //     state.loading = false;
        // },
        // [logoutGoogle.rejected]: (state: any, { payload }) => {
        //     state.loading = false
        // },
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;