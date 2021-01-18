import React from "react";

const Image = ({ className, img }) => {
  return (
    <div className={className}>
      <img src={img.url} className="image-grid" alt="wow" />
    </div>
  );
};

export default Image;
