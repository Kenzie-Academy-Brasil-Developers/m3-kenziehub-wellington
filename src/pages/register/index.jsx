import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Logo from '../../components/logo'
import { StyledContainer } from '../../styles/container'
import { StyledRegister, StyledRegisterHeader } from './register'
import { yupResolver } from '@hookform/resolvers/yup'
import {registerSchema} from './registerSchema'
import { api } from '../../api/api'
import { toast, ToastContainer } from 'react-toastify'


const Register = ({navigate}) => {
  const [loanding, setLoanding] = useState(false)
  const { register, handleSubmit, formState: {errors} } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(registerSchema)
  })
  
  const registerUser = async (formData)=>{
    try {
      setLoanding(true)
      const response = api.post('/users', formData)
      toast.success('Usuario criado com sucesso!')
      setTimeout(()=>{navigate('/')}, 4000)      
    } catch (error) {
      toast.error('algo errado! tente novalmente')
    } finally {
      setLoanding(false)
    }
  }

  const submit = (data)=>{
    registerUser(data)
  }

  return (
    <StyledContainer>

      <StyledRegisterHeader>
        <Logo/>
        <button>
          <Link to='/'>
            Voltar
          </Link>
        </button>
      </StyledRegisterHeader>

      <StyledRegister>

        <h2>Crie Sua Conta</h2>

        <p>Rapido e grátis, vamos nessa!</p>

        <form noValidate onSubmit={handleSubmit(submit)}>

          <label htmlFor='name'>Nome</label>
          <input type='text' id='name' label='name:' placeholder='Digite aqui o seu nome' {...register('name')} disabled={loanding}/>
          {errors.name && <p>{errors.name.message}</p>}

          <label htmlFor='email'>Email</label>
          <input type='text' id='email' label='email:' placeholder='Digite aqui o seu email' {...register('email')} disabled={loanding}/>
          {errors.email && <p>{errors.email.message}</p>}

          <label htmlFor='passWord'>Senha</label>
          <input type='password' id='password' label='password:' placeholder='Digite aqui sua senha'{...register('password')} disabled={loanding}/>
          {errors.password && <p>{errors.password.message}</p>}

          <label htmlFor='passwordConfim'>Confirmar Senha</label>
          <input type='password' id='passwordConfirm' label='passwordConfirm:' placeholder='Digite novamente sua senha' disabled={loanding}/>
          {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
          
          <label htmlFor='about'>Bio</label>
          <input type='text' id='about' label='about:' placeholder='fale sobre voce' {...register('bio')} disabled={loanding}/>
          {errors.name && <p>{errors.name.message}</p>}

          <label htmlFor='contact'>Contato</label>
          <input type='text' id='contact' label='contact:' placeholder='Digite um contato' {...register('contact')} disabled={loanding}/>
          {errors.contact && <p>{errors.contact.message}</p>}
          
          <label htmlFor='course_module'>Módulo</label>
          <select name='course_module' id='course_module' label='course_module:' {...register('course_module')} disabled={loanding}>
            <option value=''>Selecione o modulo</option>
            <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro módulo</option>
            <option value='Segundo módulo (Frontend Avançado'>Segundo módulo</option>
            <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro módulo</option>
            <option value='Quarto módulo (Backend Avançado)'>Quarto módulo</option>
          </select>
          {errors.course_module && <p>{errors.course_module.message}</p>}

          
          <button type='submit' disabled={loanding}>
              {loanding ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        
        </form>
        
      </StyledRegister>


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
  )
}

export default Register