import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar'> 
        <h2>
            <Link to={'/'}> {/*não se usa a tag 'a' em React*/}
                Blog
            </Link>
        </h2>
        <ul>
            <li>
                <Link to={'/'}> 
                    Home
                </Link>
            </li>

            <li>
                <Link to={'/new'} className='btnNew'>
                    New Post
                </Link>
            </li>
        </ul>
    </nav>
  )
}
