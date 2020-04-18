import React from 'react';
import axios from 'axios';


class App extends React.Component{
  async onButtonClick(){
    const response = await axios.get('http://localhost:8000/models');

  }

  render() {
    return(
      <button onClick={this.onButtonClick}> Get User Detials </button>
    )
  }
}


export default App;
