import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return(
        <nav className='navigation'>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/products'>
                    <li>Products</li>
                </Link>
            </ul>

            <div>
                <Link to='/cart'>
                    <button className='navButtom'>Cart</button>
                </Link>
            </div>
        </nav>
    )
}

export default Nav