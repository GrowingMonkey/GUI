'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

exports.default = WithHistory;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WithHistory(ComponentClass) {
  return function (_React$Component) {
    (0, _inherits3.default)(WithHistoryComponent, _React$Component);

    function WithHistoryComponent(props) {
      (0, _classCallCheck3.default)(this, WithHistoryComponent);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WithHistoryComponent.__proto__ || (0, _getPrototypeOf2.default)(WithHistoryComponent)).call(this, props));

      _this.handleGoBack = function () {
        _this.props.history.goBack();
      };

      _this.state = {};
      return _this;
    }

    (0, _createClass3.default)(WithHistoryComponent, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(ComponentClass, (0, _extends3.default)({}, this.props, { handleGoBack: this.handleGoBack }))
        );
      }
    }]);
    return WithHistoryComponent;
  }(_react2.default.Component);
}
//# sourceMappingURL=WithHistory.js.map