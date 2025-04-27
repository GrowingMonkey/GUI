'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style2 = require('antd/lib/modal/style');

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

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

exports.default = ZoomImg;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ZoomImg(ComponentClass) {
    return function (_React$Component) {
        (0, _inherits3.default)(ZoomImg, _React$Component);

        function ZoomImg(props) {
            (0, _classCallCheck3.default)(this, ZoomImg);

            var _this = (0, _possibleConstructorReturn3.default)(this, (ZoomImg.__proto__ || (0, _getPrototypeOf2.default)(ZoomImg)).call(this, props));

            _this.ZoomImg = function (e) {
                _this.setState({
                    showImg: true,
                    imgUrl: e
                });
            };

            _this.handleCancel = function () {
                _this.setState({
                    showImg: false
                });
            };

            _this.state = {
                showImg: false,
                imgUrl: ""
            };
            return _this;
        }

        (0, _createClass3.default)(ZoomImg, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(ComponentClass, (0, _extends3.default)({}, this.props, { showImg: this.ZoomImg })),
                    _react2.default.createElement(
                        _modal2.default,
                        { className: 'g-preview-modal', visible: this.state.showImg, footer: null, onCancel: this.handleCancel },
                        _react2.default.createElement('img', { alt: '', style: { width: '100%' }, src: this.state.imgUrl })
                    )
                );
            }
        }]);
        return ZoomImg;
    }(_react2.default.Component);
}
//# sourceMappingURL=ZoomImg.js.map