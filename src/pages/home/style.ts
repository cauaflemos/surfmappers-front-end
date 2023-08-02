import styled from "styled-components";
import { media } from "../../global/media";

export const HomeContainer = styled.section`
  
`;

export const ShowcaseWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Showcase = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
    ${media.TABLET`
        grid-template-columns: repeat(2, 1fr);
    `}
    ${media.SMARTPHONE`
        grid-template-columns: repeat(1, 1fr);
    `}
`;


export const NoPostsText = styled.h1`
    font-size: 2rem;
`;