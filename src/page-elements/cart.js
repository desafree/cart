import React from 'react';
import Nav from './navigation';


function Cart(props) {
    let filterCart = props.products.filter((item)=>{
        if(item.qty>=1) {
            return true
        }
        else{
            return false
        }
        
    })


    let subTotal = filterCart.reduce((total,item)=>{
        return total + (item.qty * item.price)
    },0)

    
    return(
        <div className='cartContainer'>
            <Nav></Nav>
            <div className='cartBoxes'>
                {filterCart.map((item,key)=>{
                    return <div key={key} className='cartBox'>
                        <h3>{item.title}</h3>
                        <img src={item.img} alt={item.description}></img>
                        <h3>Quantity: {item.qty}</h3>
                        <button onClick={props.add} id={item.title} className='plus'>+</button>
                        <button onClick={props.substract} id={item.title} className='minus'>-</button>
                    </div>
                })}
            </div>

            <h3 className='total'>Subtotal: {subTotal}$</h3>

        </div>

    )
}

export default Cart 