import { useEffect, useState } from 'react';
import './index.css';

export default function InputSearch({ setProducts, products }) {

    const [search, setSearch] = useState('');
    const [defaulted, setDefaulted] = useState([]);
    useEffect(() => {
        fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
            .then((r) => r.json())
            .then((r) => setDefaulted(r));
    }, []);


    function onSubmit(e) {
        e.preventDefault();
        setProducts(defaulted.filter((product) => {
            let filt = []
            filt.push(product.name.toLowerCase().includes(search.toLowerCase()))
            filt.push(product.category.toLowerCase().includes(search.toLowerCase()))
            return filt.includes(true)
        }))
    }

    function onReset() {
        setProducts(defaulted)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Digitar pesquisa" onChange={(e) => {
                if (e.target.value === '') {
                    onReset()
                } else {
                    setSearch(e.target.value)
                }
            }} />
            <button className="searchBtn">Pesquisar</button>
        </form>
    )
}