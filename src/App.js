import './App.css';
import React from 'react';
import Nav from './page-elements/navigation';
import { Link } from 'react-router-dom';

function App(props) {
    return(
        <div className='bg-home'>
            <Nav></Nav>
            <div className='text-box'>
                <h1>Be different</h1>
                <p>Buy before everyone get it......</p>
                <Link to='/products'>
                    <button>products</button>
                </Link>
                
            </div>

        </div>
    )
}

export default App;
