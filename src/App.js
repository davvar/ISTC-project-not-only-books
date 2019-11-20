import React from "react";

import "./App.css";

import BookCart from "./components/book-cart/BookCart";
import NavBar from "./components/nav-bar/NavBar";
import Search from "./components/search-bar/Search";
import BookInfoPage from "./components/book-info-page/BookInfoPage";


import { connect } from "react-redux";

function App({ openBookInfo }) {

  return (
    <div className="App">


      {openBookInfo && <BookInfoPage />}

      <div className="top">
        <NavBar />
        <BookCart />
        <Search />
      </div>
    </div>
  );
}
let mapStateToProps = ({ openBookInfo }) => ({ openBookInfo });

export default connect(mapStateToProps)(App);
