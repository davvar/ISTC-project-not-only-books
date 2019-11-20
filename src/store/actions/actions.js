import {
  OPEN_CART,
  CLOSE_CART,
  LEARN_MORE,
  CLOSE_LEARN_MORE,
  ADD_TO_CART,
  INC_PRODUCT_QUANTITY,
  DEC_PRODUCT_QUANTITY
} from "./../constants/action-names";

const toggleCart = isCartOpen =>
  isCartOpen ? { type: CLOSE_CART } : { type: OPEN_CART };

const learnMore = id => ({ type: LEARN_MORE, book_id: id });

const closeLearnMore = () => ({type: CLOSE_LEARN_MORE})

const addToCart = (id) => ({type: ADD_TO_CART, book_id: id})

const incProductQuantity = (id) => ({type:INC_PRODUCT_QUANTITY,book_id: id })

export { toggleCart, learnMore, closeLearnMore, addToCart, incProductQuantity};
