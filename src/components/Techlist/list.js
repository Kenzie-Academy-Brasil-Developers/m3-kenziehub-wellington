import styled from "styled-components";

export const StyledList = styled.ul`
    width: 100%;
    height: max-content;
    background-color: #343b41;
    border-radius: 0.250rem;
    display: flex;
    flex-direction: column;
    gap: 0.250rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
`

export const StyledCard = styled.li`
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1.5rem;


    div{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    button{
        background-color: none;
    }


`