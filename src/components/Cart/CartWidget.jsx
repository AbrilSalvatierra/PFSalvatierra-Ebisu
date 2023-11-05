import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CarritoContext';

const CartWidget= () => {

  const { getTotalQuantity } = useContext( CartContext )

  let total = getTotalQuantity()
 

  return (
    <Link className="menu-page" to="/carrito">
        <ShoppingCartIcon/>
        <span>{total}</span>
    </Link>
  );
};


export default CartWidget;