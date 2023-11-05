import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../context/CarritoContext";
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Swal from "sweetalert2";

const CarritoPage = () => {

    const {cart, cleanCart, deleteProductById, getTotalPrice} = useContext(CartContext);

    let total = getTotalPrice();

    const cleanCartWithAlert = () => {
      Swal.fire({
        title: "Seguro quieres limpiar el carrito?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Si",
        denyButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          cleanCart();
          Swal.fire("Carrito eliminado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("El carrito queda como estaba", "", "warning");
        }
      });
    };

  return (
    <main className="cart-container">
    <h1>Mi Carrito</h1>
    {cart.length == 0 && (
    <div>
      <div className="separador"></div>
      <h2>Tu carrito esta vacio</h2>
      <p>Comenza a llenarlo con nuestros productos</p>
    </div>
    )}
    { cart.map(product =>(
      <div className="cart-products" key={product.id}>
        <div className="cart-info">
        <h2>{product.title}</h2>
        <h3>$ {product.price}</h3>
        <h3>Cantidad: {product.quantity}</h3>
      </div>
        <div className="cart-img">
          <img src={product.img} alt={product.title}/>
          <IconButton onClick={()=>deleteProductById(product.id)}><DeleteOutlineIcon color="secondary"/></IconButton>
        </div>
    </div>))}
    
    {cart.length > 0 && (
      <section className="results-container">
      <div className="separador"></div>
      <div className="total-container">
        <div><h2>Total</h2></div>
        <div><h2>$ {total}</h2></div>
      </div>
      <div className="total-container">
        <div>
          <Link to="/checkout"><button className="button-cart">Finalizar compra</button></Link>
        </div>
        <div>
          <button className="button-cart" onClick={cleanCartWithAlert}>Vaciar Carrito</button>
        </div>
      </div>
    </section>
      )}
    </main>
  );
};

export default CarritoPage;