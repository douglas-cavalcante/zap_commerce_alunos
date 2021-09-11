import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Qtd = () => {
  const history = useHistory();

  const quantity = useSelector((state) => state.cart.items.length);

  console.log(quantity)

  return (
    <span onClick={() => history.push('/cart')}>{quantity} produtos</span>
  );
}

const Header = () => {
  return (
    <header className="header-container">
      <div className="container header-content">
        <span>Zap do Código</span>
        <Qtd />
      </div>
    </header>
  )
}

export default Header;