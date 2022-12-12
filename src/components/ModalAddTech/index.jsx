import React from 'react'
import { useForm } from 'react-hook-form'
import { StyleModal, StyleModalBox, StyleModalBoxHeader } from './modal'

const ModalAddTech = () => {
  const {register, handleSubmit} = useForm()

  const  createTech= async (data)=>{
    console.log(data)

  }

  return (
    <StyleModal>
        <StyleModalBox>
            <StyleModalBoxHeader>
                <p>Cadastrar Tecnologia</p>
                <button>X</button>
            </StyleModalBoxHeader>
            <form>
                <label htmlFor="title">Nome</label>
                <input type="text" label='title:' placeholder='Nome da tecnologia' {...register('title')} />

                <label htmlFor="status">Selecionar status</label>
                <select name="status" id="status" label='status' {...register('status')}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediario">Intermediario</option>
                    <option value="Avançado">Avançado</option>
                </select>

                <button>Cadastrar tecnologia</button>
            </form>
        </StyleModalBox>
    </StyleModal>
  )
}

export default ModalAddTech