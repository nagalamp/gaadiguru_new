import { getToken } from "../utils/storage";

export const isAuthenticated = async () => {
  const token = await getToken();

  return !!token;
};