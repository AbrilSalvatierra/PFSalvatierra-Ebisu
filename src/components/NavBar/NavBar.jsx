import "./NavBar.css"
import CartWidget from '../Cart/CartWidget';
import logo from '../../assets/img/logo.gif';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";


export const NavBar = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection (db, "categories");

    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category)=>{
          return {...category.data(), id: category.id}
        })
        setCategories(arrayCategories)
      })
      .catch((err) => console.log(err));
  }, []);

 return (
  <>
  <nav>
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />Ebisu
    </Link>
    <ul className="pages">  
      <Link className="menu-page" to={"/"} >Home</Link>
      {categories.map((category) => (
        <Link className="menu-page" key={category.id} to={category.path}>
        <li  >{category.name}</li></Link>))}
      <Link className="menu-page" to="/contact">Contact</Link>
    </ul>
    <CartWidget/>
  </nav>
  </>
  );
};

export default NavBar;