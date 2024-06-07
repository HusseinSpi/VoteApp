import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Menu from "./components/Menu";
import { ChangePage } from "./Hook/ChangePage";
import { Login } from "./components/Login";
import { Vote } from "./Page/Vote";

const App = () => {
  const { currentPage, handleChangePage } = ChangePage();

  return (
    <main>
      <Menu handleChangePage={handleChangePage} />
      <ToastContainer position="top-center" />
      {currentPage === 1 ? <Vote /> : <Login />}
    </main>
  );
};

export default App;
