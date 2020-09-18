import React from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components'





const StyledPage = styled.div`
  background: ${(props) => props.theme.lavender};
  color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const Page = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <GlobalStyle/>
        <Meta/>
        <Header/>
        <Inner>{children}</Inner>
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;