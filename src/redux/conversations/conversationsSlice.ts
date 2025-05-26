import { fetchConversations } from "@api/conversationApi";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [],
  loading: false
}

const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {},
  extraReducers(builder) {

    builder.addCase(fetchConversations.fulfilled, (state, action: any) => {
      console.log(action);

      state.conversations = action.payload
      state.loading = false

    })
    builder.addCase(fetchConversations.rejected, (state, action: any) => {
      state.conversations = []
      state.loading = false
    })
    builder.addCase(fetchConversations.pending, (state, action: any) => {
      state.loading = true
    })
  },
})



export const conversationReducers = conversationsSlice.reducer
export const conversationActions = conversationsSlice.actions