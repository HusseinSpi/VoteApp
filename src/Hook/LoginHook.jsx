import { FetchUsers } from "./FetchUsers";

export const LoginHook = async (email, password) => {
  try {
    const users = await FetchUsers();
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.Email === email && user.Password === password) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
