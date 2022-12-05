import React from 'react'
import Logo from '../../components/logo'
import { StyledContainer } from '../../styles/container'
import { StyledNavBar, StyledUserHeader, StyledUserMain } from './userdash'

const Userdash = ({logoutFunction, validateUser}) => {
  const user = JSON.parse(localStorage.getItem('@USERID'))
  
 
  return (
    <StyledContainer>
      <StyledNavBar>
        <div>
        <Logo/>
        <button onClick={()=>{logoutFunction()}}>Sair</button>
        </div>
        
      </StyledNavBar>
    
      <StyledUserHeader>
        <div>
          <h2>Ola, {user.name}</h2>
          <p>{user.course_module}</p>
        </div>
        
      </StyledUserHeader>

      <StyledUserMain>
        <div>
        <h2>Que pena! estamos em desenvolvimento :(</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </div>
       
      </StyledUserMain>

    </StyledContainer>
  )
}

export default Userdash