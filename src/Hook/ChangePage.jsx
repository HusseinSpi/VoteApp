import { useState } from "react";

export const ChangePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
    console.log(newPage);
  };

  return { currentPage, handleChangePage };
};
