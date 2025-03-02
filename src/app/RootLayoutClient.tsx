"use client";

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./provider/Registry";
import theme from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { LayoutProvider } from "./provider/LayoutContect";
import ReduxProvider from "./provider/Redux-Provider";
import Header from "./components/common/header/Header";
import ModalContainer from "./components/modal/ModalContainer";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <LayoutProvider>
              <Header />
              <ReduxProvider>
                {children}
                <ModalContainer />
              </ReduxProvider>
            </LayoutProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
