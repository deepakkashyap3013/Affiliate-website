import React from "react";

const Card = ({
  link,
  name,
  featuredImg,
  id,
  subImages,
  description,
  rating,
}) => {
  return (
    <div className="card">
      <a href={link} target="_blank">
        <img src={featuredImg} alt="featured-img" />
      </a>
      <a href={link} className="name" target="_blank">
        {name}
      </a>
      <a href={link} className="button">
        More Info &rarr;
      </a>
    </div>
  );
};

export default Card;
