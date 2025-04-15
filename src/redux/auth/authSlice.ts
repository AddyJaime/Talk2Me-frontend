import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// son los datos minimos que decidi guardar del uusario
interface User {
  id: number,
  email: string,

}

// es una interfaz de TypeScript que describe cómo se ve tu estado
// Voy a definir cómo luce el estado de autenticación de mi aplicación
interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
}

// un slice es un pedazo de estado en este caso es un pedazo del estaod global de auth
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // login aqui es el nombre de la ccion que se va a disparar cuandp se llame dispatch 

    //state aqui es el estado actual de user 
    // esta accion osea login va a recibir datos a eso se le llama payload y esos datos tiene que tener la forma de User 
    login(state, action: PayloadAction<{ id: number, email: string }>) {
      state.user = action.payload
      state.isAuthenticated = true
    },
    logout(state) {
      state.user = null
      state.isAuthenticated = false
    }
  }


})


// aqui action s me retonra login y logout 
export const { login, logout } = authSlice.actions
export default authSlice.reducer