import { combineReducers } from '@reduxjs/toolkit'
import SidebarMenuSlice from './SidebarMenuReducer'
import themeSlice from './themeSlice'
import authSlice from './authReducer'
import customizationSlice from './customizationReducer'

const rootReducer = combineReducers({
  theme: themeSlice,
  auth: authSlice,
  sidebarMenu: SidebarMenuSlice,
  customization: customizationSlice,
  // ...add other reducers here
})

export default rootReducer
