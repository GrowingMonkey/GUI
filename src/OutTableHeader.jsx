import React from 'react';

export default function (props){
    return (
        <p className="out-table-header">
        {props.list.map(item=><span key={item.text} style={{width:`${item.width}px`}}>{item.text}</span>)}
        </p>
    )
}