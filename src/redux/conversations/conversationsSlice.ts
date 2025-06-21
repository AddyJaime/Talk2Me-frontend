import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Conversation } from "@types";

interface ConversationsState {
  conversations: Conversation[];
  conversation?: Conversation | null;

}

const initialState: ConversationsState = {
  conversations: [],
  conversation: null,

};

const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    setConversations: (state, action: PayloadAction<Conversation[]>) => {
      state.conversations = action.payload;
    },
    setConversation: (state, action: PayloadAction<Conversation>) => {
      state.conversation = action.payload;
    },
  },
});

export const { setConversations, setConversation } = conversationsSlice.actions;
export const conversationReducers = conversationsSlice.reducer;
