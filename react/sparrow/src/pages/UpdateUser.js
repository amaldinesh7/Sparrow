import React from 'react';
import { withRouter } from'react-router-dom';
import axios from 'axios';

import Input from '../components/shared/UIElements/Input';
import Button from '../components/shared/UIElements/Button';
import './NewUser.css';


class UpdateUser extends React.Component {

    state = { users:{}, showConfirmModal:false}

    uId = this.props.match.params.id;

    fetchUsers = () => {
        axios.get(`http://localhost:81/models/${this.uId}`)
              .then(response => {
                const tempUsers = Array.from(response.data);
                for (var j = 0; j < tempUsers.length; j++){
                  tempUsers[j].id = tempUsers[j].phone;
                  }
                this.setState({users:tempUsers[0]});
              })
              .catch(error => {
                console.log(error);
              });
      };
    onUserInput = e => {
        const {id,value} = e.target
        // this.setState({[e.target.id]:e.target.value});  
        this.setState(prevState  => ({
            users: {                   
                ...prevState.users, 
                [id]:value 
            }
        }))
    }

    userUpdateHandler = event => {
        event.preventDefault();
        console.log(this.state);
        axios.put('http://localhost:81/models', {
            name: this.state.users.name,
            email: this.state.users.email,
            phone: this.state.users.phone,
            dob: this.state.users.dob,
            id:this.uId
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };


    componentDidMount(){
        this.fetchUsers() 
    }
     
    
    render(){
        return (
            <form className="user-form" onSubmit={this.userUpdateHandler}>
                <Input id="name" type="text" label="Name" value={this.state.users.name} onChange={this.onUserInput}/>
                <Input id="phone" type="number" label="Phone Number" value={this.state.users.phone} onChange={this.onUserInput}/>
                <Input id="dob" type="date" label="Date of Birth" value={this.state.users.dob} onChange={this.onUserInput}/>
                <Input id="email" type="text" label="Email" value={this.state.users.email} onChange={this.onUserInput}/>
                <Button type="submit" adduser>
                    Update User
                </Button>
            </form>
        )
    }
    
};

export default withRouter(UpdateUser);