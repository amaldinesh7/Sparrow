import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            <li>
                <NavLink to="/newuser">Add User</NavLink>
            </li>
            <li>
                <NavLink to="/auth">Logout</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;