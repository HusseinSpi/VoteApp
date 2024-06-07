import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import links from "../data/MenuData";
import { useGlobalMenu } from "../Context/MenuContext";
import "./Menu.css";

const Menu = ({ handleChangePage }) => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalMenu();

  return (
    <aside className={isSidebarOpen ? "sidebar showSidebar" : "sidebar white"}>
      {isSidebarOpen ? (
        <>
          <div className="btn" onClick={closeSidebar}>
            <IoCloseSharp />
          </div>
          <div className="links">
            {links.map((link) => (
              <div
                className="link"
                key={link.id}
                onClick={() => handleChangePage(link.id)}
              >
                <span>
                  {link.icon} {link.text}
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="btn" onClick={openSidebar}>
          <GiHamburgerMenu />
        </div>
      )}
    </aside>
  );
};

export default Menu;
