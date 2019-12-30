import http from '@/utils/http';

export async function doLogin(payload) {
  return http.post('/public/account/login', payload);
}

export async function fetchCurrent() {
  return http.post('/admin/api/user/currentUser');
}

export async function logoutCurrent() {
  return http.post('/public/account/logout');
}
