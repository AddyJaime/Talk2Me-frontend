import API from "./axios";
import { User } from "@types";

export const fetchUsers = async (value: string, userId: number): Promise<User[]> => {
  try {
    const response = await API.get(`/users/search?value=${value}&userId=${userId}`)
    return response.data
  } catch (error) {
    console.log("Error getting users from back-end", error)
    return []
  }
}


