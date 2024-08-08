import "./App.css";
import TodoPage from "./pages/TodoPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className='w-[100vw] text-center flex justify-center'>
      <TodoPage />
      <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='light' />
      <ToastContainer />
    </div>
  );
}

export default App;
