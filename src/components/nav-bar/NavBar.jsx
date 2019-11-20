import React from "react";
import "./nav-bar.css";
import { toggleCart } from "../../store/actions/actions";
import { connect } from "react-redux";

// import {Link} from 'react-router-dom'

const NavBar = ({ toggleCart, cartIsOpen }) => {
  let destinations = [
    "Home",
    "Genres",
    "Contacts",
    "Something",
    "Something",
    "Cart"
  ];
  const mappingDestinations = arr =>
    arr.map(d => {
      let event = d === "Cart" ? () => toggleCart(cartIsOpen) : null;
      return (
        <div onClick={event} key={Math.random() ** 2}>
          {d}
        </div>
      );
    });

  return (
    <div className="nav">
      <div className="logo">
        <h1>
          Not <span style={{ fontFamily: "cursive" }}>Just</span> Books
        </h1>
      </div>
      <nav>{mappingDestinations(destinations)}</nav>
    </div>
  );
};
let mapStateToProps = ({ cartIsOpen }) => ({ cartIsOpen });
let mapDispatchToProps = { toggleCart };

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
