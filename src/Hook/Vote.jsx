import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useVote = (initialCount = 0) => {
  const [voteCount, setVoteCount] = useState(initialCount);

  const addVote = () => {
    setVoteCount(voteCount + 1);
    toast.success("Vote added successfully");
  };

  return { voteCount, addVote };
};
