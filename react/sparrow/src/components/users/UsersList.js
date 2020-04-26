import React from 'react';
import Image from '../../images/loader.svg';


import UserItem from './UserItem';
import Card from '../shared/UIElements/Card';
import './UsersList.css';

const UsersList = props => {
    if (props.count === 'nothing') {
        return (
            <div className="no-user-found loader">
                <center><img alt="Loader" src={Image}/></center>
            </div>
        );
    }

    if (props.count === '0') {
        return (
            <div className="no-user-found">
                <Card>
                    <h2>No users found! Maybe create one ?</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className="users-list">
            {props.items.map(user => (
                <UserItem key={user.id} id={user.id} name={user.name} />
            ))}
        </ul>
    );
};

export default UsersList;