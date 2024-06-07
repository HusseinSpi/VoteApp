import { createContext, useState, useContext } from "react";

const Menu = createContext();

export const AppMenu = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Menu.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </Menu.Provider>
  );
};

export const useGlobalMenu = () => {
  return useContext(Menu);
};
