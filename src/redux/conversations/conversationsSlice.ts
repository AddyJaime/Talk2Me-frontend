import { fetchConversations } from "@api/conversationApi";
import { createSlice } from "@reduxjs/toolkit";
import { Conversation } from '@types';



interface ConversationsState {
  conversations: Conversation[];
  loading: boolean;
}

const initialState: ConversationsState = {
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
      console.log(action.payload)

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