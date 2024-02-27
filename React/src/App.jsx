import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Home from "./Page/Home/Home";
import Navbar from "./Page/Navbar/Navbar";
import { DarkTheme } from "./theme/DarkTheme";
import Auth from "./Auth/Auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./ReduxToolkit/TaskSlice";
import { getUserProfile } from "./ReduxToolkit/AuthSlice";

function App() {
  const [user, setUser] = useState(false);
  const dispatch = useDispatch();
  const { task, auth } = useSelector((store) => store);
  useEffect(() => {
    dispatch(fetchTasks({}));
    dispatch(getUserProfile(localStorage.getItem("jwt")));
  }, [auth.jwt]);
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        {auth.user ? (
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
