import React from 'react';
import { message } from 'antd';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  message.error('网络请求错误,请稍后重试');
  return Promise.reject(new Error('网络请求错误,请稍后重试'));
}
function goLogin() {
  const localhref = window.location.href;
  window.location.href = loginUrl + '?provider&referUrl=' + localhref; // eslint-disable-line
}
function doFetch(url, type, params, callback) {
  let fetchUrl = url;
  const fetchParams = {
    method: type,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (type !== 'POST' && type !== 'PUT' && params) {
    const paramsArray = [];
    Object.keys(params).forEach(key =>
      paramsArray.push(`${key}=${encodeURIComponent(params[key])}`),
    );
    if (fetchUrl.search(/\?/) === -1) {
      fetchUrl += `?${paramsArray.join('&')}`;
    } else {
      fetchUrl += `&${paramsArray.join('&')}`;
    }
  } else {
    fetchParams.body = JSON.stringify(params);
  }
  return fetch(fetchUrl, fetchParams)
    .then(checkStatus)
    .then(res => res.json())
    .then((json) => {
      if (json.status === 10401) {
        goLogin();
      }
      if (callback) {
        callback(json);
      }
      return json;
    })
    .catch((err) => {
      console.log(err);
    });
}
class NetUitl extends React.Component {
  static get(url, params, callback) {
    return doFetch(url, 'GET', params, callback);
  }
  static delete(url, params, callback) {
    doFetch(url, 'DELETE', params, callback);
  }
  static put(url, params, callback) {
    doFetch(url, 'PUT', params, callback);
  }
  static post(url, params, callback) {
    doFetch(url, 'POST', params, callback);
  }
}

module.exports = NetUitl;
