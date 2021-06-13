import React, { useState, useEffect, useRef } from 'react';
import { connect,history } from 'umi';
import { get } from 'lodash';
import { Table, Tag, Space,Button,Drawer,Form,Input,Cascader, message  } from 'antd';
const casedetail=(props)=>{
    const {caseList} = props; 
    let arrList = []
    if(caseList.data){ 
    
        if(caseList.data=='null'){
      
            message.error('查不到该案件信息')  
          
        }else{
      
            arrList = caseList.data.map(
              (item,index,arr)=>{
               //  console.log(item,index,arr)
             return (
               item.fields
             )
           })
           
        }
      console.log(caseList.data)
    }
    return (
        <div>

        </div>
    )
}

export default  connect(({
    CaseListBack,
  }) => ({
    caseList: get(CaseListBack, 'caseList', []),
    codeMes:get(CaseListBack, 'codeMes', [])
  }))(casedetail);   