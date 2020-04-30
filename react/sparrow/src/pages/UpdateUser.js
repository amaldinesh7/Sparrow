import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import usersApi from '../api/usersApi';
import Input from '../components/shared/UIElements/Input';
import MainNavigation from "../components/shared/Navigation/MainNavigation"
import Button from '../components/shared/UIElements/Button';
import './NewUser.css';



class UpdateUser extends React.Component {

  state = { users: { name: '', phone: '', dob: '', email: '' }, showConfirmModal: false }

  uId = parseInt(this.props.match.params.id);
  tempUsers = this.props.users.filter(users => users.id === this.uId)[0];


  setUsersState = () => {
    this.setState({ users: this.tempUsers })
  }

  onUserInput = e => {
    const { id, value } = e.target
    this.setState(prevState => ({
      users: {
        ...prevState.users,
        [id]: value
      }
    }))
  }

  userUpdateHandler = event => {
    event.preventDefault();
    console.log(this.state);
    usersApi.put('/models', {
      name: this.state.users.name,
      email: this.state.users.email,
      phone: this.state.users.phone,
      dob: this.state.users.dob,
      id: this.uId
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  componentDidMount() {
    this.setUsersState()
  }


  render() {
    return (
      <React.Fragment>
        <MainNavigation />
        <form className="user-form" onSubmit={this.userUpdateHandler}>
          <Input id="name" type="text" label="Name" value={this.state.users.name} onChange={this.onUserInput} />
          <Input id="phone" type="number" label="Phone Number" value={this.state.users.phone} onChange={this.onUserInput} />
          <Input id="dob" type="date" label="Date of Birth" value={this.state.users.dob} onChange={this.onUserInput} />
          <Input id="email" type="text" label="Email" value={this.state.users.email} onChange={this.onUserInput} />
          <Button type="submit" adduser>
            Update User
                </Button>
        </form>
      </React.Fragment>
    )
  }

};


const mapStateToProps = (state) => {
  return { users: state.users }
};

export default connect(mapStateToProps)(withRouter(UpdateUser));
