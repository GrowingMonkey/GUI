
import React from 'react';
import {Modal} from 'antd';

export default function ZoomImg(ComponentClass) {
    return class ZoomImg extends React.Component {
        constructor(props){
            super(props);
            this.state=({
                showImg:false,
                imgUrl:"",
            })
        }
        ZoomImg=(e)=>{
            this.setState({
                showImg:true,
                imgUrl:e,
            })
        }
        handleCancel=()=>{
            this.setState({
                showImg:false
            })
        }
        render() {
            return (<div>
                <ComponentClass {...this.props} showImg={this.ZoomImg}/>
                <Modal className="g-preview-modal" visible={this.state.showImg} footer={null} onCancel={this.handleCancel}>
                    <img alt="" style={{ width: '100%' }} src={this.state.imgUrl} />
                </Modal>
                </div>)
        }
    }
}