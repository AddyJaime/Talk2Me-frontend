import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Conversation, Message } from "@types";

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
    setConversation: (state, action: PayloadAction<Conversation | null>) => {
      state.conversation = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      if (state.conversation) {
        state.conversation?.messages?.push(action.payload)
      }
    }
  },
});

export const { setConversations, setConversation, addMessage } = conversationsSlice.actions;
export const conversationReducers = conversationsSlice.reducer;
