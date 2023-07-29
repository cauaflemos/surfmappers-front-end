import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #654A4A;
    --color-dark: #343a40;
    --color-white: #fff;
    --color-black: #000;

    --font-size-small: 0.8rem;
    --font-size-medium: 1rem;
    --font-size-large: 1.2rem;

    --spacing-small: 0.5rem;
    --spacing-medium: 1rem;
    --spacing-large: 2rem;
  }

  body {
    font-family: 'Ingrid Darling', cursive;
    font-size: var(--font-size-medium);
    color: var(--color-dark);
    background-color: var(--color-white);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-primary);
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  .btn {
    padding: var(--spacing-small) var(--spacing-medium);
    font-size: var(--font-size-medium);
    color: var(--color-white);
    background-color: var(--color-primary);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
  }
`;

export default GlobalStyle;
