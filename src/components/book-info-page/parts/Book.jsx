import React from "react";
import Info from "./Info";
import About from "./About";
import { connect } from "react-redux";


const Book = ({openedBookInfo}) => {
 
    
  return (
    <div className="about-book-page">
      <img className='main-book' src={openedBookInfo.img} alt="" />
      <Info {...openedBookInfo} />
      <About />
    </div>
  );
};

export default connect(({ openedBookInfo }) => ({
  openedBookInfo
}))(Book);
