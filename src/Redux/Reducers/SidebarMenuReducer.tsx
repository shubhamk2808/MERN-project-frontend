import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface MenuState {
  isMenuOpen: Boolean;
}

// Define the initial state using that type
const initialState: MenuState = {
  isMenuOpen: true,
}

export const SidebarMenuSlice = createSlice({
  name: 'sidebarMenu',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.isMenuOpen = true
    },
  },
})

export const { increment } = SidebarMenuSlice.actions
export default SidebarMenuSlice.reducer
