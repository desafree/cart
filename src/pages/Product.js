import './Product.css';
import React from 'react';
import Nav from '../page-elements/navigation';
import ProductPreview from '../page-elements/ProductPreviw';
import '../App.css';


function Product(props) {
    

    return(
        <div className='prodCont'>
            <Nav></Nav>
            <div className='prodMenu'>
                {props.products.map((item,key)=>{
                    return <ProductPreview key={key} price={item.price} title={item.title} img={item.img} description={item.description} add={props.add} substract={props.substract}/>
                })}
            </div>
        </div>
    )
}

export default Product;