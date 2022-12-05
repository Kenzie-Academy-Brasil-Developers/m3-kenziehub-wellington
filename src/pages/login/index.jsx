import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Logo from '../../components/logo'
import { StyledContainer } from '../../styles/container'
import { StyledLogin, StyledLoginHeader } from './login'
import { loginSchema } from './loginSchema'
import { yupResolver } from  '@hookform/resolvers/yup'
import { api } from '../../api/api'
import { toast, ToastContainer } from "react-toastify"


const Login = ({navigate}) => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
   resolver: yupResolver(loginSchema)
  });

  const userLogin= async (formData)=>{
    try {
      console.log(formData)
      setLoading(true)
      const response = await api.post('/sessions', formData)
      localStorage.setItem('@TOKEN', JSON.stringify(response.data.token))
      localStorage.setItem('@USERID', JSON.stringify(response.data.user))
      toast.success('login realizado!')
      setTimeout(() => {
        navigate('/userDash')
      }, 4000);
      
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
    
  }

  const loginSubmit = (data) => {
    userLogin(data);
  };

  return (
    <StyledContainer>
      <StyledLoginHeader>
        <Logo />
      </StyledLoginHeader>
      <StyledLogin>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(loginSubmit)}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            label='email:'
            placeholder='Digite o seu Email'
            {...register('email')}
            disabled={loading}
          />
          {errors.email && <p>{errors.email.message}</p>}
          
          <label htmlFor='senha'>Senha</label>
          <input
            type='password'
            id='password'
            label='password:'
            placeholder='Digite sua senha'
            {...register('password')}
            disabled={loading}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <button type='submit' disabled={loading} >
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
