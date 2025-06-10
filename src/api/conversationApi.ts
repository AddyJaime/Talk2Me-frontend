import API from "./axios";
import { Conversation } from "@types";

export const fetchConversations = async (): Promise<Conversation[] | undefined> => {
  try {
    const response = await API.get("/conversations");
    console.log(response)
    return response.data;
  } catch (error) {
    console.log({ fetchConversations: error });
    return []
  }
};
