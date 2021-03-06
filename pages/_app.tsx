import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/Footer";
import styled from "styled-components";
import UserProvider from "../context/UserProvider";
import ComposeProviders from "../utils/ComposeProviders";
import ExpensesProvider from "../context/ExpensesProvider";
import "../styles/styles.css";

const StyledMain = styled.main`
  min-height: calc(100vh - 180px);
  max-height: calc(100vh - 180px);
  position: relative;
  /* overflow: auto; */
  /* overflow: hidden; */
`;

const providers = [UserProvider, ExpensesProvider].reverse();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ComposeProviders components={providers as any}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <StyledMain>
            <Component {...pageProps} />
          </StyledMain>
          <Footer />
        </ThemeProvider>
      </ComposeProviders>
    </>
  );
}

export default MyApp;
