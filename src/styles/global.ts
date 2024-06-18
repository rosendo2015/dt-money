import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    
}
:focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['gray-500']};
    }

    body{
        background-color: ${({ theme }) => theme.colors['gray-800']};
        color: ${({ theme }) => theme.colors['gray-100']};
        -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    text-area,
    button{
        font: 400 1rem Roboto, sons-serif;
    }

    button, a{
        cursor: pointer;
    }
`
