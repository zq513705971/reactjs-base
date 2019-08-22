import { Utils } from 'eccom-framework';

const { http } = Utils;

export async function logoutCurrent() {
    return http.post('/api/auth/jwt/user/logout');
}

export async function queryCurrent() {
    return http.get('/api/auth/jwt/user/currentUser');
}

export async function refreshToken() {
    return http.post('/api/auth/jwt/user/refreshToken');
}
