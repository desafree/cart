import React from 'react'

function ProductPreview(props) {
    return(
        <div  className='prodContProva'>
            <div className='productContainer'>
                <h3>{props.title}</h3>
                <img src={props.img} alt={props.description}></img>
                <p>{props.description}</p>
                <button href='#' onClick={props.add} id={props.title} className='addToCart'>Add to Cart</button>
                <h4>{props.price} $</h4>
                </div>

        </div>
    )
}

export default ProductPreview 