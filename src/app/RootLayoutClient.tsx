"use client";

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./provider/Registry";
import theme from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { LayoutProvider } from "./provider/LayoutContect";
import ReduxProvider from "./provider/Redux-Provider";

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
              <ReduxProvider>{children}</ReduxProvider>
            </LayoutProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
