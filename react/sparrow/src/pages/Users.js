import React from "react";
import axios from 'axios';

import UsersList from "../components/users/UsersList";
import MainNavigation from "../components/shared/Navigation/MainNavigation"
// import { render } from "@testing-library/react";

class Users extends React.Component {
    state = { users:[] ,count:'nothing'}

    fetchUsers = () => {
        axios.get('http://localhost:80/models')
              .then(response => {
                const tempUsers = Array.from(response.data);
                for (var j = 0; j < tempUsers.length; j++){
                  tempUsers[j].id = tempUsers[j].phone;
                  }
                  if(response.data.length === 0) {
                    this.setState({count:'0'});
                  }
                this.setState({users:Array.from(tempUsers), count:`${tempUsers.length}`});
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
          <React.Fragment>
            <MainNavigation />
            <UsersList items={this.state.users} count={this.state.count} />
          </React.Fragment>
        );
    }
    
}

export default Users;
