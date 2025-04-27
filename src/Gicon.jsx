import React from 'react';
import './less/giconfont.less'
export default function Gicon(props){
  const className="g-icon g-icon-"+props.type;
  return props.path?(<i className={className} style={props.style}>
    {Array(+props.path).fill(0).map((item,index)=><span className={`path${index+1}`} key={index} />)}
  </i>):(<i className={className} style={props.style}/>);
}