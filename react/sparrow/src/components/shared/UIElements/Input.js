import React from 'react';

import './Input.css';
// import { render } from '@testing-library/react';

class Input extends React.Component{
  render(){
    return (
      <div className={`form-control`}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input 
          id={this.props.id} 
          type={this.props.type} 
          value={this.props.value} 
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Input;
