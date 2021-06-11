// import { stringify } from 'querystring';
// import { history } from 'umi';
// import { hpAccountLogin ,fakeAccountLogin } from '@/services/login';
// import { setAuthority } from '@/utils/authority';
// import { getPageQuery } from '@/utils/utils';
// import { message } from 'antd';
// const Model = {
//   namespace: 'LoginBack',
//   state: {
//     status: undefined,
//   },
//   effects: {
//     *login({ payload }, { call, put }) {
//       const response = yield call(hpAccountLogin, payload);
//       yield put({
//         type: 'changeLoginStatus',
//         payload: response,
//       }); // Login successfully
//       if (response.code===200){
//             message.success('登录ok').then(() =>{
//             history.push('/welcome');
//             });  
//       }else{
//             notification.warning({
//             message: '网络错误',
//           });
//       }
//     },

//     // *login({ payload }, { call, put }) {
//     //   const response = yield call(fakeAccountLogin, payload);
//     //   yield put({
//     //     type: 'changeLoginStatus',
//     //     payload: response,
//     //   }); // Login successfully

//     //   if (response.status === 'ok') {
//     //     const urlParams = new URL(window.location.href);
//     //     const params = getPageQuery();
//     //     message.success('🎉 🎉 🎉  登录成功！');
//     //     let { redirect } = params;

//     //     if (redirect) {
//     //       const redirectUrlParams = new URL(redirect);

//     //       if (redirectUrlParams.origin === urlParams.origin) {
//     //         redirect = redirect.substr(urlParams.origin.length);

//     //         if (window.routerBase !== '/') {
//     //           redirect = redirect.replace(window.routerBase, '/');
//     //         }

//     //         if (redirect.match(/^\/.*#/)) {
//     //           redirect = redirect.substr(redirect.indexOf('#') + 1);
//     //         }
//     //       } else {
//     //         window.location.href = '/';
//     //         return;
//     //       }
//     //     }

//     //     history.replace(redirect || '/');
//     //   }
//     // },

//     logout() {
//       const { redirect } = getPageQuery(); // Note: There may be security issues, please note

//       if (window.location.pathname !== '/user/login' && !redirect) {
//         history.replace({
//           pathname: '/user/login',
//           search: stringify({
//             redirect: window.location.href,
//           }),
//         });
//       }
//     },
//   },
//   reducers: {
//     changeLoginStatus(state, { payload }) {
//       setAuthority(payload.currentAuthority);
//       return { ...state, status: payload.status, type: payload.type };
//     },
//   },
// };
// export default Model;

import { history } from 'umi';
import { message } from 'antd';
import {
  hpAccountLogin,CaseAccountLogin
} from '@/services/login.js';
const LoginClassModel = {
    namespace: 'LoginBack',
    state: {
      login_list: [],
    },
    effects: {
      * LoginMes({ payload }, { call, put }) {
        console.log("登录models,申请service接口")
        const response = yield call(hpAccountLogin, payload);
        yield put({
          type: 'saveLoginMes',
          payload: response,
        });
        if (response.code === 200){
          // message.success('🎉 🎉 🎉  登录成功！').then(()=>(history.push('/matchlist/list')));         
          history.push('/workspace')
          message.success('🎉 🎉 🎉  登录成功！')
          sessionStorage.setItem("token",response.obj);
        }
      }, 
      * CaseLoginMes({ payload }, { call, put }) {
      console.log("Case登录models,申请service接口")
      const response = yield call(CaseAccountLogin, payload);
      yield put({
        type: 'saveCaseLoginMes',
        payload: response,
      });
      if (response.code === 302){
        // message.success('🎉 🎉 🎉  登录成功！').then(()=>(history.push('/matchlist/list')));         
        history.push('/caselist')
        message.success('🎉 🎉 🎉  登录成功！')       
      }
    },           
    },
    reducers: {
      saveLoginMes(state,{payload}){
        return{
          ...state,
          LoginToken:payload.obj,
        }
      },
      saveCaseLoginMes(state,{payload}){
        return{
          ...state,
          mes:payload,
        }
      }
    }
}
export default LoginClassModel;