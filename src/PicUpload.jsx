import React from 'react';
import {Icon,Upload,message,Modal} from 'antd';
import NetUitl from './NetUitl';
function beforeUpload(file) {
  const isJPG = file.type.indexOf('image')>-1;
  if (!isJPG) {
    message.error('只能上传图片!');
  }
  const isLt2M = file.size / 1024 / 1024 < 3;
  if (!isLt2M) {
    message.error('只能上传小于3M的图片!');
  }
  return isJPG && isLt2M;
}
export function UploadButton(props){
  return (
    <div>
        <Icon type="plus" />
        <div className="ant-upload-text">{props.word?props.word:"Upload"}</div>
    </div>
  )
}

class PicUpload extends React.Component {
  constructor(props) {
    super(props);
    const fileList=this.props.value?this.props.value.map(item=>Object.assign(item,{uid:item.id?item.id:item.url})):[];
    this.state = {
        fileList,
        previewVisible:false,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
        fileList:nextProps.value?nextProps.value.map(item=>Object.assign(item,{uid:item.id?item.id:item.url})):[]
    });
  }
  handleChange = ({ file,fileList }) => {
    if(!file.status){//beforeUpload返回false时也会触发handleChange
      fileList=this.state.fileList
    }
    if(file.status=='error'){
      message.error("上传失败，请重试");
      fileList=fileList.filter(item=>item.status!="error");
    }
    const list=[];
    fileList.forEach(item=>{
        if(item.response){
            if(item.response.status==10200){
                list.push(Object.assign(file.response.data,{uid:file.response.data.id?file.response.data.id:file.response.data.url}));
            }else{
                message.error("文件："+item.name+"上传失败，请重试")
            }
        }else{
            list.push(item)
        }
    })
    this.setState({fileList:list});
    if(list.every(item=>!item.status)){
        this.triggerChange(list);
    }
    
  }
  triggerChange = (fileList) => {
    const onChange = this.props.onChange;
    const list=fileList.map(item=>{
            let obj=item.response?item.response.data:item;
            return obj;
        });
    if (onChange) {
      onChange(list);
    }
  }
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
  handleCancel=()=>{
    this.setState({
      previewVisible:false
    })
  }
    handleRemoveImg=(file)=>{
        const type=this.props.type?this.props.type:"commodities";
        return new Promise(function(resolve,reject){
        NetUitl.post('/api/v1/pictures/'+type+'/discard',file,(res)=>{
            if(res.status==10200){
            resolve(true)
            }else{
            message.error(res.msg);
            reject('error')
            }
        })
        }).catch(function(error){
            return false;
        });
    }
  render() {
    const {word,num}=this.props;
    let fileList=this.state.fileList;
    if(num) fileList=fileList.slice(0,num);
    return (<span>
        <Upload
          action="/api/v1/pictures"
          listType="picture-card"
          name="imgFile"
          fileList={fileList}
          showUploadList={{showPreviewIcon:true, showRemoveIcon:this.props.disabled?false:true}}
          beforeUpload={beforeUpload}
          accept={this.props.accept?this.props.accept:"image/jpg,image/jpeg,image/png,image/gif"}
          multiple={!!this.props.multiple}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          onRemove={this.handleRemoveImg}
          data={this.props.data}
        >
            {this.state.fileList.length<num && !this.props.disabled?<UploadButton word={word?word:"Upload"}/>:null}
        </Upload>
        <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
        </Modal>
        </span>
    );
  }
}
export default PicUpload;