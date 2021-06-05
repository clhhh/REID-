import request from '@/utils/request';

// 订单新接口

export async function getBillsListNew(payload) {
  return request('/api.farm/_order/list', {
    method: 'GET',
    params: payload,
  });
}

export async function MgetBillsList(payload) {
  return request('/api.farm/_order/_mget', {
    method: 'POST',
    data: { ids: payload },
  });
}
//获取全部用户
export async function getAllUserList(payload) {
  return request('/api.farm/account/info/list', {
    method: 'GET',
    params: payload,
  });
}