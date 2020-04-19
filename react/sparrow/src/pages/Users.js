import React from "react";
import axios from 'axios';

import UsersList from "../components/users/UsersList";
// import { render } from "@testing-library/react";

class Users extends React.Component {
    state = { users:[] }

    fetchUsers = () => {
        axios.get('http://localhost:81/models')
              .then(response => {
                const tempUsers = Array.from(response.data);
                for (var j = 0; j < tempUsers.length; j++){
                  tempUsers[j].id = tempUsers[j].phone;
                  }
                this.setState({users:Array.from(tempUsers)});
              })
              .catch(error => {
                console.log(error);
              });
      };

    componentDidMount(){
        this.fetchUsers()
    }

    render(){
        return (
             <UsersList items={this.state.users} />
        );
    }
    
}

export default Users;
