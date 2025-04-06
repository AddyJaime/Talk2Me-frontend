
// esta funcion que nos va a permitir  crear store que va a guardar el estado global de la app
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
  // reducer es una propiedad que nos va a permitir decir a redux que parte del estado vamos a manejar 
  reducer: {

  }

})

// osea verifica que hay dentro de store y dime el tipo de dato explicitamente y luego de eso mandame el type para guardarlo en roostate
// returntype dime que tipo de dato devuelve la funcion typeoff
//  store get stateNo la ejecutes (sin ()), solo dime: ¿qué tipo de función es esta?
// returntype se le conoce como utility type
// Y en TypeScript, cuando usamos estos tipos especiales, se escriben usando los signos de menor y mayor que (< >) para pasarle otros tipos como argumento, no valores.
// Tú me das una función, y yo te devuelvo el tipo de dato que esa función retorna."
// <> (menor y mayor)	Se usan para pasar tipos como argumentos, no valores
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
