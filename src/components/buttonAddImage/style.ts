import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 1rem;
    background-color: #BF2525;
    border: none;
    cursor: pointer;
    border-radius: 9999px;
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 0 2rem 2rem 0;
    display: flex;
    transition: all 0.3s linear;
    z-index: 200;
    :hover {
        opacity: 0.7;
    }

    img {
        width: 1rem;
    }

`;