import {combineReducers} from '@reduxjs/toolkit'
import todoReducer from './todo/todoSlice';

const rootReducer = combineReducers({
  todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
