import axios from "axios";
import UserType, {
  Login,
  NormalizedEditUser,
  UserInterface,
  UserRegistered,
} from "../models/types/userType";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const login = async (user: Login) => {
  try {
    const { data } = await axios.post<string>(`${apiUrl}/users/login`, user);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const signup = async (normalizedUser: object) => {
  try {
    const { data } = await axios.post<UserRegistered>(
      `${apiUrl}/users`,
      normalizedUser
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getuser = async (userId: string) => {
  try {
    const { data } = await axios.get<UserInterface>(
      `${apiUrl}/users/${userId}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const editUser = async (NormalizedEditUser: NormalizedEditUser) => {
  try {
    const userToServer = { ...NormalizedEditUser };
    const { data } = await axios.put<NormalizedEditUser>(
      `${apiUrl}/users/${NormalizedEditUser._id}`,
      userToServer
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
  }
};
