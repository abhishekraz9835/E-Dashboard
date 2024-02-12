import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div>
            
            <img alt='logo' className='logo' src="https://futureworlds.com/wp-content/uploads/2017/06/Pepsi-Logo.png"></img>
            {auth ?
                <ul className="nav-ul">
                    <li><Link to="/" >Product</Link></li>
                    <li><Link to="/add" >Add Product</Link></li>
                    <li><Link to="/update" >Update Product</Link></li>
                    <li><Link to="/profile" onClick={logout}>Profile</Link></li>
                    <li><Link onClick={logout} to="/signup" >Logout ({JSON.stringify(auth).name}) </Link></li>
                </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li><Link to="/signup" >Signup</Link></li>
                    <li><Link to="/login" >Login</Link></li>
                </ul>
            }

        </div>
    )
}

export default Navbar;