import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, DarkTheme } from "./components/Themes";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import { Route } from 'react-router-dom';
import Main from "./components/Main";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";
import BlogPage from "./components/BlogPage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" components={Main}></Route>
          <Route exact path="/about" components={AboutPage}></Route>
          <Route exact path="/blog" components={BlogPage}></Route>
          <Route exact path="/work" components={WorkPage}></Route>
          <Route exact path="/skills" components={MySkillsPage}></Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
