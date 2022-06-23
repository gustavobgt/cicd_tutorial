import { render, screen } from "@testing-library/react";
import SignUp from "./SignUp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

test("<SignUp />", () => {
  render(
    <ThemeProvider theme={theme}>
      <SignUp />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/Sign in Screen/i);
  expect(linkElement).toBeInTheDocument();
});
