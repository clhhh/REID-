import request from '@/utils/request';

export async function getMatchMes(payload) {
    console.log(177)
    return request('/api.loginCheck/api/fastgetAllMatchMes',{   
        method:'GET',
        params: payload,
    });
  }
  export async function getMatchMeslocal(payload) {
    console.log(178)
    return request('http://localhost:8080/api/getAllMatchMes',{
        method:'GET',
        params: payload,
    });
  }