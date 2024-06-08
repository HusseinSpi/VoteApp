import { LoginHook } from "../Hook/LoginHook";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Check = async (email, password) => {
  try {
    console.log(email, password);
    const result = await LoginHook(email, password);
    if (result) {
      toast.success("Login successfully");
      return true;
    } else {
      toast.error("Invalid email or password");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
