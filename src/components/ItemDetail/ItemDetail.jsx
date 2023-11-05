import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";


export const ItemDetail = ({ productSelected, onAdd, initial, getCounter }) => {
  return (
    <div className="product-card">
      <h3>{productSelected.title}</h3>
      <img className="product-img" src={productSelected.img} alt={productSelected.title} />

      <div>
        
        <p>{productSelected.description}</p>
        <h3>Precio: ${productSelected.price}</h3>
      </div>

      {
        initial && <h4>Ya tienes {initial} unidades</h4>
      }
       

      {
         getCounter ?  <div><Counter
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}/>
        </div> :  <Link className="button-cart" to="/carrito">Terminar compra</Link>
      }
    </div>
  );
};