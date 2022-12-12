import styled from "styled-components";

export const StyleModal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;

    z-index: 99;

    background-color: rgba(0,0,0,.25);
`

export const StyleModalBox = styled.div`
    width:95%;
    max-width: 23rem;
    height: 21.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;


    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0.875rem 1.375rem;
        justify-content: space-between;

    }

    form>label{
        font-size: 0.75rem;
        color: #f8f9fa;
    }

    form>input{
        width: 100%;
        height: 3rem;
        background-color: #343B41;
        color: #f8f9fa;
        border: 1px solid #f8f9fa;
        border-radius: 0.250rem;        
    }

    form>select{
        width: 100%;
        height: 3rem;
        background-color: #343B41;
        color: #f8f9fa;
        border: 1px solid #f8f9fa;
        border-radius: 0.250rem;        
    }

    form>button{
        width: 100%;
        height: 3rem;
        background-color: #FF577F;
        color: #f8f9fa;

    }

`

export const StyleModalBoxHeader = styled.div`
    width: 100%;
    height: 3.5rem;
    background-color: #343B41;
    color:#F8F9FA ;
    border-radius: 0.25rem, 0.25rem, 0, 0;
    display: flex;
    justify-content: space-between;
    padding: 0.875rem 1.375rem;

    p{
        font-size: 0.825rem;
        font-weight: 700;
    }

    button{
        background-color: transparent;
        border: none;
        color: #868E96;
    }



`