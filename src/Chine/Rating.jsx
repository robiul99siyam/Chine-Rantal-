import React from "react";
import star from "../assets/star.svg";
import { myMap } from "../utails/chine-utails";

export default function Rating({ value }) {
  const starArray = Array(value).fill(star);
  return (
    <>
      {myMap(starArray, (st, idx) => {
        return <img key={idx} src={st} width="14" height="14" alt="" />;
      })}
    </>
  );
}
