import {
  getUserMesByToken
} from '@/services/personalcenter/personalImpl';
const  PersonalClassModel = {
      namespace: 'PersonalBack',
      state: {
        personalMes_list: [],
      },
      effects: {
        * fetchPersonalMessage({ payload }, { call, put }) {
          console.log("申请调用getUserMesByToken接口")
          const response = yield call(getUserMesByToken, payload);
          yield put({
            type: 'savePersonalMes',
            payload: response,
          });
        }   
      },
      reducers: {
        savePersonalMes(state,{payload}){
          return{
            ...state,
            PersonalMes:payload,
          }
        }
      }
  }
  export default PersonalClassModel;