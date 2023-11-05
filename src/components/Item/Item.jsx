import { Link } from "react-router-dom";

const Item = ({item}) => {
  return (
    <div className="product-card">
      <img className="product-img" src={item.img} alt="{item.title}"/>
      <div>
          <div>
            <h3>{item.title}</h3>
            <p className="price">$ {item.price}</p>
            { item.stock > 0 ? <Link style={{textDecoration:"none"}} to={`/item/${item.id}`}>
              <button className="button-ver-mas" >Ver detalle</button>
              </Link> : 
              <button className="button-ver-mas" variant="contained" disabled>Sin stock</button> }
          </div>
      </div>
    </div>
  );
};

export default Item;