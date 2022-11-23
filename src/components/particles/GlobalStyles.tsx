import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background-color:${({ theme }) => theme.primary};
    }
`;

export { GlobalStyles };
