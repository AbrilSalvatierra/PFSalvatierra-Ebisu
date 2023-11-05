import { createContext, useState } from "react"

export const CartContext = createContext(); 

const CarritoContext = ({ children }) => {
  const [cart, setCart] = useState (JSON.parse(localStorage.getItem("cart")) || []) ;
  
  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newArray = cart.map((element) => {
        if(element.id === product.id){
          return { ...element, quantity: product.quantity,};
        }else{
          return element;
        }
      });
    
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray))
    } else{
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]))
    }
  };
   
  const isInCart = (id) => {
    let exist = cart.some((element) => element.id === id);
    return exist;
  };
  
  const getQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);
    return product?.quantity;
  };

  const cleanCart = () =>{
    setCart ([]);
    localStorage.removeItem("cart")
  };
  
  const deleteProductById = (id) =>{
    let newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray))
  };

  const getTotalPrice = () => {
    let total = cart.reduce ((acc , element) => {
      return acc + element.price * element.quantity;
    },0);
    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce ((acc , element) => {
      return acc + element.quantity
    },0);
    return total;
  };
  
  let data = {cart,addToCart,getQuantityById,cleanCart,deleteProductById,getTotalPrice,getTotalQuantity,};
  
  
  
  
  return (
    <CartContext.Provider value={data}>{ children }</CartContext.Provider>
  );
};

export default CarritoContext;