import { books } from "../../datas/datas";
import {
  OPEN_CART,
  CLOSE_CART,
  ADD_TO_CART,
  LEARN_MORE,
  CLOSE_LEARN_MORE,
  INC_PRODUCT_QUANTITY,
  DEC_PRODUCT_QUANTITY
} from "./../constants/action-names";

let initialState = {
  books,
  cartIsOpen: false,
  openBookInfo: false,
  openedBookInfo: null,
  cart_productsIn: [],
  cart_sumOfProducts: 0
};

let mainPageReducer = (state = initialState, action) => {
  let { openedBookInfo, books, cart_productsIn, cart_sumOfProducts } = state;

  switch (action.type) {
    //----------------------------------------------------------------------------//
    case OPEN_CART:
      return { ...state, cartIsOpen: true };
    //----------------------------------------------------------------------------//
    case CLOSE_CART:
      return { ...state, cartIsOpen: false };
    //----------------------------------------------------------------------------//
    case ADD_TO_CART:
      if (cart_productsIn.some(({ id }) => id === action.book_id)) return state

      let book = books.find(({ id }) => id === action.book_id);
      book.inCart = true;
      book.quantity = 1;
      cart_productsIn = [book, ...cart_productsIn];
      cart_sumOfProducts += book.calculatingTotalSumOfBook();
      let changedBooks = books.map(book => {
        if (book.id === action.book_id) book.inCart = true
        return book
      })

      return {
        ...state,
        cart_productsIn,
        cart_sumOfProducts,
        books: changedBooks
      };
    //----------------------------------------------------------------------------//
    case LEARN_MORE:
      books.forEach(
        book => book.id === action.book_id && (openedBookInfo = { ...book })
      );
      return { ...state, openedBookInfo, openBookInfo: true };
    //----------------------------------------------------------------------------//
    case CLOSE_LEARN_MORE:
      return { ...state, openBookInfo: false, openedBookInfo: null };
    //----------------------------------------------------------------------------//
    case INC_PRODUCT_QUANTITY:
      let changedCart_productsIn = cart_productsIn.map(book => {
        if (book.id === action.book_id) book.quantity += 1
        return book
      })
      return { ...state, cart_productsIn: changedCart_productsIn }
    //----------------------------------------------------------------------------//

    default:
      return state;
  }
};

export { mainPageReducer };
