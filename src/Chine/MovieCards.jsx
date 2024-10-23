import React, { useContext, useState } from "react";
import { getImageUrl } from "../utails/chine-utails";
import Rating from "./Rating";
import MovieCardModal from "./MovieCardModal";
import { MovieContext } from "../context";

export default function MovieCards({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectMovie, setSelectMovie] = useState(null);
  const { id, title, price, rating, genre, description, cover } = movie;
  const { cardData, setCardData } = useContext(MovieContext);

  const handleAddToCard = (e, movie) => {
    e.stopPropagation();
    // const found = cardData.find((item) => item.id === movie.id);
    let found = false
    for(let i=0;i<cardData.length;i++){
      if(cardData[i].id === movie.id){
        found = true
      }
    }
    if (!found) {
      setCardData([...cardData, movie]);
    } else {
      alert(`This movie already Add to card now ${movie.title}`);
    }
  };
  const handleShowModal = (movie) => {
    setSelectMovie(movie);
    setShowModal(true);
  };

  const handleCloseModel = () => {
    setSelectMovie(null);
    setShowModal(false);
  };


  return (
    <>
      {showModal && (
        <MovieCardModal movie={selectMovie} onCardAdd={handleAddToCard} onClosed={handleCloseModel} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={() => handleShowModal(movie)}>
          <img
            className="w-full object-cover"
            src={getImageUrl(cover)}
            alt={title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              {/* rating image  */}
              <Rating value={rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              onClick={(e) => handleAddToCard(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
