import http from '@/utils/http';

export async function doLogin(payload) {
  return http.post('/api/auth/jwt/user/logout', payload);
}

export async function logoutCurrent() {
  return http.post('/api/auth/jwt/user/logout');
}
