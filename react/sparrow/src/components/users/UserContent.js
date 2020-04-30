import React from 'react';

import UserInfo from './UserInfo'
import './UserContent.css';

const UserContent = props => {
    console.log(props.items);
    return (
        <ul className="user-content">
            {props.items.map(user => (
                <UserInfo 
                    key={user.id} 
                    id={user.id} 
                    name={user.name} 
                    email={user.email} 
                    dob={user.dob} 
                    phone={user.phone} 
                />
            ))}
        </ul>
    );

};

export default UserContent;