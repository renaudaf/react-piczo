import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../context";

const Image = ({ className, img }) => {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart } = useContext(Context);
  const heartIcon = () => {
    if (img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)} />;
    } if (hovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)} />;
    }
  };

  const cartIcon = hovered && <i className="ri-add-circle-line cart" onClick={() => addToCart(img)} />;
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" alt="piczo" />
      {heartIcon()}
      {cartIcon}
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
};

export default Image;
