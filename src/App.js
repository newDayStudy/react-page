import React from 'react';

import './App.css';
export  default  class App extends React.Component{
  render(){
    return (
        <div id='app'>
            {this.props.children}
        </div>
    )
  }
}
