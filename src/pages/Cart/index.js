import { useDispatch, useSelector } from "react-redux";

import {
  MdAddCircleOutline,
  MdRemoveCircleOutline
} from 'react-icons/md';

import { removeBook, updateAmout } from "../../store/modules/cart/actions";
import { formatPrice } from "../../utils";

const Cart = () => {
  
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.items);

  const total = formatPrice(cart.reduce((valorAntigo, valorAtual) => {
    return valorAntigo + (valorAtual.book.price * valorAtual.amount)
  }, 0))

  return (
    <div className="container">
      <table className="table-cart">
        <thead>
          <tr>
            <th>#</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>SubTotal</th>
          </tr>
        </thead>

        <tbody>
          {
            cart.map(item => (
              <tr key={item.book.id}>
                <td>
                  <img
                    className="table-image"
                    src={item.book.image}
                    alt="foto do produto" />
                </td>
                <td>{item.book.title}</td>
                <td>

                  {
                    item.amount > 1 && (
                      <button className="action-button" onClick={() => dispatch(updateAmout(item.book.id, item.amount - 1))}>
                        <MdRemoveCircleOutline size={20} color="#000" />
                      </button>
                    )
                  }

                  {item.amount}

                  <button className="action-button" onClick={() => dispatch(updateAmout(item.book.id, item.amount + 1))}>
                    <MdAddCircleOutline size={20} color="#000" />
                  </button>

                </td>
                <td> {formatPrice(item.book.price * item.amount)}</td>

                <td><button onClick={() => dispatch(removeBook(item.book.id))}>Remover</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div style={{ textAlign: 'right' }}>  {total}</div>
    </div>
  )
}

export default Cart;