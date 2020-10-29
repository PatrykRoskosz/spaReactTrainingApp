import React from 'react';
import {Link} from 'react-router-dom'
import Product from '../components/Product'
import ProductsListPage from '../pages/ProductListPage'


const ProductPage = (props) => {
   console.log(props);
    return ( 
        <>
            <div>Strona produktu</div>
            <Product id={props.match.params.id}/>
            <Link to="/products">Powrut do listy produktów</Link>
        </>
     );
}
 
export default ProductPage;