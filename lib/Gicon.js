'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Gicon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./less/giconfont.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Gicon(props) {
  var className = "g-icon g-icon-" + props.type;
  return props.path ? _react2.default.createElement(
    'i',
    { className: className, style: props.style },
    Array(+props.path).fill(0).map(function (item, index) {
      return _react2.default.createElement('span', { className: 'path' + (index + 1), key: index });
    })
  ) : _react2.default.createElement('i', { className: className, style: props.style });
}
//# sourceMappingURL=Gicon.js.map