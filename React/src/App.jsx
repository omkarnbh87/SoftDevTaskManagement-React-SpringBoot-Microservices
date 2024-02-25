import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Home from "./Page/Home/Home";
import Navbar from "./Page/Navbar/Navbar";
import { DarkTheme } from "./theme/DarkTheme";
import Auth from "./Auth/Auth";

function App() {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <div>
          {/* <Navbar />
          <Home /> */}
          <Auth></Auth>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
