import Header from '../Header';
import Main from '../Main';
import Cart from '../Main/Cart';
import { useState, useEffect } from 'react';
import './global.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Global() {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
            .then((r) => r.json())
            .then((r) => setProducts(r));
    }, []);

    return (
        <>
            <ToastContainer
                autoClose={1000}
                position="top-center"
                limit={2}
            />
            <Header products={products} setProducts={setProducts} />
            <div className="whenDesktop">
                <Main products={products} cart={cart} setCart={setCart} toast={toast} />
                <Cart cart={cart} setCart={setCart} />
            </div>
        </>
    )
}