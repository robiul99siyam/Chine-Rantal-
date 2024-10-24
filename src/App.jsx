import React, { useReducer, useState } from "react";

import { MovieContext, themeContext } from "./context";
import Page from "./Page";
import { initialition, MovieReducer } from "./Reducers/MovieReducers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [state, dispatch] = useReducer(MovieReducer, initialition);

  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <themeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer/>
        </MovieContext.Provider>
      </themeContext.Provider>
    </>
  );
}
