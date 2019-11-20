import React, { Component, useEffect, useState } from "react";
import "./book-cart.css";
import { connect } from "react-redux";
import RandomBook from "./RandomBook";

const BookCart = ({
  books,
}) => {


  let [index, setIndex] = useState(0);
  let [mouseOn, setMouseOn] = useState(false);

  const randomIndex = old_index => {
    let new_index = Math.floor(Math.random() * books.length);
    return old_index === new_index ? randomIndex(old_index) : new_index;
  };
  const mousePosition = () => setMouseOn(prevPos => !prevPos);

  useEffect(() => {
    let timer;
    mouseOn
      ? setIndex(index)
      : (timer = setTimeout(() => setIndex(randomIndex(index)), 4000));

    return () => clearTimeout(timer);
  });

  return (
    <div className="book-slider">
      <RandomBook mousePosition={mousePosition} {...books[index]} />
    </div>
  );
};
let mapStateToProps = ({ books }) => ({ books });

export default connect(mapStateToProps)(BookCart);

// class BookCart extends Component {
//   state = { index: 0, mouseOn: false };

//   componentDidMount() {
//   setTimeout(() => this.setState({ index: this.randomIndex(this.state.index) }), 3000);
// }

//   componentDidUpdate() {
//     let { index, mouseOn } = this.state;
//     !mouseOn
//       ? (this.timer = setTimeout(
//           () => this.setState({ index: this.randomIndex(index) }),
//           3000
//         ))
//       : clearTimeout(this.timer);
//   }

//   mousePosition = () => this.setState({ mouseOn: !this.state.mouseOn });

//   randomIndex = old_index => {
//     let { books } = this.props;
//     let new_index = Math.floor(Math.random() * books.length);
//     return old_index === new_index ? this.randomIndex(old_index) : new_index;
//   };

//   render() {
//     let { index } = this.state;
//     let { books, learnMore } = this.props;

//     return (
//       <div className="book-slider">
//         <RandomBook
//           learnMore={learnMore}
//           mousePosition={this.mousePosition}
//           {...books[index]}
//         />
//       </div>
//     );
//   }
// }
