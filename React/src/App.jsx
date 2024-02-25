import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Home from "./Page/Home/Home";
import Navbar from "./Page/Navbar/Navbar";
import { DarkTheme } from "./theme/DarkTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <div>
          <Navbar />
          <Home />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
