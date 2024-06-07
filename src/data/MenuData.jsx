import { MdHowToVote } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { RiAdminFill } from "react-icons/ri";

const links = [
  {
    id: 1,
    url: "/",
    text: "Vote",
    icon: <MdHowToVote />,
  },
  {
    id: 2,
    url: "/login",
    text: "Login",
    icon: <CiLogin />,
  },
  {
    id: 3,
    url: "/admin",
    text: "Admin",
    icon: <RiAdminFill />,
  },
];

export default links;
