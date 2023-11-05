import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {CartContext} from "../../context/CarritoContext";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {db} from "../../firebase/firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

import Swal from "sweetalert2";

const ItemDetailContainer = () => {

  const[productSelected,setProductSelected] = useState({});
  const[getCounter,setGetCounter] = useState (true);
  const {id} = useParams();

  const{ addToCart, getQuantityById} = useContext(CartContext)

  let totalQuantity = getQuantityById(id);

  useEffect( () =>{
    let itemCollection = collection (db,"products")

    let refDoc = doc(itemCollection, id)

    getDoc(refDoc).then((res)=>{
      setProductSelected({id:res.id, ...res.data()})
    });
  },[id]);

  const onAdd = (cantidad) => {
    let item = {
      ...productSelected,
      quantity: cantidad,
    };
    addToCart(item)

    Swal.fire({
      position: "center",
      icon:"success",
      title:"Su producto fue agregado exitosamente",
      timer: 1200
    });
    setGetCounter(false);
  };

  return (
    <main>
    <ItemDetail
      getCounter={getCounter}
      productSelected={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}/>
    </main>
  );
};

export default ItemDetailContainer;