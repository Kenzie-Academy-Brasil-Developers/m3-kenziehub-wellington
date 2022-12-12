import { useNavigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import RoutesPages from './routes';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

function App() {
  const navigate =  useNavigate()
  const logoutFunction = () =>{
    localStorage.removeItem('@USERID')
    localStorage.removeItem('@TOKEN')
    navigate('/')
  }
  
  return (
    <div>
      <UserProvider>
        <RoutesPages logoutFunction={logoutFunction} navigate={navigate}/>
      </UserProvider>
      <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
}

export default App;
