import React, { useContext, useState } from "react";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Moon from "../assets/icons/moon.svg";
import Shiping from "../assets/shopping-cart.svg";
import Cards from "../Chine/Cards";
import { MovieContext } from "../context";

export default function Headers() {
  const [showCard, setShowCard] = useState(false);
  const [count, setCount] = useState(0);
  const handleShowCard = () => {
    setShowCard(true);
  };
  const { cardData } = useContext(MovieContext);
  // alert(cardData);
  console.log(cardData);

  return (
    <>
      {showCard && <Cards cardData={cardData} onClosed={() => setShowCard(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={handleShowCard}
            >
              <img src={Shiping} width="24" height="24" alt="" />
              {cardData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[22px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cardData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
