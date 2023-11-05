import logo from "../../assets/img/logo.gif";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { serverTimestamp } from "firebase/firestore";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useForm } from "react-hook-form";


const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  };

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, cleanCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleOrderSubmit = (/* evento */) => {
    /* evento.preventDefault(); */

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));
 
    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    cleanCart();
  };

  return (
    <section className="contact-page">
      {orderId ? (
        <div>
          <h2>Gracias por su compra <br />Su N° de comprobante es {orderId}</h2>
          <img src={logo} alt="logo" />
          <Link to="/"> <button className="button-cart">Seguir comprando</button></Link>
        </div>
      ) : (
        <form className="formulario" onSubmit={handleSubmit(handleOrderSubmit)}>
          <h1>Checkout</h1>
          <div>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={handleChange}
            {...register("name", { required: "Nombre es obligatorio" })}
          />{errors.name && <p className="error-message">{errors.name.message}</p>}
          <input
            type="text"
            placeholder="Ingresa tu telefono"
            onChange={handleChange}
            {...register("phone", { required: "Teléfono es obligatorio" })}
          />{errors.phone && <p className="error-message">{errors.phone.message}</p>}
          <input
            type="text"
            placeholder="Ingresa tu email"
            onChange={handleChange}
            {...register("email", {
              required: "Email es obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Email no válido",
              },
            })}
          />{errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <button className="button-cart" type="submit">Comprar</button>
          
        </form>
      )}
    </section>
  );
};

export default Checkout;