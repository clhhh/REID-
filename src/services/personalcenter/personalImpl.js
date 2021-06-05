import request from '@/utils/request';
export async function getUserMesByToken(payload) {
    console.log("开始调用获取个人信息service")  
    return request('/api.loginCheck/api/getUserMesByToken',{
        method:'POST',
        data: payload,
      });
  }