import { render, screen } from "@testing-library/react";
import { Footer } from ".";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

test("<Footer />", () => {
  render(
    <ThemeProvider theme={theme}>
      <Footer text="Teste"/>
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/Teste/i);
  expect(linkElement).toBeInTheDocument();
});
