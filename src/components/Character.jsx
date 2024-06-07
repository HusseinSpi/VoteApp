import "./Character.css";
import { useVote } from "../Hook/Vote";

export const Character = ({ urlImg, name, initialVote, bgColor }) => {
  const { voteCount, addVote } = useVote(initialVote);

  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <img src={urlImg} alt={name} />
      <h2>{name}</h2>
      <p>{voteCount}</p>
      <button onClick={addVote}>Vote</button>
    </div>
  );
};
