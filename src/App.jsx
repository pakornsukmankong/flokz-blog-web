import Router from './routes/Router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router />;
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
