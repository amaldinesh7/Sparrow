import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import UserContent from '../components/users/UserContent';
import MainNavigation from "../components/shared/Navigation/MainNavigation";


class UserDetails extends React.Component {
  state = { users: [] }

  uId = this.props.match.params.id;

  fetchUsers = () => {
    axios.get(`http://localhost:80/models/${this.uId}`)
      .then(response => {
        const tempUsers = Array.from(response.data);
        for (var j = 0; j < tempUsers.length; j++) {
          tempUsers[j].id = tempUsers[j].phone;
        }
        this.setState({ users: Array.from(tempUsers) });
      })
      .catch(error => {
        console.log(error);
      });
  };



  // details = this.state.users.filter(user=>user.id === this.uId);  

  componentDidMount() {
    this.fetchUsers()
  }


  render() {
    return (
      <React.Fragment>
        <MainNavigation />
        <UserContent items={this.state.users} />
      </React.Fragment>
    )
  }

};

export default withRouter(UserDetails);