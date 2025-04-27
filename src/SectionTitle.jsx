import React from 'react';
export default function SectionTitle(props){
  const style={
    backgroundColor:props.backgroundColor?props.backgroundColor:"#f7f7f7",
    padding:"12px 0",
    paddingLeft:props.paddingLeft?props.paddingLeft:"36px",
    marginBottom:"12px"
  }
  let notice=null;
  if(props.notice){
    notice=(<span style={{marginLeft:"16px",color:"rgba(0,0,0,.43)",fontSize:"12px"}}>({props.notice})</span>)
  }
  return <div style={style}>{props.title}{notice}</div>
}