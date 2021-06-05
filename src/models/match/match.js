import {
  getMatchMes,getMatchMeslocal
} from '@/services/Match/matchImpl';
const MatchesClassModel = {
    namespace: 'MatchesListBack',
    state: {
      matches_list: [],
    },
    effects: {
      * fetchMatchesList({ payload }, { call, put }) {
        console.log("申请调用展示比赛接口")
        const response = yield call(getMatchMes, payload);
        yield put({
          type: 'saveMatchList',
          payload: response,
        });
      },
      * fetchMatchesListlocal({ payload }, { call, put }) {
      console.log("local")
      const response = yield call(getMatchMeslocal, payload);
      yield put({
        type: 'saveMatchList',
        payload: response,
      });
    }
    },
    reducers: {
      saveMatchList(state,{payload}){
        return{
          ...state,
          matchesList:payload,
        }
      }
    }
}
export default MatchesClassModel;
