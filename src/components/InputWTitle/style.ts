import styled from "styled-components";

export const Input = styled.input<{ error: string }>`
    border: solid 1px ${({ error }) => error ? 'var(--color-primary)' : '#BF2525'};
    color: ${({ error }) => error ? 'var(--color-primary)' : '#BF2525'};
    border-radius: 5px;
    font-size: 1.7rem;
    padding: 0.3rem 0.8rem;
    margin: 0.5rem 0 1rem 0;
`;

export const Label = styled.label`
    display: grid;
    font-size: 2rem;
`;
