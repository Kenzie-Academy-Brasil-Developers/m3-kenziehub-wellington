import styled from "styled-components";

export const StyledLoginHeader = styled.header`
    margin: 0 auto;
    display: flex;
    width: 25rem;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;

    @media (max-width:900px) {
        width: 95%;
        max-width: 25rem;
        
    }
`

export const StyledLogin = styled.div`
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
        color: #F8F9FA;
        font-weight: 600;
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

    button{
        width: 100%;
        height: 2.5rem;
        background-color: #868E96 ;
        font-weight: 600;
        margin-top: 0.5rem;
        border-radius: 0.25rem;
        color: #F8F9FA;
    
    }

`