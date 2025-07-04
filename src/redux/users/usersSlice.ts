import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@types";


interface UsersState {
  users: User[],
  user: User
}

const initialState: UsersState = {
  users: [],
  user: {
    id: null,
    fullName: ""
  }
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }

  }
})

export const { setUsers, setUser } = usersSlice.actions
export const userReducers = usersSlice.reducer