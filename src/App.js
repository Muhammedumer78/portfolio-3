import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import{lightTheme,DarkTheme} from "./components/Themes";
function App() {
  return (
    <>
      <GlobalStyle />

<ThemeProvider theme={lightTheme}>

</ThemeProvider>
    </>
  );
}

export default App;
