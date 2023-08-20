import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './CounterReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  // ...add other reducers here
})

export default rootReducer
