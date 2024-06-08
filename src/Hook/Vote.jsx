import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import characters from "../data/charactersData";
import { useAccount } from "../Context/AccountContext";
import { useAppVote } from "../Context/UserVote.jsx";

export const useVote = (initialCount = 0, characterId) => {
  const { userVote, setUserVote, addUserVote, removeUserVote } = useAppVote();
  const { setIsLogIn, isLogIn, email, isVote, setIsVote } = useAccount();
  const [voteCount, setVoteCount] = useState(initialCount);

  const saveCharactersToLocalStorage = (updatedCharacters) => {
    localStorage.setItem("characters", JSON.stringify(updatedCharacters));
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogIn");
    if (loggedIn === "true") {
      setIsLogIn(true);
    }
    const userV = JSON.parse(localStorage.getItem("votingUser")) || [];
    setUserVote(userV);
  }, []);

  const addVote = () => {
    if (!isLogIn) {
      toast.error("You must be logged in to vote");
      return;
    }
    if (userVote.includes(email)) {
      toast.error("You have already voted");
      return;
    }
    const characterIndex = characters.findIndex(
      (char) => char.id === characterId
    );
    if (characterIndex !== -1) {
      characters[characterIndex].vote += 1;
      setVoteCount(characters[characterIndex].vote);
      saveCharactersToLocalStorage(characters);
      addUserVote(email);
      setIsVote(email);
      toast.success(`${characters[characterIndex].name} received a vote!`);
    } else {
      toast.error("Character not found");
    }
  };

  const removeVote = () => {
    const characterIndex = characters.findIndex(
      (char) => char.id === characterId
    );
    if (characterIndex !== -1 && characters[characterIndex].vote > 0) {
      characters[characterIndex].vote -= 1;
      setVoteCount(characters[characterIndex].vote);
      saveCharactersToLocalStorage(characters);
      removeUserVote(email);
      setIsVote(false);
      toast.success(`${characters[characterIndex].name} vote removed!`);
    } else {
      toast.error("Character not found or no votes to remove");
    }
  };

  return { voteCount, addVote, removeVote };
};
