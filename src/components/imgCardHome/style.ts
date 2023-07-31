import styled from 'styled-components';

export const CardDescription = styled.div`
    margin-top: 1rem;   
    width: 100%;
    height: 250px;
    position: absolute;
    z-index: 100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: grid;
    align-content: space-around;   
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s linear;

    h1 {
        color: var(--color-white);
        font-size: 2rem;
    }
    h3 {
        color: var(--color-white);
        font-size: 1.5rem;
    }
`;
export const CardContainer = styled.div`
    height: 250px;
    position: relative;
    user-select: none;
    img {
        z-index: 1;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }  
    

    &:hover ${CardDescription} {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.7);
    }
`;
