import styled from "styled-components";
import { media } from "../../global/media";

export const Teste = styled.div`
    width: 50vw;
    box-sizing: border-box;
    padding: 1rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid #C4C4C4;
    border-radius: 5px;

    img {
        width: 100%;
    }
    
    ${media.TABLET`
        width: 100%;
    `}
`;

export const DescWrapper = styled.div`
    text-align: center;
`;

export const ButtonsContainer = styled.div`
    margin-top: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
`;

export const Button = styled.button<{ btnType: string }>`
    background-color: ${({ btnType }) => btnType === "N" ? "#E70000" : "#009206"};
    border-radius: 5px;
    border: none;
    color: var(--color-white);
    font-size: 2rem;
`;