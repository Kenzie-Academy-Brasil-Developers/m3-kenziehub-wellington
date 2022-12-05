import styled from "styled-components";

export const StyledNavBar = styled.nav`
    width: 100%;
    height: 6rem;
    border-bottom: 1px solid #F8F9FA;
    display: flex;
    justify-content: center;
    align-items: center;

    
    div{
        width: 100%;
        max-width: 75rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width:900px) {
        width: 90%;
        
    }
    }

    div>button{
        width: 4rem;
        height: 2.5rem;
        background-color: #212529 ;
        font-weight: 600;
        margin-top: 0.5rem;
        border-radius: 0.25rem;
        color: #F8F9FA;
    }



`

export const StyledUserHeader = styled.header`
    width: 100%;
    height: 6rem;
    border-bottom: 1px solid #F8F9FA;
    display: flex;
    justify-content: center;
    align-items: center;


    div{
        width: 100%;
        max-width: 75rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width:900px) {
        width: 90%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;
        
    }
    }

    h2{
        font-size: 1.125rem;
    }
    
    p{
        font-size: 0.75rem;
        color: #868E96;
    }


`

export const StyledUserMain = styled.main`
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        width: 100%;
        max-width: 75rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        @media (max-width:900px) {
        width: 90%;
        
    }
    }

    h2{
        font-size: 1.125rem;
    }

    p{
        font-size: 1rem;
    }

`