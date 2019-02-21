import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props){
    super(props);

    this.state = {
        count: 0,
        test : "initial",
    }
  }

  addCounter(){

      this.setState((state, props) => ({
        count : state.count + 1,
        test : "changed"
    }))

    this.setState((state, props) => ({
        count : state.count + 1,
        test : "changed"
    }))

  }
  render() {
      //this.props.count = 6;
    return (
     <div className="c_wrap">
       <h1>count : {this.state.count} -- {this.state.test}</h1>
       <button onClick={this.addCounter.bind(this)} type="button">add count</button>
     </div>
    );
  }

  componentDidMount(){
      console.log("I am mpounted...")
  }

  componentDidUpdate(){
      console.log("I got updated....")
  }
}

 
