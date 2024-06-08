const initialCharacters = [
  {
    id: 1,
    name: "Sea",
    img: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg",
    vote: 0,
  },
  {
    id: 2,
    name: "Jungle",
    img: "https://images.pexels.com/photos/77551/pexels-photo-77551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    vote: 0,
  },
  {
    id: 3,
    name: "Mountains",
    img: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    vote: 0,
  },
  {
    id: 4,
    name: "Caves",
    img: "https://images.pexels.com/photos/2397414/pexels-photo-2397414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    vote: 0,
  },
];

const loadCharactersFromLocalStorage = () => {
  const storedCharacters = localStorage.getItem("characters");
  return storedCharacters ? JSON.parse(storedCharacters) : initialCharacters;
};

const characters = loadCharactersFromLocalStorage();

export default characters;
