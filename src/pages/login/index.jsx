import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Logo from '../../components/logo'
import { StyledContainer } from '../../styles/container'
import { StyledLogin, StyledLoginHeader } from './login'
import { loginSchema } from './loginSchema'
import { yupResolver } from  '@hookform/resolvers/yup'
import { ToastContainer } from "react-toastify"
import { UserContext} from '../../context/UserContext'
import "react-toastify/dist/ReactToastify.css"


const Login = () => {
  const { register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(loginSchema)});
  const {userLogin, loading} = useContext(UserContext)

  return (
    <StyledContainer>
      <StyledLoginHeader>
        <Logo />
      </StyledLoginHeader>
      <StyledLogin>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(userLogin)}>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' label='email:' placeholder='Digite o seu Email' {...register('email')} disabled={loading} />
          {errors.email && <p>{errors.email.message}</p>}
          
          <label htmlFor='senha'>Senha</label>
          <input type='password' id='password' label='password:' placeholder='Digite sua senha' {...register('password')} disabled={loading} />
          {errors.password && <p>{errors.password.message}</p>}

          <button type='submit' disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p>ainda não possui uma conta?</p>

        <button>
          <Link to="/register">Cadastre-se</Link>
        </button>
      </StyledLogin>

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
      
    </StyledContainer>
  );
};

export default Login;
