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

var _style2 = require('antd/lib/input/style');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = _input2.default.Search;

var SearchPanel = function (_React$Component) {
  (0, _inherits3.default)(SearchPanel, _React$Component);

  function SearchPanel(props) {
    (0, _classCallCheck3.default)(this, SearchPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchPanel.__proto__ || (0, _getPrototypeOf2.default)(SearchPanel)).call(this, props));

    _this.onChange = function (e) {
      _this.setState({
        value: e.target.value
      });
    };

    _this.state = {
      value: _this.props.defaultValue || null
    };
    return _this;
  }

  (0, _createClass3.default)(SearchPanel, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ("value" in nextProps) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        width: this.props.width ? this.props.width : "316px",
        float: this.props.float || "right"
      };
      var props = {
        onChange: this.onChange
      };
      return _react2.default.createElement(Search, (0, _extends3.default)({
        style: style
      }, props, this.props, {
        enterButton: true
      }));
    }
  }]);
  return SearchPanel;
}(_react2.default.Component);

exports.default = SearchPanel;
//# sourceMappingURL=SearchPanel.js.map