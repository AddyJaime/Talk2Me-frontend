import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Conversation } from "@types";

interface ConversationsState {
  conversations: Conversation[];
}

const initialState: ConversationsState = {
  conversations: [],
};

const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    setConversations(state, action: PayloadAction<Conversation[]>) {
      state.conversations = action.payload;
    },
  },
});

export const { setConversations } = conversationsSlice.actions;
export const conversationReducers = conversationsSlice.reducer;
