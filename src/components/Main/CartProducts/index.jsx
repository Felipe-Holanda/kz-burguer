import './style.css';

export default function CartProducts(props) {

    function removeProduct(argument) {
        const newCart = props.cart.filter((product) => {
            return product.name !== argument
        })
        props.setCart(newCart)
    }

    return (
        <li>
            <section>
                <img src={props.image} alt={props.name} />
                <div>
                    <h3>{props.name}</h3>
                    <p>R$ {props.price.toFixed(2)}</p>
                </div>
            </section>
            <small className="span" onClick={(e) => { removeProduct(props.name) }}>Remover</small>
        </li>
    )
}