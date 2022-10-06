import Logo from "./Logo";
import InputSearch from "./InputSearch";
import './index.css';

export default function Header({ products, setProducts }) {
    return (
        <header>
            <Logo />
            <InputSearch products={products} setProducts={setProducts} />
        </header>
    )
}