import styled from 'styled-components';

export const CardDescription = styled.div`
    margin-top: 1rem;   
    width: 100%;
    height: 250px;
    position: absolute;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    visibility: hidden;
    display: grid;
    align-content: space-around;   
    text-align: center;

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

    img {
        z-index: 1;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }  

    &:hover ${CardDescription} {
        visibility: visible;
        background-color: rgba(0, 0, 0, 0.7);
    }
`;
