import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@types";

interface UsersState {
  users: User[]
}

const initialState: UsersState = {
  users: [],
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    }
  }
})

export const { setUsers } = usersSlice.actions
export const userReducers = usersSlice.reducer