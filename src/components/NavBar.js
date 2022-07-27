import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (

        <div className='navbar-header'>
            <div className='navlink' >
                <NavLink className="link2 logo" to="/"><img src="../../Media/guilimaShopLogo.png" /></NavLink>
                <NavLink activeClassName='active' className="link2" to="/skateboards" >Skateboards</NavLink>
                <NavLink activeClassName='active' className="link2" to="/bmx">BMX</NavLink>
                <NavLink activeClassName='active' className="link2" to="/trucks">Trucks</NavLink>
                <NavLink activeClassName='active' className="link2" to="/shoes">Shoes</NavLink>
                <NavLink activeClassName='active' className="link2" to="/products">Marketplace</NavLink>
            </div>
        </div>
    )
}

export default Navbar