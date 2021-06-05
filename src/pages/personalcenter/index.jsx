import {  Card , Descriptions,Drawer,Form,Input, InputNumber, Button } from 'antd';
import "./index.less"
 import React, { useState, useEffect, useRef } from 'react';
 import { connect } from 'umi';
 import { get } from 'lodash';
 import cookie from 'react-cookies'
 import {  EditOutlined, EllipsisOutlined, SettingOutlined  } from '@ant-design/icons';
 const tabList = [
  {
    key: 'tab1',
    tab: '我的信息',
  },
  {
    key: 'tab2',
    tab: '我的比赛',
  },
];

const personalMes = (props)=>{
  let token = sessionStorage.getItem("token");
  let cookietoken=cookie.load("token")
  console.log(token);
  console.log(cookietoken);
  const {PersonalMes} = props;
  
  const [key, setKey] = useState('tab1');
  const [showDetail, setShowDetail] = useState(false);
  const [currentRow, setCurrentRow] = useState();
  let arrList = []
  let userMesList=[]
  useEffect(() => {
    props.dispatch({
      type: 'PersonalBack/fetchPersonalMessage',
      payload: { 
      },
    });
  }, []);
  // useEffect(() => {
  //   props.dispatch({
  //     type: 'MatchesListBack/fetchMatchesList',
  //     payload: { 
  //     },
  //   });
  //   return () =>{}
  // }, []);
  
  console.log(props);
  console.log("personalMes"+PersonalMes);  
  console.log("personalMes.obj.userList"+PersonalMes.obj); 
  if(PersonalMes.obj){

    console.log(PersonalMes.obj.userList);
    userMesList=PersonalMes.obj.userList.map(
      (item)=>{
        return item
      })
    console.log(PersonalMes.obj.works)
    arrList = PersonalMes.obj.works.map(
    (item)=>{
      console.log(item)
   return (
     item   
   )
  
    })
 
  var worksname= arrList[0].worksname
  var design= arrList[0].design
  var introduce= arrList[0].introduce
 
  // onTabChange = (key, type) => {
  //   console.log(key, type);
   
  // };
    return (
      <div id="container">
          <div id="contents">
        <Card
          style={{ width: '100%' }}
          title="赛道个人中心 "
          tabList={tabList}
          // onTabChange={key => {
          //   this.onTabChange(key, 'noTitleKey');
          // }}
        >
          <Descriptions 
          column={2}
          title="个人信息">
            <Descriptions.Item label="姓名">{userMesList[0].username}</Descriptions.Item>
            <Descriptions.Item label="电话">{userMesList[0].phone}</Descriptions.Item>
            <Descriptions.Item label="学号">{userMesList[0].number}</Descriptions.Item>
            <Descriptions.Item label="学校">{userMesList[0].college}</Descriptions.Item>
            <Descriptions.Item label="专业">{userMesList[0].major}</Descriptions.Item>
            <Descriptions.Item label="邮箱">{userMesList[0].email}</Descriptions.Item>
            
          </Descriptions>
          <Descriptions 
            column={2}
            title="比赛信息">{}
             <Descriptions.Item label="作品题目">{arrList[0].worksname}</Descriptions.Item> 
             <Descriptions.Item label="设计思路">{design}</Descriptions.Item>
             <Descriptions.Item label="作品介绍">{introduce}</Descriptions.Item>
          </Descriptions>
        </Card>
      </div>
      <div id="right-sidebar">
        <Card
          style={{ width: 300, height:400}}
          actions={[
            <SettingOutlined key="setting" />,
            <a onClick={() => {
              setShowDetail(true);
              
            }}><EditOutlined key="edit" /></a>,
            <EllipsisOutlined key="ellipsis" />,
            ]}
        >
          <Descriptions 
            column={1}
            title="User Info">
            <Descriptions.Item label="姓名">{userMesList[0].username}</Descriptions.Item>
            <Descriptions.Item label="电话">{userMesList[0].phone}</Descriptions.Item>
            <Descriptions.Item label="学号">{userMesList[0].number}</Descriptions.Item>
            <Descriptions.Item label="学校">{userMesList[0].college}</Descriptions.Item>
            <Descriptions.Item label="专业">{userMesList[0].major}</Descriptions.Item>
            <Descriptions.Item label="邮箱">{userMesList[0].email}</Descriptions.Item>
           
          </Descriptions>
        </Card>,

          
          </div>
          <Drawer
          width={600}
          title="个人信息修改"
          visible={showDetail}
          mask={false}          
          onClose={() => {        
            setShowDetail(false);
            setCurrentRow(false);
          }}
          closable={true}
        >
    <Form  
    
    name="nest-messages"  >
      <Form.Item
        name={['user', 'name']}
        label="名字"
        rules={[ { required: true,},]} 
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="邮箱"
        rules={[
          {
            type: 'email',
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'number']}
        label="学号"
        rules={[ { required: true,},]} 
      >
      <Input/>
      </Form.Item>
      <Form.Item
       name={['user', 'school']}
       label="学校"
       rules={[ { required: true,},]} 
       >
        <Input />
      </Form.Item>
      <Form.Item >
        <Input />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
          </Form>
        </Drawer>
    </div>
      
    );}else{
      return null
    }
}

  

export default  connect(({
  PersonalBack,
}) => ({
  PersonalMes: get(PersonalBack, 'PersonalMes', []),
 
}))(personalMes);
// export default  connect(({
//   MatchesListBack,
// }) => ({
//   matchesList: get(MatchesListBack, 'matchesList', []),
 
// }))(personalMes);

