import React from "react";

import UsersList from "../components/users/UsersList";

const Users = () => {
	const USERS = [
        {
            id:'9745597425',
            name:'Amal Dinesh'

        },
        {
            id:'7012290437',
            name:'Aparna Satheesh'

        },
        {
            id:'9994599945',
            name:'Aswin A'

        },
        {
            id:'9947889947',
            name:'Alba Terese Baby'

        }

    ];

	return <UsersList items={USERS} />;
};

export default Users;
