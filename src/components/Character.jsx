import "./Character.css";
import { useVote } from "../Hook/Vote";
import { useAccount } from "../Context/AccountContext";

export const Character = ({ id, urlImg, name, initialVote, bgColor }) => {
  const { isVote, setIsVote, email } = useAccount();
  const { voteCount, addVote, removeVote } = useVote(initialVote, id);

  const handleVote = () => {
    addVote(id);
  };

  const handleCancelVote = () => {
    removeVote(id);
  };

  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <img src={urlImg} alt={name} />
      <h2>{name}</h2>
      <p>{voteCount}</p>
      {isVote ? (
        <button onClick={handleCancelVote}>Cancel Vote</button>
      ) : (
        <button onClick={handleVote}>Vote</button>
      )}
    </div>
  );
};
