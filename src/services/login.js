import request from '@/utils/request';
export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}


export async function hpAccountLogin(values) {
  console.log("开始调用登录service")
  var formData = new FormData();
  formData.append("username", values.userName);
  console.log(values.userName);
  formData.append("password", values.password);
  console.log(values.password);
  console.log(formData);
    return request('/api.loginCheck/api/loginCheck',{
      //return request('/api.loginCheck/api/loginCheck',{
      method:'POST',
      data: formData,
    });
}

export async function CaseAccountLogin(params) {
  console.log("开始调用Case登录service")
    return request('/api.case/api/loginCheck',{
      //return request('/api.loginCheck/api/loginCheck',{
      method:'POST',
      data: params,
    });
}

