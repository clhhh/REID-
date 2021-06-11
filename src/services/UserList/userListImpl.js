import request from '@/utils/request';
export async function getAllUserListMes(payload) {
    console.log("开始调用展示所有用户service")
    return request('/api.case/personal/list/user',{
        method:'POST',
        data: payload,
    });
  }