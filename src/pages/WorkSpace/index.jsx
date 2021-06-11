import './index.less'
import {Button,Row,Col,Divider,Card} from 'antd'
import imgURL from '../../../public/admin.png';
import { connect,history } from 'umi';
import { get } from 'lodash';
import React, { useState, useEffect, useRef } from 'react';

const date=new Date();
const style = { background: '#DDDDDD', padding: '4px 0' };
let arrList=[  ]
const workSpaceShow = (props)=>{ 
     const {caseList} = props; 
     useEffect(() => {
          props.dispatch({
            type: 'CaseListBack/fetchCaseList',
            payload: {  zone_name: "BNUZ"
            },
          });
        }, []);
        if(caseList.data){          
            arrList = caseList.data.map(
              (item)=>{
             return (
               item.fields
             )
           })  
           console.log(arrList); 
          //  if(arrList){
          //      codelist=arrList.case_number.map((item)=>{return item})     
          //      console.log(codelist);
          //  }           
          };
          // //可以用
          // const handleCreateCase=()=>(
          //     history.push('/case_list')
          // );
    return (
    <div className='preview'>
       <div className='head'>
            <h2> 工作台</h2>
           
            {/* <div className='adminDisplay'>
                 <img className='img' src={imgURL} alt="" />
                 <h2>你好管理员</h2>
                 <span>今天是</span>
            </div> */}
          <Row>
               <Col span={1}></Col>
               <Col span={2}> <img className='img' src={imgURL} alt="" /></Col>
               <Col span={3}><h2>你好管理员A</h2></Col>
               <Col span={6}></Col>
               <Col span={4}></Col>
               <Col span={6}><h3>进行中案件    待审核案件    已完成案件</h3></Col>
          </Row>
          <Row >
               <Col span={17}></Col>         
               <Col span={2}><h2>5</h2></Col>
               <Col span={2}><h2>14</h2></Col>
               <Col span={2}><h2>32</h2></Col>
          </Row>
       </div>
    
       <div className='caselist'>    
            <Divider orientation="left">进行中的案件</Divider>
     <Row gutter={16}>
       {arrList.map(item=>(
         <Col span={8} key={item&&item.case_number}>   
         <Card title={item&&item.case_number} bordered={true} headStyle={{height:25} }
         hoverable={true}   style={{ marginBottom :5}} 
         extra={<a href="#">查看详情</a>}>
              <p>走失地点: {item&&item.lost_location}</p>
              <p>走失时间: {item&&item.lost_time}</p>
            </Card>
         </Col>
       ))}
     
     {/* <Col span={8}>   
     <Card title={arrList[0]&&arrList[0].case_number} bordered={true} headStyle={{height:25} }
     hoverable={true}   style={{ marginBottom :5}} 
     extra={<a href="#">查看详情</a>}>
          <p>走失地点: {arrList[0]&&arrList[0].lost_location}</p>
          <p>走失时间: {arrList[0]&&arrList[0].lost_time}</p>
        </Card>
     </Col> */}
      {/* <Col  span={8}>
      <Card title={arrList[1]&&arrList[1].case_number}bordered={true} headStyle={{height:25}}
     hoverable={true}   style={{ marginBottom :5}} extra={<a href="#">查看详情</a>}>
          <p>走失地点: {arrList[1]&&arrList[1].lost_location}</p>
          <p>走失时间: {arrList[1]&&arrList[1].lost_time}</p>
        </Card>
      </Col>
      
      <Col  span={8}>
      <Card title={arrList[2]&&arrList[2].case_number} bordered={true} headStyle={{height:25}}
     hoverable={true}   style={{ marginBottom :5}} extra={<a href="#">查看详情</a>}>
         <p>走失地点: {arrList[2]&&arrList[2].lost_location}</p>
          <p>走失时间: {arrList[2]&&arrList[2].lost_time}</p>
        </Card>
      </Col>
      <Col  span={8}>
      <Card title={arrList[3]&&arrList[3].case_number}bordered={true} headStyle={{height:25}}
     hoverable={true}   style={{ marginBottom :5}} extra={<a href="#">查看详情</a>}>
          <p>走失地点: {arrList[3]&&arrList[3].lost_location}</p>
          <p>走失时间: {arrList[3]&&arrList[3].lost_time}</p>
        </Card>
      </Col>
      <Col  span={8}>
      <Card title={arrList[4]&&arrList[4].case_number} bordered={true} headStyle={{height:25}}
     hoverable={true}   style={{ marginBottom :5}} extra={<a href="#">查看详情</a>}>
          <p>走失地点: {arrList[4]&&arrList[4].lost_location}</p>
          <p>走失时间: {arrList[4]&&arrList[4].lost_time}</p>
        </Card>
      </Col>
      <Col  span={8}>
      <Card title={arrList[5]&&arrList[5].case_number}bordered={true} headStyle={{height:25}}
     hoverable={true}   style={{ marginBottom :5}} extra={<a href="#">查看详情</a>}>
          <p>走失地点: {arrList[5]&&arrList[5].lost_location}</p>
          <p>走失时间: {arrList[5]&&arrList[5].lost_time}</p>
        </Card>
      </Col> */}
      
    </Row>
       </div>
            
       <div className='fastStart'>  
       <Divider orientation="left">快速开始</Divider>
          <div className='fastStartBtnArea'>
               <Button className='buttonstyle' onClick={()=>{history.push('/case_list')}} type="primary">创建案件</Button>
               <Button className='buttonstyle' onClick={()=>{history.push('/user_list')}} type="primary">创建管理员</Button>
          </div>           
       </div>
       <div className='flowRate'>
       <Divider orientation="left">园区实时人流量</Divider>
       </div>
    </div>);
  };

  export default  connect(({
     CaseListBack,
   }) => ({
     caseList: get(CaseListBack, 'caseList', []),
     codeMes:get(CaseListBack, 'codeMes', [])
   }))(workSpaceShow);   