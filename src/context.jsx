import React, { useState } from "react";

import pictures from "../data/pictures";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState(pictures);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newImage) => {
    setCartItems(prevImages => [...prevImages, newImage]);
  };
  console.log(cartItems);

  const toggleFavorite = (id) => {
    const newArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(newArr);
  };

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite, addToCart }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
