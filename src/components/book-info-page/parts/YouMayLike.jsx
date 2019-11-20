import React from "react";
import { connect } from "react-redux";
import { learnMore } from "../../../store/actions/actions";

const YouMayLike = ({ books, learnMore, genre }) => {
  return (
    <div className="related-books">
      <p>You May Also Like</p>
      <div className="you-may-like">
        {books.map(
          ({ id, img, genre: _genre }) =>
            _genre === genre && (
              <img
                onClick={() => learnMore(id)}
                id={id}
                key={id}
                src={img}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
};

let mapStateToProps = ({ books, openedBookInfo }) => ({
  books,
  genre: openedBookInfo.genre
});

export default connect(mapStateToProps, {
  learnMore
})(YouMayLike);
