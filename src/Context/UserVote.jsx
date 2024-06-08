import { createContext, useState, useContext } from "react";

const UserVoteContext = createContext();

export const UserVoteProvider = ({ children }) => {
  const [userVote, setUserVote] = useState([]);

  const addUserVote = (email) => {
    setUserVote((prevVotes) => [...prevVotes, email]);
    localStorage.setItem("votingUser", JSON.stringify([...userVote, email]));
  };

  const removeUserVote = (email) => {
    const updatedVotes = userVote.filter((vote) => vote !== email);
    setUserVote(updatedVotes);
    localStorage.setItem("votingUser", JSON.stringify(updatedVotes));
  };

  return (
    <UserVoteContext.Provider
      value={{ userVote, setUserVote, addUserVote, removeUserVote }}
    >
      {children}
    </UserVoteContext.Provider>
  );
};

export const useAppVote = () => {
  return useContext(UserVoteContext);
};
