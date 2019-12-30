/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';
import { Cookies } from 'react-cookie';
import qs from 'qs';

const cookies = new Cookies();

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '没有权限进行该操作',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = error => {
  const { response = {} } = error;
  const errortext = response.statusText || codeMessage[response.status];
  const { status, url } = response;

  notification.error({
    message: `请求错误 ${status}: ${url}`,
    description: errortext,
  });
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  // credentials: 'include', // 默认请求是否带上cookie
});

/**
 * http post
 * @param {*} url
 * @param {*} params post参数
 * @param {*} headers 消息头，已包含token
 */
const post = (url, params = {}, headers = {}) => {
  const token = cookies.get('TOKEN_KEY');
  return request(url, {
    method: 'POST',
    data: params,
    requestType: 'form',
    headers: {
      token: token,
      ...headers
    }
  });
}

const postBody = (url, body, headers) => {
  const token = cookies.get('TOKEN_KEY');
  return request(url, {
    method: 'POST',
    body: body,
    requestType: 'form',
    headers: {
      token: token,
      ...headers
    }
  });
}

/**
 * http get
 * @param {*} url
 * @param {*} params post参数
 * @param {*} headers 消息头，已包含token
 */
const get = (url, params, headers) => {
  const token = cookies.get('TOKEN_KEY');
  let newUrl = url;
  if (params) {
    if (url.indexOf('?') >= 0) newUrl += `&${qs.stringify(params)}`;
    else newUrl += `?${qs.stringify(params)}`;
  }
  return request(newUrl, {
    method: 'GET',
    headers: {
      token: token,
      ...headers,
    },
  });
};

export default { request, post, postBody, get };
