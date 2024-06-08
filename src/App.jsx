import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Menu from "./components/Menu";
import { ChangePage } from "./Hook/ChangePage";
import { LoginPage } from "./Page/LoginPage";
import { Vote } from "./Page/VotePage";

const App = () => {
  const { currentPage, handleChangePage } = ChangePage();

  return (
    <main>
      <Menu handleChangePage={handleChangePage} />
      <ToastContainer position="top-center" />
      {currentPage === 1 ? <Vote /> : <LoginPage />}
    </main>
  );
};

export default App;
