import axios from "axios";
import { BASE_URL } from ".";

export interface UserInfo {
  id: string;
  pw: string;
}

export interface Tokens {
  access_token: string;
  refresh_token: string;
}

export async function getLogin(userInfo: UserInfo): Promise<Tokens | null> {
  try {
    const response = await axios.get(`${BASE_URL}/user/login`, {
      params: userInfo,
    });

    if (response.status === 200 && response.data) {
      console.log("Login Success:", response.data.data);
      sessionStorage.setItem("access_token", response.data.data.access_token);
      sessionStorage.setItem("refresh_token", response.data.data.refresh_token);
      return response.data;
    }
    return null;
  } catch (error: unknown) {
    console.error("Login Error:", error);
    return null;
  }
}
