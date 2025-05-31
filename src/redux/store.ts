
// configure store es una funcion que nos da redux, sirve para crear el store de redux, que es donde se va a guardar todo el estado global de la app, usuario logueado por ejemplo
import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./auth/authSlice"
import { conversationReducers } from "./conversations/conversationsSlice"


export const store = configureStore({

  reducer: {
    auth: authReducer,
    conversations: conversationReducers
  }

})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
