import GlobalStyle from "styles/globalStyle";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "src/Utils/theme";
import { Provider } from "react-redux";
import { wrapper } from "src/Redux/store";
import Footer from "src/component/Footer/Footer";
import Header from "src/component/Header/Header";
import FindHouseStyled from "styles/findHouse";

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <FindHouseStyled>
            <Header />
            <Component {...props.pageProps} />
            <Footer />
          </FindHouseStyled>
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
