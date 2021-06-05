
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'umi';
import { Table, Tag, Space,Button,Drawer,Form,Input } from 'antd';
import { get } from 'lodash';
const { Column, ColumnGroup } = Table;


const data = [
  {
    key: '1',
    case_number: 'WL5UTeXP',
    target_name: '小灰灰',
    report_time: "2021-05-19T15:02:45",
    lost_location: '励耘楼',
    tags: ['已审核', '结束'],
  },
  {
    key: '2',
    case_number: 'Jim',
    target_name: 'Green',
    report_time: 42,
    lost_location: 'London No. 1 Lake Park',
    tags: ['未审核'],
  },
  {
    key: '3',
    case_number: 'Joe',
    target_name: 'Black',
    report_time: 32,
    lost_location: 'Sidney No. 1 Lake Park',
    tags: ['未审核'],
  },
];


const CaseShow = (props)=>{ 
  const {caseList} = props; 
  const [showDetail, setShowDetail] = useState(false);
   let arrList = []
  useEffect(() => {
    props.dispatch({
      type: 'CaseListBack/fetchCaseList',
      payload: {  zone_name: "BNUZ"
      },
    });
   

  }, []);
  if(caseList.data){ 
    
    console.log(caseList.data)
    
     arrList = caseList.data.map(
       (item,index,arr)=>{
         console.log(item,index,arr)
      return (
        item.fields
      )
    })
  
}
const handleSubmit = (values) => {
  console.log(values);
  props.dispatch({
    type: 'CaseListBack/createCase',
    payload: { ...values },
  });
   
  //history.push('/welcome');
};

  return(
  <div>
    <div>
    <Button type="primary" onClick={() => { setShowDetail(true); }}>新建案件</Button>
    </div>
  <Table dataSource={ arrList }>
    
    <Column title="案件码" dataIndex="case_number" key="a" />
    <Column title="目标姓名" dataIndex="target_name" key="b" />
    <Column title="性别" key="gender"
    render={(_,record)=>(
      <text>{(record.target_gender==1)?'男':'女'}</text>
    )}
    />
    <Column title="报案时间" dataIndex="report_time" key="age" />
    <Column title="走失地址" dataIndex="lost_location" key="address" />
    <Column
      title="当前状态"
      dataIndex="case_status"
      key="tags"
      render={(_,record) => {
      if(record.case_status==1){
      return(
        <>         
            <Tag color="blue" >
              待审批
            </Tag>      
        </>
      )}
      else if(record.case_status==2){
        return(
          <>         
              <Tag color="blue" >
                已审批
              </Tag>      
          </>
        )}
        else if(record.case_status==3){
          return(
            <>         
                <Tag color="blue" >
                  已取消
                </Tag>      
            </>
          )}
          else if(record.case_status==4){
            return(
              <>         
                  <Tag color="blue" >
                    已拒绝
                  </Tag>      
              </>
            )}
            else if(record.case_status==5){
              return(
                <>         
                    <Tag color="blue" >
                      已完成
                    </Tag>      
                </>
              )}
    }}
    />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a>详情</a>
          <a>审核</a>
          
        </Space>
      )}
    />
  </Table>
  <Drawer
          width={600}
          title="新建案件"
          visible={showDetail}
          mask={false}          
          onClose={() => {        
            setShowDetail(false);
          }}
          closable={true}
        >
  <Form  onFinish={(values) => {
          handleSubmit(values);
          return Promise.resolve();
        }}  
    name="nest-messages"  >
      <Form.Item
        name={['user_phone']}
        label="user_phone"
        rules={[ { required: true,},]} 
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={[ 'admin_phone']}
        label="admin_phone"
        rules={[
          {   
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={[ 'admin_type']}
        label="admin_type"
        rules={[ { required: true,},]} 
      >
      <Input/>
      </Form.Item>
      <Form.Item
       name={['target_name']}
       label="target_name"
       rules={[ { required: true,},]} 
       >
        <Input />
      </Form.Item>
      <Form.Item 
      name={[ 'target_gender']}
       label="target_gender"
       rules={[ { required: true,},]} 
       >
        <Input />
      </Form.Item>
      <Form.Item 
      name={['lost_location']}
       label="lost_location"
       rules={[ { required: true,},]} 
       >
        <Input />
      </Form.Item>
      <Form.Item 
      name={['lost_time']}
       label="lost_time"
       rules={[ { required: true,},]} 
       >
        <Input />
      </Form.Item>
      <Form.Item 
      name={['lost_zone_name']}
       label="lost_zone_name"
       rules={[ { required: true,},]} 
       >
        <Input />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit" onClick>
          Submit
        </Button>
      </Form.Item>
          </Form>
        </Drawer>
  </div>
  )
}


//export default CaseShow
export default  connect(({
  CaseListBack,
}) => ({
  caseList: get(CaseListBack, 'caseList', []),
  codeMes:get(CaseListBack, 'codeMes', [])
}))(CaseShow);   

