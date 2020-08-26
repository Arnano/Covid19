import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/_main.scss";

const AppComponent = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default AppComponent;
