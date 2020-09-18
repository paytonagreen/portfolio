import "../styles/globals.css";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from '../components/Footer';

const theme = {
  brown: "#A25F08",
  tan: "#F4E6CC",
  offwhite: "#FCF5EB",
  blue: "#2F8CAB",
  lightblue: "#C9E2E9",
  vermillion: "#FE4902",
};

const GlobalStyle = createGlobalStyle`
@font-face{
  font-family: 'Syne';
  src: url('https://fonts.gstatic.com/s/syne/v1/8vIS7w4qzmVxsWxjBZRjr0FKM_04uQ6tTY_9CQ.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: ${(props) => props.theme.lightblue};
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Syne', sans-serif;
    list-style: none;
  }
  a,
  button{
    text-decoration: none;
    color: ${theme.black};
    font-family: 'Syne', sans-serif;
  }
`;

const Inner = styled.div`
  margin: auto;
  max-width: 1100px;
  margin-bottom: 80px;
`;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Meta />
        <Header />
        <Inner>
          <Component {...pageProps} />
        </Inner>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
