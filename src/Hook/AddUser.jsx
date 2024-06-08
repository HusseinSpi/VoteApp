import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddUser = async (name, email, password) => {
  try {
    const response = await fetch(
      "https://666461e9932baf9032aae117.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Password: password,
        }),
      }
    );
    if (response.ok) {
      toast.success("User added successfully");
    } else {
      toast.error("Couldn't add user");
    }
  } catch (error) {
    toast.error("Couldn't add user");
  }
};
