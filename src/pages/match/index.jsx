import { List, Avatar, Space,Drawer ,Form, Button, Col, Row, Input, Select, DatePicker,Upload} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'umi';
import { get } from 'lodash';
import "./index.less";
import ProDescriptions from '@ant-design/pro-descriptions';
import { InboxOutlined } from '@ant-design/icons';

// for(let i=0;i<3;i++) {
//   listData.push({
//     href: 'https://ant.design',
//     title: `ant design part ${i}`,
//     //title: `matchesList.obj.questionList[x.name]`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     // description:
//     //   'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ListShow = (props)=>{
  const [showDetail, setShowDetail] = useState(false);
  const [currentRow, setCurrentRow] = useState();
  const listData=[];
  const { Dragger } = Upload;
  useEffect(() => {
    props.dispatch({
      type: 'MatchesListBack/fetchMatchesList',
      payload: { 
      },
    });
    return () =>{}
  }, []);
  
 const {matchesList} = props;  
 if(matchesList.obj){
  console.log(props);
  console.log(matchesList)
  console.log("match is"+matchesList.obj.questionList);

  //for(x in matchesList.obj.questionList.length){
  for(let i=0; i<matchesList.obj.questionList.length; i++) {
  listData.push({
    
    
    title: matchesList.obj.questionList[i].name,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    img: 'http://172.17.71.219'+matchesList.obj.questionList[i].image,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:matchesList.obj.questionList[i].short_content,
     
      });
    }
  }


 return (
  <List

    itemLayout="vertical"
    size="large"
    
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 13,
    }}
    dataSource={listData}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            
            height={200}
            width={200}
            alt="logo"
            src={item.img}
          />
        }
        
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a 
            onClick={() => {
              setShowDetail(true);
              setCurrentRow(item.title)
            }}
          >{item.title}</a>}
          
          description={item.description}
        />
        {item.content}
        <Drawer
          width={600}
          title={currentRow}
          visible={showDetail}
          mask={false}
        
          onClose={() => {        
            setShowDetail(false);
            setCurrentRow(false);
          }}
          closable={true}
        >  
          {(
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
  <Col span={12}>
    <Form.Item
      name="name"
      label="Name"
      rules={[{ required: true, message: 'Please enter user name' }]}
    >
      <Input 
      text={currentRow}
      placeholder={currentRow} />
    </Form.Item>
  </Col>
  <Col span={12}>
    <Form.Item
      name="url"
      label="Url"
      rules={[{ required: true, message: 'Please enter url' }]}
    >
      <Input
        style={{ width: '100%' }}
        addonBefore="http://"
        addonAfter=".com"
        placeholder="Please enter url"
      />
    </Form.Item>
  </Col>
</Row>
            <Row gutter={16}>
  <Col span={12}>
    <Form.Item
      name="owner"
      label="Owner"
      rules={[{ required: true, message: 'Please select an owner' }]}
    >
      <Select placeholder="Please select an owner">
        <Option value="xiao">Xiaoxiao Fu</Option>
        <Option value="mao">Maomao Zhou</Option>
      </Select>
    </Form.Item>
  </Col>
  <Col span={12}>
    <Form.Item
      name="type"
      label="Type"
      rules={[{ required: true, message: 'Please choose the type' }]}
    >
      <Select placeholder="Please choose the type">
        <Option value="private">Private</Option>
        <Option value="public">Public</Option>
      </Select>
    </Form.Item>
  </Col>
</Row>
            <Row gutter={16}>
  <Col span={12}>
    <Form.Item
      name="approver"
      label="Approver"
      rules={[{ required: true, message: 'Please choose the approver' }]}
    >
      <Select placeholder="Please choose the approver">
        <Option value="jack">Jack Ma</Option>
        <Option value="tom">Tom Liu</Option>
      </Select>
    </Form.Item>
  </Col>
  <Col span={12}>
    <Form.Item
      name="dateTime"
      label="DateTime"
      rules={[{ required: true, message: 'Please choose the dateTime' }]}
    >
      <DatePicker.RangePicker
        style={{ width: '100%' }}
        getPopupContainer={trigger => trigger.parentElement}
      />
    </Form.Item>
  </Col>
</Row>
            <Row gutter={16}>
              <Col span={24}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
              {
                required: true,
                message: 'please enter url description',
              },
            ]}
            >
              <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>

        <Dragger 
action="F:\photostorge"
>
    <p className="ant-upload-drag-icon">
      <InboxOutlined/>
    </p>
    <p className="ant-upload-text">点击或者拖拽文件进行上传</p>
</Dragger>

</Form>
          // <ProDescriptions
          //   column={2}
          //   title={currentRow}

            
            
          // />

          // <div id="container">
          //   <div id="contains">
          //     ss
          //   </div>
          //   <div id="right-sidebar">
          //     ss
          //   </div>
          // </div>
        )}  
          
        </Drawer>
      </List.Item>
      
    )}
    
  />
 )
}

//export default ListShow
export default  connect(({
  MatchesListBack,
}) => ({
  matchesList: get(MatchesListBack, 'matchesList', []),
 
}))(ListShow);