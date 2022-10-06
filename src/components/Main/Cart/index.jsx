import CartProducts from '../CartProducts'

import './index.css'


export default function Cart({ cart, setCart }) {


    function verifyCart() {
        if (cart.length === 0) {
            return <h3>Seu carrinho está vazio!</h3>
        } else {
            return (
                <>
                    {cart.map((product) => {
                        return (
                            <CartProducts
                                key={product.name}
                                name={product.name}
                                image={product.img}
                                price={product.price}
                                cart={cart}
                                setCart={setCart}
                            />
                        )
                    })}
                </>
            )
        }
    }

    function cartFooter() {
        if (cart.length === 0) {
            return <div><br /></div>
        } else {
            const total = cart.reduce((acc, curr) => acc + curr.price, 0)
            return (
                <div className='cartTotal'>
                    <hr />
                    <section>
                        <p className='Bolder'>Valor Total</p>
                        <p className='semi'>R$ {total.toFixed(2)}</p>
                    </section>
                    <button onClick={() => { setCart([]) }}>Esvaziar Carrinho</button>
                </div>
            )
        }
    }

    return (
        <aside>
            <div className='cartHeader'>
                <h2>Carrinho de Compras</h2>
            </div>
            <ul>
                {verifyCart()}
                {cartFooter()}
            </ul>

        </aside>
    )
}