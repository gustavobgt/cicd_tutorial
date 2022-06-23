import { render, screen } from "@testing-library/react";
import { Copyright } from ".";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

test("<Copyright />", () => {
  render(
    <ThemeProvider theme={theme}>
      <Copyright />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/Your Website/i);
  expect(linkElement).toBeInTheDocument();
});
