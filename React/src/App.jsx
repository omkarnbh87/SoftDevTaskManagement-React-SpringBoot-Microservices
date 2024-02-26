import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Home from "./Page/Home/Home";
import Navbar from "./Page/Navbar/Navbar";
import { DarkTheme } from "./theme/DarkTheme";
import Auth from "./Auth/Auth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(true);
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        {user ? (
          <div>
            <Navbar />
            <Home />
          </div>
        ) : (
          <Auth />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
