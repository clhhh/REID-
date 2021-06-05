import { get } from 'lodash';
import { message } from 'antd';
import{
  getBillsListNew,
  MgetBillsList,
  getAllUserList
} from '@/services/Match/test01';

const MatchesClassModel = {
    namespace: 'BillsListBack',
    state: {
      bills_list: [],
    },
    effects: {
      * fetchMatchList({ payload }, { call, put }) {
        const response = yield call(getBillsListNew, payload);
        const infos = get(response, 'orders', []);
        const totals = get(response, 'total', '');
        const ids = infos.map((arr) => { return arr.id; });
        yield put({
          type: 'getBillslistEntity',
          payload: ids,
        });
        yield put({
          type: 'savePageTotals',
          payload: totals,
        });
      },

      * getBillslistEntity({ payload }, { call, put }) {
      const raw = yield call(MgetBillsList, payload);
      const usernum = yield call(getAllUserList, { limit: 999, page: 1 });
      const { accounts } = usernum;
      const response = raw.filter((info) => {
        return info.account_id !== 0;
      });
      const responseAll = accounts.map((info) => {
        return info.id;
      });
      //将选出去重复后的总订单id
      // const userIdSet = [...new Set(response.map((arr) => {
      //   return arr.account_id;
      // }))];
      const fatherBills = [...new Set(response.map((arr) => {
        return { ...arr.test_order, orderfatherUni: arr.order_num };
      }))];
      //在models不区分拆分和不拆分
      // const idSetBreak = [];
      // const idSet = [];
      // const fatherBillsUniBreak = fatherBills.filter((arr, index, record) => {
      //   if (index !== 0) {
      //     //将每一次的id存入数组当中
      //     idSetBreak.push(record[index - 1].id); 
      //   }
      //   return  (
      //     idSetBreak.indexOf(arr.id) === -1 && arr.status === 1
      //   );
      // });
      // const fatherBillsUni = fatherBills.filter((arr, index, record) => {
      //   if (index !== 0) {
      //     //将每一次的id存入数组当中
      //     idSet.push(record[index - 1].id); 
      //   }
      //   return  (
      //     idSet.indexOf(arr.id) === -1 && arr.status === 2
      //   );
      // });
      const accountInfo = yield call(MgetAccountList, responseAll);
      const account = accountInfo.map((info, index) => {
        return { ...info, account_id: info.id };
      });
      yield put({
        type: 'saveBillsList',
        payload: response,
      });
      yield put({
        type: 'saveAccountList',
        payload: account,
      });
      yield put({
        type: 'saveAccountMainListBreak',
        payload: fatherBills,
      });
    },
    },
      reducers: {
        saveBillsList(state, { payload }) {
          return {
            ...state,
            List: payload,
          };
        },
        saveAccountList(state, { payload }) {
          return {
            ...state,
            Account: payload,
          };
        },
        saveAccountMainListBreak(state, { payload }) {
          return {
            ...state,
            MainListBreak: payload,
          };
        },
        savePageTotals(state, { payload }) {
          return {
            total: payload,
          };
        },
    }
}
export default MatchesClassModel;