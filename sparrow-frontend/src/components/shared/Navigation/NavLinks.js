import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

class NavLinks extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '604711657196-dlfe9tsb18bk696qjvo27acenihcuebv.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
            })
        })
    }

    onSignOutClick = () => {
        this.auth.signOut();
        localStorage.setItem('accessToken', [null]);
    }
    render() {
        return (
            <ul className="nav-links">
                <li>
                    <NavLink to="/users" exact>All Users</NavLink>
                </li>
                <li>
                    <NavLink to="/newuser">Add User</NavLink>
                </li>
                <li>
                    <NavLink className="logout" to="/" onClick={this.onSignOutClick}>Logout</NavLink>
                </li>
            </ul>
        );
    }

};

export default NavLinks;