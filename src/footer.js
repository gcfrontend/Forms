import React, { Component } from 'react';

export default (props) => {
  function render(){
    return (
      <div className="footer_wrap">
         <h1>Footer {props.name}</h1>
       </div>
    )
  }
  return render()
}

// export default Footer;

 
