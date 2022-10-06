import './index.css';

import Cards from './Cards';




export default function Main({ products, cart, setCart, toast }) {
    return (
        <main>
            <div className='vitrine'>
                {products.map((product) => {
                    return (
                        <Cards
                            key={product.id}
                            img={product.img}
                            name={product.name}
                            category={product.category}
                            price={product.price}
                            cart={cart}
                            setCart={setCart}
                            toast={toast}
                        />
                    )
                })}
            </div>
        </main>
    )
}