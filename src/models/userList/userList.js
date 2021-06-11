import {
    getAllUserListMes
  } from '@/services/UserList/userListImpl';
  const UserListModel = {
    namespace: 'UserListBack',
    state: {
      user_list: [],
    },
    effects: {
      * fetchUserList({ payload }, { call, put }) {
        console.log("申请调用展示UserList接口")
        const response = yield call(getAllUserListMes, payload);
        yield put({
          type: 'saveUserList',
          payload: response,
        });
      },
    },
    reducers: {
      saveUserList(state,{payload}){
        return{
          ...state,
          userList:payload,
        }
      },
    }
}
export default UserListModel;