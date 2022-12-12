import React, { useState } from 'react'
import Logo from '../../components/logo'
import ModalAddTech from '../../components/ModalAddTech'
import TechList from '../../components/Techlist'
import { StyledContainer } from '../../styles/container'
import { StyledNavBar, StyledUserHeader, StyledUserMain, StyledUserMainHeader } from './userdash'

const Userdash = ({logoutFunction}) => {
  const {addTech, setAddTech} = useState(null)
  const userLoged = JSON.parse(localStorage.getItem('@USERID'))

  return (
    <StyledContainer>
      {addTech && (
        <ModalAddTech setAddTech={setAddTech}/>
      )}
      <StyledNavBar>
        <div>
        <Logo/>
        <button onClick={()=>{logoutFunction()}}>Sair</button>
        </div>
        
      </StyledNavBar>
    
      <StyledUserHeader>
        <div>
          <h2>Ola, {userLoged.name}</h2>
          <p>{userLoged.course_module}</p>
        </div>
        
      </StyledUserHeader>

      <StyledUserMain>
        <StyledUserMainHeader>
          <h2>technologias</h2>
          <button onClick={()=>{setAddTech(true)}}>+</button>
        </StyledUserMainHeader>
      {userLoged.techs.length===0?
      (<span>
        <h2>Você ainda não tem Techs cadastradas</h2>
      </span>):(<TechList/>)}
        
             
      </StyledUserMain>

    </StyledContainer>
  )
}

export default Userdash