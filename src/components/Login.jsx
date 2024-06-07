import { Input } from "./Input";
import "./Login.css";
import email_icon from "../assets/email.png";
import person_icon from "../assets/person.png";
import password_icon from "../assets/password.png";
import { useState } from "react";
export const Login = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" && <Input img={person_icon} type="text" />}
        <Input img={email_icon} type="email" />
        <Input img={password_icon} type="password" />
      </div>
      {action === "Login" && (
        <div className="forget-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Log In
        </div>
      </div>
    </div>
  );
};
