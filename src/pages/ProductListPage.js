import React from 'react';
import {Link} from 'react-router-dom';
import '../css/ProductListPage.css'

const products = ['car', 'bike', 'motocycle'];

const list = products.map(product => (
    <li key={product}>
        <Link to={`/products/${product}`}>{product}</Link>
    </li>
))

const ProductListPage = (props) => {
    console.log(props);
    return ( 
        <div className="products">
            <h2>Lista prduktów</h2>
            <div>
                <ul>
                     {list} 
                </ul>
            </div>
               
        </div>
     );
}
 
export default ProductListPage;