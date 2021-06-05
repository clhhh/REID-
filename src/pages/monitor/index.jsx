
import "./index.less"
import { Upload, message,Descriptions  } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  //action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  action:"http://localhost/",
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } 
    else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const sourse="//player.bilibili.com/player.html?aid=587752666&bvid=BV1NB4y1c7sN&cid=332373513&page=1" 

const monitor=()=>{
  return (
  
  <div id="container">
    {/* <div className="flex"> */}
    <div id="contents">
    
    <iframe width="780" height="540"src={sourse}
    scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    </div>

    
    <div  id="right-sidebar">
    
      <Dragger {...props}   >
      <p className="ant-upload-drag-icon">
      <InboxOutlined />
      </p>
      <p className="ant-upload-text">点击或者拖拽文件进行上传</p>
      
      </Dragger>,
    </div>
  </div>
  
   
  )
}


export default monitor;

