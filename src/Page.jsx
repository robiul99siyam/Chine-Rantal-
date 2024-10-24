import React from "react";
import Headers from "./components/Headers";
import Sidebar from "./components/Sidebar";
import MovieList from "./Chine/MovieList";
import Footer from "./components/Footer";
import { useContext } from "react";
import { themeContext } from "./context";
export default function Page() {
  const { darkMode } = useContext(themeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Headers />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>

      <Footer />
    </div>
  );
}
