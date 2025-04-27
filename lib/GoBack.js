'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/button/style');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GoBack(props) {
  return _react2.default.createElement(
    _button2.default,
    { onClick: function onClick() {
        return props.route ? props.history.push({ pathname: props.route }) : props.history.goBack();
      } },
    props.title || '返回上一级'
  );
}
exports.default = (0, _reactRouterDom.withRouter)(GoBack);
//# sourceMappingURL=GoBack.js.map