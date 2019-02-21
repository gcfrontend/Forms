import React from 'react';

export const ListDisplay = (props) => {

    function deleteList(id){
        props.deleteList(id);
    }

    const maper = (item, index) => {
        return (
            <li>{item} <button onClick={deleteList.bind(this, index)}>delete me</button></li>
        )
    }

    return (
        <div>
        <ul>
            {props.list.map(maper) } 
        </ul>
        <button onClick= {props.addList} >add more</button>
        </div>
    )

}