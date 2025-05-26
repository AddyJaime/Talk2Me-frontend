
// configure store es una funcion que nos da redux, sirve para crear el store de redux, que es donde se va a guardar todo el estado global de la app, usuario logueado por ejemplo
import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./auth/authSlice"
import { conversationReducers } from "./conversations/conversationsSlice"


export const store = configureStore({
  // reducer es una propiedad que nos va a permitir decir a redux que parte del estado vamos a manejar , y dentro va los slices como auth y los slices son pequenas porciones de estado 
  reducer: {
    auth: authReducer,
    conversations: conversationReducers
  }

})

// osea verifica que hay dentro de store y dime el tipo de dato explicitamente y luego de eso mandame el type para guardarlo en roostate
// returntype dime que tipo de dato devuelve la funcion typeoff
//  store get stateNo la ejecutes (sin ()), solo dime: ¿qué tipo de función es esta?
// returntype se le conoce como utility type
// Y en TypeScript, cuando usamos estos tipos especiales, se escriben usando los signos de menor y mayor que (< >) para pasarle otros tipos como argumento, no valores.
// Tú me das una función, y yo te devuelvo el tipo de dato que esa función retorna."
// <> (menor y mayor)	Se usan para pasar tipos como argumentos, no valores
// esto son tipos de typscript no tiene que ver con nada de lo quje esdtmso haciendo 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
