import {
    getAllCaseMes,createCaseByAdmin,searchCaseByName
  } from '@/services/Case/caseImpl';
  import { message } from 'antd';
  const CaseClassModel = {
    namespace: 'CaseListBack',
    state: {
      case_list: [],
    },
    effects: {
      * fetchCaseList({ payload }, { call, put }) {
        console.log("申请调用展示case接口")
        const response = yield call(getAllCaseMes, payload);
        yield put({
          type: 'saveCaseList',
          payload: response,
        });
      },
      * searchCaseListByName({ payload }, { call, put }) {
      console.log("申请调用搜索人名case接口")
      const response = yield call(searchCaseByName, payload);
      yield put({
        type: 'saveCaseList',
        payload: response,
      });
    },
      * createCase({ payload }, { call, put }) {    
      console.log("申请调用创建case接口")  
      const response = yield call(createCaseByAdmin, payload);
      
      yield put({
        type: 'saveCreateCaseMes',
        payload: response,
      });
      if (response.code === 200){
        // message.success('🎉 🎉 🎉  登录成功！').then(()=>(history.push('/matchlist/list')));                
        message.success('🎉 🎉 🎉 创建成功！')
        // yield put (
        //   {
        //     type: 'saveCaseList',
        //     payload: response,
        //   }
        // )
      }
     },
    },
    reducers: {
      saveCaseList(state,{payload}){
        return{
          ...state,
          caseList:payload,
        }
      },

      saveCreateCase(state,{payload}){
        return{
          ...state,
          codeMes:payload.code,
        }
      },
    }
}
export default CaseClassModel;
