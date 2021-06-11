import React, { useState ,useEffect} from 'react';
import { connect } from 'umi';
import { get } from 'lodash';
import { Table, Tag, Space,Button,Drawer,Form,Input,Cascader  } from 'antd';
import '../caselist/index.less'
const { Column } = Table;
const { Search } = Input;
const options = [
    {
      value: 'zhejiang',
      label: '目标姓名',
    },
    {
      value: 'zhejiang',
      label: '案例码',
    }
  ]
const userListShow=(props)=>{
    let UserArr=[];
    const{userList}=props
    useEffect(()=>{
        props.dispatch({
            type: 'UserListBack/fetchUserList',
            payload: {},
        })
    },[]);
    if(userList.data){
        UserArr=userList.data.map((item)=>(item.fields))
    }
   

 
    return(
    <div>
        <div className='search'>
        <h1 className='c' >用户列表</h1>
        <h5 className='d'>搜索关键字</h5>
        <Cascader className='a'
        defaultValue={['目标姓名']}
        options={options}
        // onChange={onChange}
        />
        <Search className='b'
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
         
        />
        </div>    
        <div className='createCase'>
    <Button  type="primary">新建用户</Button>
    </div>
    <Table dataSource={UserArr }>
 
        <Column title="用户姓名" dataIndex="user_name" key="a" />
        <Column title="电话" dataIndex="user_phone" key="b" />
        <Column title="性别" key="gender"
        render={(_,record)=>(
         <text>{(record.user_gender==1)?'男':'女'}</text>
        )}
        />
        <Column title="创建时间" dataIndex="user_rg_time" key="age" />
        <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a>详情</a>         
        </Space>
      )}
    />
    </Table> 
    </div>  
    )
}
export default connect(({
    UserListBack,
})=>({
    userList:get(UserListBack, 'userList', [])
})) (userListShow)
