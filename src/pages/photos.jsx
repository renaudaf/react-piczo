import React, { useContext } from "react";

import Image from "../components/image";
import { Context } from "../context";
import { getClass } from "../utils";


const Photos = () => {
  const { allPhotos } = useContext(Context);
  const images = allPhotos.map((image, index) => {
    return (
      <Image key={image.id} img={image} className={getClass(index)} />
    );
  });

  return (
    <main className="photos">
      {images}
    </main>
  );
};

export default Photos;
