import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './CounterReducer'
import themeSlice from './themeSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeSlice,
  // ...add other reducers here
})

export default rootReducer
