import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./book-info-page.css";

import YouMayLike from "./parts/YouMayLike";
import Book from "./parts/Book";

import { closeLearnMore } from "../../store/actions/actions";



const BookInfoPage = ({ closeLearnMore }) => {
  let [position, setPosition] = useState(-100);
  let styles = {
    transform: `translate(${position}%)`,
    transition: ".6s"
  };

  useEffect(() => {
    setTimeout(() => setPosition(20), 40);
    setTimeout(() => setPosition(-10), 400);
    setTimeout(() => setPosition(0), 600);
  }, []);

  const closingInfoWithDelay = () => (
    setPosition(-100), setTimeout(closeLearnMore, 400)
  );

  return (
    <div className="main-div" style={styles}>
      <i onClick={closingInfoWithDelay} className="fa fa-times"></i>
      <Book />
      <YouMayLike />
    </div>
  );
};

export default connect(null, { closeLearnMore })(BookInfoPage);
