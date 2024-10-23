import React, { useState } from "react";
import Headers from "./components/Headers";
import Sidebar from "./components/Sidebar";
import MovieList from "./Chine/MovieList";
import Footer from "./components/Footer";
import { MovieContext } from "./context";
export default function App() {
  const [cardData, setCardData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cardData, setCardData }}>
        <Headers />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>

        <Footer />
      </MovieContext.Provider>
    </>
  );
}
