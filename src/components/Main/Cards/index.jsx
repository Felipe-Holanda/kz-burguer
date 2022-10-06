import './style.css';



export default function Cards(props) {

    const notify = () => props.toast.success('Produto adicionado ao carrinho!');
    const notifyError = () => props.toast.error('Produto já adicionado ao carrinho!');

    function addCart() {
        if (props.cart.find((product) => product.name === props.name)) {
            notifyError()
        } else {
            props.setCart([...props.cart, props])
            notify()
        }
    }

    return (
        <li className='cards'>
            <img src={props.img} alt={`Foto de ${props.name}`} />
            <div>
                <h3>{props.name}</h3>
                <small>{props.category}</small>
                <p>R$ {props.price.toFixed(2)}</p>
                <button onClick={() => { addCart(props) }}>Adicionar</button>
            </div>
        </li>
    )
}