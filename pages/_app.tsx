import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";
import "../styles/_search.scss";

const AppComponent = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Heading as="h1" size="2xl">
        Covid19 tracking App
      </Heading>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default AppComponent;
