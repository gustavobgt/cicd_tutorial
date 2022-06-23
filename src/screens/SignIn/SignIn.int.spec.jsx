import { render, screen } from "@testing-library/react";
import SignIn from "./SignIn";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

test("<SignIn />", () => {
  render(
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/Sign in Screen/i);
  expect(linkElement).toBeInTheDocument();
});
