import { Message } from "react-hook-form";
import { io } from "socket.io-client";

const SOCKET_URL = 'http://10.0.0.50:3000'

export const socket = io(SOCKET_URL)

export const connectSocket = () => {
  if (!socket.connected) {
    socket.connect()
    console.log('Socket connected')
  }
}


export const disconnectedSocket = () => {
  if (socket.connected) {
    socket.disconnect()
    console.log("Socket disconnected")
  }

}

export const emitMessage = (message: Message) => {
  if (socket.connected) {
    socket.emit("New_Message", message)
    console.log("Messange sent via socket:", message)
  }
}

export const listenForMessages = (callback: (message: any) => void) => {
  socket.on('receive_message', (message) => {
    console.log('message sent:', message);
    callback(message);
  });
};

export const removeMessageListener = () => {
  socket.off('receive_message');
};
