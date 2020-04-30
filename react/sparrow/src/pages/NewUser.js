import React from 'react';

import usersApi from '../api/usersApi';
import Input from '../components/shared/UIElements/Input';
import Button from '../components/shared/UIElements/Button';
import Modal from '../components/shared/UIElements/Modal'
import './NewUser.css'
import MainNavigation from '../components/shared/Navigation/MainNavigation';

class NewUser extends React.Component {
    state = { name: '', phone: '', dob: '', email: '', showConfirmModal: false, message: '', headerMessage: '' };

    userSubmitHandler = event => {
        event.preventDefault();

        if (this.state.name === '' || this.state.dob === '' || this.state.phone === '' || this.state.email === '') {
            this.setState({ message: "Please fill the input fields" });
        }
        else {
            usersApi.post('/models', {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                dob: this.state.dob
            })
                .then((response) => {
                    this.setState({ message: "User Created Successfully!", headerMessage: "Success!" });
                })
                .catch((error) => {
                    this.setState({ message: "User Creation Failed! Please Try Again", headerMessage: "Failed!" });
                });
        }
    };

    onUserInput = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    showPromptHandler = () => {
        this.setState({ showConfirmModal: true });
    };

    cancelDeleteHandler = () => {
        this.setState({ showConfirmModal: false });
        this.setState({ name: '', phone: '', dob: '', email: '' });
    };

    render() {
        return (
            <React.Fragment>
                <MainNavigation />
                <Modal
                    show={this.state.showConfirmModal}
                    onCancel={this.cancelDeleteHandler}
                    header={this.state.headerMessage}
                    footerClass="place-item__modal-actions"
                    footer={
                        <React.Fragment>
                            <Button onClick={this.cancelDeleteHandler} danger>OK</Button>
                        </React.Fragment>
                    }>
                    <p> {this.state.message}</p>
                </Modal>

                <form className='user-form' onSubmit={this.userSubmitHandler}>
                    <Input id="name" type="text" label="Name" value={this.state.name} onChange={this.onUserInput} />
                    <Input id="phone" type="number" label="Phone Number" value={this.state.phone} onChange={this.onUserInput} />
                    <Input id="dob" type="date" label="Date of Birth" value={this.state.dob} onChange={this.onUserInput} />
                    <Input id="email" type="text" label="Email" value={this.state.email} onChange={this.onUserInput} />
                    <Button type="submit" onClick={this.showPromptHandler} adduser>
                        Add User
                    </Button>
                </form>
            </React.Fragment>
        );
    }
};

export default NewUser;