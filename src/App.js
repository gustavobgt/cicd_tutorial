import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignIn from "./screens/SignIn/SignIn";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
