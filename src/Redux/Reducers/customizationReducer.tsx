import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchUserById } from '../Actions/UserAction';

interface CustomizeState {
    toggleDrawer: boolean | undefined;
}

export const initialState: CustomizeState = {
    toggleDrawer: false
};

export const customizationSlice = createSlice({
    name: 'customization',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        _toggleDrawer: (state, { payload }: PayloadAction<boolean>) => {
            state.toggleDrawer = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.pending, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
        })
    },
});
export const { _toggleDrawer } = customizationSlice.actions;
export default customizationSlice.reducer;
