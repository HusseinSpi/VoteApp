import characters from "../data/charactersData";
import { Character } from "./Character";
import "./CharactersMenu.css";

export const CharactersMenu = () => {
  const bgColors = [
    "rgba(151, 206, 228, 0.5)",
    "rgba(84, 154, 14, 0.5)",
    "rgba(69, 107, 60, 0.5)",
    "rgba(208, 149, 41, 0.5)",
  ];

  return (
    <ul className="Character-menu">
      {characters.map((character, index) => (
        <Character
          key={character.id}
          id={character.id}
          name={character.name}
          urlImg={character.img}
          initialVote={character.vote}
          bgColor={bgColors[index % bgColors.length]}
        />
      ))}
    </ul>
  );
};
