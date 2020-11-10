import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:0;
  }
  *::after,
  *::before {
    box-sizing: border-box;
  };
  body {
    background : ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textColor};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s linear;
  }
`