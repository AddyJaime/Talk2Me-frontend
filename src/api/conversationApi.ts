import API from "./axios";
import { Conversation } from "@types";

export const createConversation = async (senderId: number, receiverId: number): Promise<Conversation | null> => {
  try {
    const response = await API.post(`/conversations`, { senderId, receiverId });
    return response.data
  } catch (error) {
    console.log({ createConversation: error })
    return null

  }
};


export const fetchConversations = async (id: number): Promise<Conversation[] | []> => {
  try {
    const response = await API.get(`/conversations/user/${id}`);
    return response.data;
  } catch (error) {
    console.log({ fetchConversations: error });
    return []
  }
};

export const fetchConversation = async (id: number): Promise<Conversation | null> => {
  try {
    const response = await API.get(`/conversations/${id}`);
    return response.data
  } catch (error) {
    console.log({ fetchConversation: error });
    return null
  }
}

