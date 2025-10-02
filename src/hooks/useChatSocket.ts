// other components
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


const useChatSocket = () => {
  const dispatch = useDispatch()

  const sendMessage = async (messageToSend: Message) => {

    try {
      const backendData = await sendMessagestoBackend(messageToSend);
      emitMessage(backendData);

      return backendData

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

    return () => {
      removeMessageListener()
      disconnectedSocket()

    }

  }, [])
  return sendMessage
}

export default useChatSocket