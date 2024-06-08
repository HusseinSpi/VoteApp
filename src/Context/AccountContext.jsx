import { createContext, useState, useContext } from "react";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  const [isVote, setIsVote] = useState(false);

  return (
    <AccountContext.Provider
      value={{
        userName,
        setUserName,
        email,
        setEmail,
        password,
        setPassword,
        isLogIn,
        setIsLogIn,
        isVote,
        setIsVote,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  return useContext(AccountContext);
};
