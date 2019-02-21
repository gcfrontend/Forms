import React, { Component } from 'react';
import Header from './header';
import Main from './main';
import Nav from "./nav";
import Footer from './footer';
import { BrowserRouter, } from "react-router-dom";


export default class Wrap extends Component {
  render() {

    var data = [{name: "Quick Quid", rating: "4.0"},
                {name: "Sunny", rating: "3.8"},
                {name: "POunds to pocket", rating: "3.6"}]

    return (
      
     <div>
       <BrowserRouter>
       <div>
        <Header name="Lendingstream" content="logo"/>
        <div className="mid_wrapper">
          <Main data={data}/>
          <Nav/>
        </div>
        
        <Footer name="ls"/>

        </div>
        
        </BrowserRouter>
     </div>
    );
  }
}



// //file A

// var a = 5;
// // export default var b = 7;

// export var d = 8;
// export var e = 10;

// //file B

// import {d} from '.\A'; 