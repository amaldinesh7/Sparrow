import React from 'react';
// import axios from 'axios';
import LandingPage from './LandingPage';

class App extends React.Component{
  // state = { users:{}, currentUser:''}
  // uId = 9188548407
  
  // onButtonClick = () => {
  //   axios.get('http://localhost:80/models')
  //         .then(response => {
  //           const tempUsers = Array.from(response.data);
  //           for (var j = 0; j < tempUsers.length; j++){
  //             tempUsers[j].id = tempUsers[j].phone;
  //             }
  //           this.setState({users:tempUsers[0]});
  //           this.setState({currentUser:this.state.users.find(u => u.id === this.uId)});
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  // }


  render() {
    return(
      <LandingPage />
    )
  }
}


export default App;