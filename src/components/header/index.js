import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    
    static path = '/';
    
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'> 
                    <a className='navbar-brand' href='#'>Brand</a> 
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item active'><Link to='/'>Home</Link></li>
                            <li className='nav-item dropdown'><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div> 
            </nav> 
        );
    }
    
}
