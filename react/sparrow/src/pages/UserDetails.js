import React from 'react';
import { useParams } from 'react-router-dom';

import UserContent from '../components/users/UserContent';

const USERS = [
    {
        id:'9745597425',
        name:'Amal Dinesh',
        dob:'16-07-1999',
        email:'amalkdinesh@gmail.com',
        phone:'9745597425'
    },
    {
        id:'7012290437',
        name:'Aparna Satheesh',
        dob:'16-07-1999',
        email:'aparna@gmail.com',
        phone:'7012290437'

    },
    {
        id:'9994599945',
        name:'Aswin A',
        dob:'16-07-1998',
        email:'aswina@gmail.com',
        phone:'9994599945'

    },
    {
        id:'9947889947',
        name:'Alba Terese Baby',
        dob:'16-07-1999',
        email:'albateresebaby@gmail.com',
        phone:'9947889947'

    }
];

const UserDetails = () => {
    const uId = useParams().id;
    const details = USERS.filter(user=>user.id === uId);
    return <UserContent items={details} />;
};

export default UserDetails;