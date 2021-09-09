import { useEffect, useState } from "react";
import api from "../../services/api";
import { addProductToCart } from "../../store/modules/cart/actions";
import { formatPrice } from '../../utils';

import { useDispatch } from 'react-redux';

const Home = () => {

  const dispatch = useDispatch();

  const [books, setBooks] = useState([]);

  const handleGetBooks = async () => {
    try {
      const response = await api.get('/books')
      setBooks(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetBooks();
  }, []);

  return (
    <div className="container">
      <div className="content-books">
        {
          books.map(book => (
            <div className="card-book" key={book.id}>
              <img src={book.image} alt="capa do livro" />
              <span className="card-book-title">{book.title}</span>
              <span className="card-book-price">
                {formatPrice(book.price)}
              </span>
              <button onClick={() => dispatch(addProductToCart(book))}>Comprar</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home;