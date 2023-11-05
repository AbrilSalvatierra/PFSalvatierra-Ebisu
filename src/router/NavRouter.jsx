import CarritoPage from "../pages/CarritoPage/CarritoPage";
import Checkout from "../components/Checkout/Checkout";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ContactPage from "../pages/ContactPage"

export const routes = [
    {
        id: "home",
        path: "/" ,
        Element: ItemListContainer,
    },
    {
        id: "category",
        path: "/category/:categoryName",
        Element : ItemListContainer,
    },
    {
        id: "carrito",
        path: "/carrito",
        Element : CarritoPage,
    },
    {
        id: "detalle",
        path: "/item/:id",
        Element : ItemDetailContainer, 
    },
    {
        id: "checkout",
        path: "/checkout",
        Element : Checkout,
    },
    
    {
        id: "contact",
        path: "/contact",
        Element : ContactPage,
    },
]
