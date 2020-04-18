import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../shared/UIElements/Card';
import './UserItem.css';

const UserItem = props => {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/details`}>
                    <h2>{props.name}</h2>
                </Link>
            </Card>
        </li>
    );
};

export default UserItem;