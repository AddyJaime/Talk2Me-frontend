import API from "./axios";
import { Conversation } from "@types";

export const fetchConversations = async (): Promise<Conversation[] | []> => {
  try {
    const response = await API.get("/conversations");
    console.log(response)
    return response.data;
  } catch (error) {
    console.log({ fetchConversations: error });
    return []
  }
};

export const fetchConversation = async (id: number): Promise<Conversation> => {
  try {
    const { data } = await API.get(`/conversations/${id}`);
    return data
  } catch (error) {
    console.log({ fetchConversation: error });
    throw error
  }
}
