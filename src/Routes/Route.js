import About from "../Component/About";
import Contact from "../Component/Contact";
import Home from '../Component/Home';
import Products from '../Component product/Products';
import ProductDetail from "../Component product/Productdetail";
import Cart from "../Component product/Cart";

export const routes = [
    {
        path: '/',
        component: Home 
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/products',
        component: Products
    },
    {
        path:"/products/:id",
        component:ProductDetail
    },
    {
        path: "/cart",
        component: Cart
    },
 
]
