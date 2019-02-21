import React, { Component } from 'react';
import Counter from './components/counter';
import Home from './pages/home';
import About from './pages/about';
import Application from './pages/Application';
import { Route } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
     <div class="main_wrap">
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/apply/" component={Application} />
       {/* <Counter /> */}

     </div>
    );
  }
}

//map syntax
//Array.map((item)=>{log(item)})

//arrow functions
// function fn_name(){ return "sdd" }
// function(){return "asd"}


//arrow function

 
