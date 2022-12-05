import { useNavigate } from 'react-router-dom';
import RoutesPages from './routes';

function App() {
  const navigate =  useNavigate()
  
  const validateUser = () => {
    const token = localStorage.getItem('@TOKEN') || null

    if(token === null){
      navigate('/')
    }
  }


  const logoutFunction = () =>{
    localStorage.removeItem('@USERID')
    localStorage.removeItem('@TOKEN')
    navigate('/')
  }
  
  return (
    <div>
      <RoutesPages logoutFunction={logoutFunction} validateUser={validateUser} navigate={navigate}/>
    </div>
  );
}

export default App;
