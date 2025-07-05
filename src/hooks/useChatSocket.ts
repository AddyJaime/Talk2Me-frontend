import { connectSocket, disconnectedSocket, listenForMessages } from "@/socket/socket"
import { Message } from "@/types"
import { useEffect } from "react"

// API
import { sendMessagestoBackend } from '@/api/chatApi';

// Socket.io
import { emitMessage } from 'socket/socket';

import { addMessage } from "@/redux/conversations/conversationsSlice"
import { useDispatch } from "react-redux"
import { removeMessageListener } from "@/socket/socket"


import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";



const useChatSocket = () => {
  const dispatch = useDispatch()
  const [text, setMessage] = useState('');
  const { conversation } = useSelector(
    (state: RootState) => state.conversations,
  );

  const userId = 1;

  const sendMessage = async () => {
    if (!text.trim() || !conversation) return;

    const messageToSend = {
      text: text,
      senderId: userId,
      receiverId: conversation?.receiverId ?? 0,
      conversationId: conversation.id ?? 0,
      createdAt: Date(),
      updatedAt: Date(),
    };

    try {
      const backendData = await sendMessagestoBackend(messageToSend);
      emitMessage(backendData);
      setMessage('');
    } catch (error) {
      console.log({ Error: 'Error sending Message', error });
    }
  };

  useEffect(() => {
    connectSocket()
    listenForMessages((message: Message) => {
      console.log('Message receive', message);
      dispatch(addMessage(message));
    })
    // esta funcion se ejecuta una vez que el componente se desmonta
    return () => {
      removeMessageListener()
      disconnectedSocket()

    }

  }, [])
  return sendMessage
}

export default useChatSocket