import { FetchUsers } from "./FetchUsers";

export const getUserName = async (email) => {
  try {
    const users = await FetchUsers();
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.Email === email) {
        return user.Name;
      }
    }
    return;
  } catch (error) {
    console.error("Error:", error);
    return;
  }
};
