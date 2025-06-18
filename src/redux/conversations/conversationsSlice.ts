import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Conversation } from "@types";

interface ConversationsState {
  conversations: Conversation[];
  conversation?: Conversation;
  currentConversationId?: number
}

const initialState: ConversationsState = {
  conversations: [],
  conversation: undefined,
  currentConversationId: undefined
};

const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    setCurrentConversationId: (state, action: PayloadAction<number | undefined>) => {
      state.currentConversationId = action.payload;
    },
    setConversations: (state, action: PayloadAction<Conversation[]>) => {
      state.conversations = action.payload;
    },
    setConversation: (state, action: PayloadAction<Conversation>) => {
      state.conversation = action.payload;
    },
  },
});

export const { setConversations, setConversation, setCurrentConversationId } = conversationsSlice.actions;
export const conversationReducers = conversationsSlice.reducer;
