import { createContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export const UserProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(()=>{
        async function readUser(){
            const token = localStorage.getItem('@TOKEN')

            if(!token){
                setLoading(false)
                return
            }

            try {
                api.defaults.headers.common.authorization = `Bearer ${token}`

                const {data} = await api.get('/profile')

                setUser(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        readUser()
    },[])

    const userLogin= async (formData)=>{
        try {
          setLoading(true)
          const response = await api.post('/sessions', formData)

          const {token, user: userResponse} = response.data

          setUser(userResponse)
          localStorage.setItem('@TOKEN',token)
          localStorage.setItem('@USERID', JSON.stringify(userResponse))
          
          toast.success('login realizado!')

          setLoading(false)

          setTimeout(()=>{navigate('/userDash')},4000)
          
                
        } catch (error) {
          toast.error(error.message)
        } finally {
          setLoading(false)
        }
        
    }

    const registerUser = async (formData)=>{
        try {
          setLoading(true)
          
          const response = api.post('/users', formData)
          
          toast.success('Usuario criado com sucesso!')
          
          navigate('/')      
        } catch (error) {
          toast.error('algo errado! tente novalmente')
        } finally {
          setLoading(false)
        }
      }
    
    return(
        <UserContext.Provider value={{userLogin, registerUser, user, loading}}>
            {children}
        </UserContext.Provider>
    )
}