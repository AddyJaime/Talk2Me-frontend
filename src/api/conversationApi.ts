import API from "./axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchConversations = createAsyncThunk("fetchConversations", async (): Promise<any> => {
  try {
    const { data } = await API.get("/conversations")
    // console.log({ data });

    return data

  } catch (error) {
    console.log({ fetchConversations: error });
    // throw error

  }
})
