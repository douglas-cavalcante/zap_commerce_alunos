import { useSelector } from "react-redux";

const Cart = () => {

  const cart = useSelector(state => state.cart.items);

  const total = cart.reduce((valorAntigo, valorAtual) => {
    return valorAntigo + valorAtual.price
  }, 0);

  return (
    <div className="container">
      <table className="table-cart">
        <thead>
          <tr>
            <th>#</th>
            <th>Produto</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map(item => (
              <tr key={item.id}>
                <td>
                  <img
                    className="table-image"
                    src={item.image}
                    alt="foto do produto" />
                </td>
                <td>{item.title}</td>
                <td> {item.priceFormatted}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {total.toFixed(2)}
    </div>
  )
}

export default Cart;