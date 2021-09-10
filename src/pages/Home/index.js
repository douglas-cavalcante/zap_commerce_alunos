import { useEffect, useState } from "react";
import api from "../../services/api";
import { addProductToCart } from "../../store/modules/cart/actions";
import { formatPrice } from '../../utils';

import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

const Home = () => {

  const history = useHistory();

  const dispatch = useDispatch();

  const [books, setBooks] = useState([]);
 
  const handleGetBooks = async () => {
    try {
      const response = await api.get('/books');
      const responseFormatted = response.data.map(item => {
        return {
          ...item,
          priceFormatted: formatPrice(item.price)
        }
      })
      setBooks(responseFormatted)
    } catch (error) {
      console.log(error)
    }
  }

  const handleRedirectDetails = (book) => {
    history.push('/details', {book})
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
                {book.priceFormatted}
              </span>
              <button onClick={() => dispatch(addProductToCart(book))}>Comprar</button>
              <button onClick={() => handleRedirectDetails(book)}>Detalhes</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home;