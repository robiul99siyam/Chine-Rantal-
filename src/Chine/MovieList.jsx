import React from "react";
import { moviesData } from "../data/movies";
import { myMap } from "../utails/chine-utails";
import MovieCards from "./MovieCards";

export default function MovieList() {
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {myMap(moviesData, (movie) => {
          return <MovieCards key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
