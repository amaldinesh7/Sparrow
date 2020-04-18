import React from 'react';

import UserItem from './UserItem';
import Card from '../shared/UIElements/Card';
import './UsersList.css';

const UsersList = props => {
    if (props.items.length === 0) {
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