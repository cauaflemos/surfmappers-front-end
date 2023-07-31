import styled from "styled-components";
import { media } from "../../global/media";

export const ModalContainer = styled.section`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 999;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalWrapper = styled.div`
    position: absolute;
    width: fit-content;
    height: fit-content;
    background-color: var(--color-white);
    padding: 1.5rem;
    border-radius: 5px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    overflow-y: auto;
    box-sizing: border-box;

    ${media.TABLET`
        width: 100vw;
        height: 100vh;
    `}
`;

export const ModalTitle = styled.div`
    text-align: center;

    h1 {
        color: var(--color-primary);
        font-size: 3rem;
    }
    h2 {
        color: var(--color-dark);
        font-size: 2rem;
        margin-top: 1rem;
    }
`;

export const ModalContentWrapper = styled.div`
    height: fit-content;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

export const InputFileContainer = styled.label`
    display: inline-block;
    padding: 1.5rem 3rem;
    box-sizing: border-box;

    color: white;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    border: dashed 1px #000;

    h2 {
        font-size: 1.7rem;
        color: var(--color-dark);
        margin: 1rem 0;
    }

    span {
        background-color: var(--color-primary);
        padding: 0 1rem;
        border-radius: 5px;
        font-size: 1.3rem;
    }

    input {
        display: none;
    }
`;

export const FormWrapper = styled.div`
    display: flex;

    ${media.TABLET`
        display: grid;
        width: 100%:
        height: 100%;
    `}
`;
export const Form = styled.form``;

export const ImgContainer = styled.div`
    margin-right: 1.5rem;
    img {
        width: 350px;
        max-height: 600px;
        object-fit: scale-down;
    }  
    ${media.TABLET`
        margin-right: 0;
        margin-bottom: 1rem;
    `}
    ${media.SMARTPHONE`
        margin-right: 0;
        margin-bottom: 1rem;
        img {
            width: 100%;
        }
    `}

`;

export const SubmitBtn = styled.button`
    background-color: var(--color-primary);
    color: var(--color-white);
    border: none;
    font-size: 1.5rem;
    width: 100%;
    border-radius: 5px;
    padding: 0.3rem 0;
    cursor: pointer;
`;

export const CloseModal = styled.div`
    width: 100%;
    text-align: right;

    span {
        user-select: none;
        font-size: 1.5rem;
        font-weight: bold;
        color: #E70000;
        cursor: pointer;
    }
`;