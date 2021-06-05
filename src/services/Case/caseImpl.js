import request from '@/utils/request';
export async function getAllCaseMes(payload) {
    console.log("开始调用展示所有案件service")
    return request('/api.case/case/all',{
        method:'POST',
        data: payload,
    });
  }
export async function createCaseByAdmin(payload) {
    console.log("开始调用提交案件service")
    return request('/api.case/case/create/admin',{
        method:'POST',
        data: payload,
    });
  }