

import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./auth/authSlice"
import { conversationReducers } from "./conversations/conversationsSlice"
import { userReducers } from './users/usersSlice';


export const store = configureStore({

  reducer: {
    auth: authReducer,
    conversations: conversationReducers,
    users: userReducers
  }

})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
