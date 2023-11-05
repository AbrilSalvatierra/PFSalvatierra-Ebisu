import { useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { getDocs, collection, query, where} from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryName} = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta = undefined;

    if(!categoryName){
      consulta = productsCollection;
    }else{
      consulta = query (productsCollection, where ("category", "==", categoryName));
    } 

    getDocs(consulta).then(res => {
      const newArray = res.docs.map(product => {
        return{...product.data(), id:product.id}
      });
      setItems(newArray)
    });
  }, [categoryName]);

  return (
    <main>
      {items.length=== 0 ? <div className="loader-container"><PacmanLoader color="#ffffff" size={70}/></div> : <ItemList items={items}/>
      }
    </main>
  );
};

export default ItemListContainer;