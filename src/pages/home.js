import React, { Component } from 'react';
import Counter from '../components/counter';
import {ListDisplay} from '../components/ListDisplay';

export default class Home extends Component {
constructor(props){
  super(props);

  this.state = {
    list: [
      'mylist 1',
       'mylist 2'
      ]
  }

  this.deleteList = this.deleteList.bind(this);
}

deleteList(id){
  this.setState((state, props) => {
    state.list.splice(id, 1)

    return {
      list: state.list
    }
  }
    
  )
}

addList(){
  const handler = (cur_state, cur_props) => {
    cur_state.list.push('mylist ' + (cur_state.list.length + 1))
    return {
    list : cur_state.list
    }
  }

  this.setState(handler)
}
  render() {
    return (
     <div className="home_wrap">
       <h1>Home page</h1>
       <Counter />

       <ListDisplay deleteList={this.deleteList} addList={ this.addList.bind(this) } list={this.state.list} />
 
     </div>
    );
  }
}



// arrow = arg => ({"hello": "sdsd"})

// //arrow()
// //object

 
