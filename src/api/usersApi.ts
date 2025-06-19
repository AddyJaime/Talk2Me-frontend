import API from "./axios";
import { User } from "@types";

export const fetchUsers = async (): Promise<User[] | undefined> => {
  try {
    const response = await API.get("/users/search")
    return response.data
  } catch (error) {
    console.log("Error getting users from back-end", error)
    return undefined
  }
}


