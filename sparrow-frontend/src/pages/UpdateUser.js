import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import usersApi from '../api/usersApi';
import Input from '../components/shared/UIElements/Input';
import MainNavigation from "../components/shared/Navigation/MainNavigation"
import Button from '../components/shared/UIElements/Button';
import Modal from '../components/shared/UIElements/Modal'
import './NewUser.css';



class UpdateUser extends React.Component {

  state = { users: { name: '', phone: '', dob: '', email: '' }, showConfirmModal: false, message: '', headerMessage: '', status: null }

  uId = parseInt(this.props.match.params.id);
  tempUsers = this.props.users.filter(users => users.id === this.uId)[0];

  //Storing the users object in local state from redux
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
    usersApi.put('/models', {
      name: this.state.users.name,
      email: this.state.users.email,
      phone: this.state.users.phone,
      dob: this.state.users.dob,
      id: this.uId
    })
      .then((response) => {
        this.setState({ message: "User Updated Successfully!", headerMessage: "Success!", status: true });
      })
      .catch((error) => {
        this.setState({ message: "User Updation Failed! Please Try Again", headerMessage: "Failed!", status: false });
      });
  };

  showPromptHandler = () => {
    this.setState({ showConfirmModal: true });
  };


  closePropmtHandler = () => {
    this.setState({ showConfirmModal: false });
    if (this.state.status) {
      this.props.history.push("/users");
    }
  };


  componentDidMount() {
    this.setUsersState()
  }


  render() {
    return (
      <React.Fragment>
        <MainNavigation />
        <Modal
          show={this.state.showConfirmModal}
          header={this.state.headerMessage}
          footerClass="place-item__modal-actions"
          footer={
            <React.Fragment>
              <Button onClick={this.closePropmtHandler} responsePrompt>OK</Button>
            </React.Fragment>
          }>
          <p> {this.state.message}</p>
        </Modal>
        <form className="user-form" onSubmit={this.userUpdateHandler}>
          <Input id="name" type="text" label="Name" value={this.state.users.name} onChange={this.onUserInput} />
          <Input id="phone" type="number" label="Phone Number" value={this.state.users.phone} onChange={this.onUserInput} />
          <Input id="dob" type="date" label="Date of Birth" value={this.state.users.dob} onChange={this.onUserInput} />
          <Input id="email" type="text" label="Email" value={this.state.users.email} onChange={this.onUserInput} />
          <Button type="submit" adduser onClick={this.showPromptHandler}>
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
