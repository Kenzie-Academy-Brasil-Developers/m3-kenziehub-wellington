import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width:900px) {
        padding: 0.5rem;
        align-items: center;
    }
`