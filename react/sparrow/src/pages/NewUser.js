import React from 'react';
import axios from 'axios';

import Input from '../components/shared/UIElements/Input';
import Button from '../components/shared/UIElements/Button';
import Modal from '../components/shared/UIElements/Modal'
import './NewUser.css'

class NewUser extends React.Component {
    state = {name:'',phone:'',dob:'',email:'',showConfirmModal:false};

    userSubmitHandler = event => {
        event.preventDefault();
        axios.post('http://localhost:80/models', {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            dob: this.state.dob
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    onUserInput = e => {
        this.setState({[e.target.id]: e.target.value});  
    }

    showDeleteWarningHandler = () => {
        this.setState({showConfirmModal:true});
    };

    cancelDeleteHandler = () => {
        this.setState({showConfirmModal:false});
        this.setState({name:'',phone:'',dob:'',email:''});
    };

    render(){
        return (
            <React.Fragment>

                <Modal
                show = {this.state.showConfirmModal}
                onCancel = {this.cancelDeleteHandler}
                header="Success!"
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button onClick={this.cancelDeleteHandler} danger>OK</Button>
                    </React.Fragment>
                }>
                <p> User Created Successfully!</p>
                </Modal>

                <form className='user-form' onSubmit={this.userSubmitHandler}>
                    <Input id="name" type="text" label="Name"  value={this.state.name} onChange={this.onUserInput}/>
                    <Input id="phone" type="number" label="Phone Number"  value={this.state.phone} onChange={this.onUserInput}/>
                    <Input id="dob" type="date" label="Date of Birth"  value={this.state.dob} onChange={this.onUserInput}/>
                    <Input id="email" type="text" label="Email"  value={this.state.email} onChange={this.onUserInput}/>
                    <Button type="submit" onClick={this.showDeleteWarningHandler} adduser>
                        Add User
                    </Button>
                </form>  
            </React.Fragment>
        );
    }
};

export default NewUser;