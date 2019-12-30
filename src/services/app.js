import http from '@/utils/http';

export async function listApps() {
    return http.post('/admin/api/app/listApps');
}

export async function listAllApps() {
    return http.post('/admin/api/app/listAllApps');
}

export async function listAppVersions(appId) {
    return http.post('/admin/api/app/listAppVersions', { appId });
}

export async function addVersion(payload) {
    return http.post('/admin/api/app/addVersion', payload);
}

export async function getAppInfo(appId) {
    return http.post('/admin/api/app/getAppInfo', { appId });
}

export async function releaseVersion(payload) {
    return http.post('/admin/api/app/releaseVersion', payload);
}

export async function removeVersion(payload) {
    return http.post('/admin/api/app/removeVersion', payload);
}

export async function releaseApp(appId) {
    return http.post('/admin/api/app/releaseApp', { appId });
}

export async function removeApp(appId) {
    return http.post('/admin/api/app/removeApp', { appId });
}

export async function setDownload(payload) {
    return http.post('/admin/api/app/setDownload', payload);
}

export async function listImages(appId) {
    return http.post('/admin/api/app/listImages', { appId });
}

export async function setImages(payload) {
    return http.post('/admin/api/app/setImages', payload);
}