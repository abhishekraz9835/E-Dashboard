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
            
            <img alt='logo' className='logo' src="https://tse3.mm.bing.net/th?id=OIF.nyO2U%2bLr%2bJb8lRpXbDWF9g&pid=Api&P=0&h=180"></img>
            
            {auth ?
                <ul className="nav-ul">
                    <h2 className='heading'>Welcome to Product Info website</h2>
                    <li><Link to="/" >Product</Link></li>
                    <li><Link to="/add" >Add Product</Link></li>
                    {/* <li><Link to="/update" >Update Product</Link></li> */}
                    <li><Link to="/profile" >Profile</Link></li>
                    <li><Link onClick={logout} to="/signup" >Logout ({JSON.stringify(auth).name}) </Link></li>
                </ul>
                :
                <ul className='nav-ul nav-right'>
                    <h2 className='heading'>Welcome to Product Info website</h2>
                    <li><Link to="/signup" >Signup</Link></li>
                    <li><Link to="/login" >Login</Link></li>
                </ul>
            }

        </div>
    )
}

export default Navbar;