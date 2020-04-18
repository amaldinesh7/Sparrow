import React from 'react';
import { withRouter } from'react-router-dom';
import axios from 'axios';

import Input from '../components/shared/UIElements/Input';
import Button from '../components/shared/UIElements/Button';
import './NewUser.css';

const USERS = [
    {
        id:'9745597425',
        name:'Amal Dinesh',
        dob:'1999-07-16',
        email:'amalkdinesh@gmail.com',
        phone:'9745597425'
    },
    {
        id:'7012290437',
        name:'Aparna Satheesh',
        dob:'1998-06-05',
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

class UpdateUser extends React.Component {
    uId = this.props.match.params.id;
    currentUser = USERS.find(u => u.id === this.uId);
    state = {
        name:this.currentUser.name,
        phone:this.currentUser.phone,
        dob:this.currentUser.dob,
        email:this.currentUser.email,
        showConfirmModal:false}
    
    onUserInput = e => {
        this.setState({[e.target.id]: e.target.value});  
    }

    userUpdateHandler = event => {
        event.preventDefault();
        console.log(this.state);
        axios.put('http://localhost:80/models', {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            dob: this.state.dob,
            id:this.uId
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    render(){
        return (
            <form className="user-form" onSubmit={this.userUpdateHandler}>
                <Input id="name" type="text" label="Name" value={this.state.name} onChange={this.onUserInput}/>
                <Input id="phone" type="number" label="Phone Number" value={this.state.phone} onChange={this.onUserInput}/>
                <Input id="dob" type="date" label="Date of Birth" value={this.state.dob} onChange={this.onUserInput}/>
                <Input id="email" type="text" label="Email" value={this.state.email} onChange={this.onUserInput}/>
                <Button type="submit" adduser>
                    Update User
                </Button>
            </form>
        )
    }
    
};

export default withRouter(UpdateUser);