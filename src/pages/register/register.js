import styled from "styled-components";

export const StyledRegisterHeader = styled.header`
    margin: 0 auto;
    display: flex;
    width: 25rem;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    button{
        width: 4rem;
        height: 2.5rem;
        background-color: #212529 ;
        font-weight: 600;
        margin-top: 0.5rem;
        border-radius: 0.25rem;
        color: #F8F9FA;
    
    }

    @media (max-width:900px) {
        width: 95%;
        max-width: 25rem;
    }

`

export const StyledRegister = styled.div`
    width:  25rem;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.7rem 1.5rem;
    margin: 0 auto;
    background-color: #212529;
    border-radius: 0.5rem;
    align-items: center;

    @media (max-width:900px) {
        width: 95%;
        max-width: 25rem;
        
    }

    h2{
        font-size: 1.125rem;
    }

    p{
        font-size: 0.7rem;
        color:#868E96;
    }

    form{
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 1rem;
    }

    form>label{
        font-size: 0.75rem;
        font-family: 'Inter', sans-serif;
    }

    form>input{
        width: 100%;
        height: 2.5rem;
        background-color:#343B41;
        border: none;
        border-radius: 0.25rem;
        padding-left: 1rem;
    }

    form>select{
        width: 100%;
        height: 2.5rem;
        background-color:#343B41;
        border: none;
        border-radius: 0.25rem;
        padding-left: 1rem;
        font-weight: 700;
        color: #F8F9FA;
    }


    form>button{
        width: 100%;
        height: 2.5rem;
        background-color: #FF577F;
        border-radius: 0.25rem;
        color: #F8F9FA;
        font-weight: 600;
        margin-top: 0.5rem;
    }

`