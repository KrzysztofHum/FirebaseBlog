import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/Footer";
import styled from "styled-components";

const StyledMain = styled.main`
  min-height: calc(100vh - 160px);
  position: relative;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <StyledMain>
          <Component {...pageProps} />
        </StyledMain>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
