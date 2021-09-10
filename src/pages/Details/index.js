import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { addProductToCart } from "../../store/modules/cart/actions";

const Details = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const { state } = useLocation();
  
  const handleAddBook = () => {
    history.push('/cart')
    dispatch(addProductToCart(state.book))
  }

  return (
    <div className="container">
      <div className="book-content-item">
        <img
          src={state.book.image}
          alt="capa do livro"
        />
        <div className="right-content">
          <span className="book-title"> {state.book.title}</span>
          <span className="book-price"> {state.book.priceFormatted}</span>
          <span className="book-description"> {state.book.description}</span>

          <button className="button-add-cart" onClick={handleAddBook}>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  )
}

export default Details;