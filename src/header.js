import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
     <div className="headWrap">
       <h1>{this.props.name} {this.props.content}</h1>
     </div>
    );
  }
}
