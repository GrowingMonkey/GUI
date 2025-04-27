import React from 'react';
import {Input} from 'antd';
const Search = Input.Search;
class SearchPanel extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:this.props.defaultValue||null,
    }
  }
  onChange=(e)=>{
    this.setState({
      value:e.target.value
    })
  }
  componentWillReceiveProps(nextProps){
    if("value" in nextProps){
      this.setState({
        value:nextProps.value
      })
    }
  }
  render(){
    const style={
      width:this.props.width?this.props.width:"316px",
      float:this.props.float||"right",
    }
    const props = {
      onChange: this.onChange,
    }
    return (<Search
        style={style}
        {...props}
        {...this.props}
        enterButton
      />)
  }
}
export default SearchPanel;