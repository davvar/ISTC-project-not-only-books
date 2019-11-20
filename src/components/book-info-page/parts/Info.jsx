import React from "react";

const Info = ({ title, author, price, rating, language, genre }) => {
  return (
    <div className="book-info">
      <h3>Author {author} </h3>
      <h3>{title}</h3>
      <h3>Language {language}</h3>
      <h3>Rating {rating}/10</h3>
      <h3>Price {price}</h3>
      <h3>genre {genre}</h3>
    </div>
  );
};

export default Info;
