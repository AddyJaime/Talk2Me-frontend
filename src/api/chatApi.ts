import axios from "axios";

import API from "./axios";
import { Message } from "@/types";

export const sendMessagestoBackend = async (data: Message) => {
  try {
    const axiosResponse = await API.post('newMessage', {
      id: data.id,
      text: data.text,
      senderId: data.senderId,
      receiverId: data.receiverId,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      conversationId: data.conversationId
    })
    // aqui va la respuesta del backend
    const backendData = axiosResponse.data
    return backendData
  } catch (error) {
    console.log({ error: "Error sending messages" })
  }
}