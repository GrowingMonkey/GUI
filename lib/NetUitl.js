'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _style2 = require('antd/lib/message/style');

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return _promise2.default.resolve(response);
  }
  _message2.default.error('网络请求错误,请稍后重试');
  return _promise2.default.reject(new Error('网络请求错误,请稍后重试'));
}
function goLogin() {
  var localhref = window.location.href;
  window.location.href = loginUrl + '?provider&referUrl=' + localhref; // eslint-disable-line
}
function doFetch(url, type, params, callback) {
  var fetchUrl = url;
  var fetchParams = {
    method: type,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  if (type !== 'POST' && type !== 'PUT' && params) {
    var paramsArray = [];
    (0, _keys2.default)(params).forEach(function (key) {
      return paramsArray.push(key + '=' + encodeURIComponent(params[key]));
    });
    if (fetchUrl.search(/\?/) === -1) {
      fetchUrl += '?' + paramsArray.join('&');
    } else {
      fetchUrl += '&' + paramsArray.join('&');
    }
  } else {
    fetchParams.body = (0, _stringify2.default)(params);
  }
  return fetch(fetchUrl, fetchParams).then(checkStatus).then(function (res) {
    return res.json();
  }).then(function (json) {
    if (json.status === 10401) {
      goLogin();
    }
    if (callback) {
      callback(json);
    }
    return json;
  }).catch(function (err) {
    console.log(err);
  });
}

var NetUitl = function (_React$Component) {
  (0, _inherits3.default)(NetUitl, _React$Component);

  function NetUitl() {
    (0, _classCallCheck3.default)(this, NetUitl);
    return (0, _possibleConstructorReturn3.default)(this, (NetUitl.__proto__ || (0, _getPrototypeOf2.default)(NetUitl)).apply(this, arguments));
  }

  (0, _createClass3.default)(NetUitl, null, [{
    key: 'get',
    value: function get(url, params, callback) {
      return doFetch(url, 'GET', params, callback);
    }
  }, {
    key: 'delete',
    value: function _delete(url, params, callback) {
      doFetch(url, 'DELETE', params, callback);
    }
  }, {
    key: 'put',
    value: function put(url, params, callback) {
      doFetch(url, 'PUT', params, callback);
    }
  }, {
    key: 'post',
    value: function post(url, params, callback) {
      doFetch(url, 'POST', params, callback);
    }
  }]);
  return NetUitl;
}(_react2.default.Component);

module.exports = NetUitl;
//# sourceMappingURL=NetUitl.js.map