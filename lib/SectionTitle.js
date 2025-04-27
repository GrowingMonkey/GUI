"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionTitle;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SectionTitle(props) {
  var style = {
    backgroundColor: props.backgroundColor ? props.backgroundColor : "#f7f7f7",
    padding: "12px 0",
    paddingLeft: props.paddingLeft ? props.paddingLeft : "36px",
    marginBottom: "12px"
  };
  var notice = null;
  if (props.notice) {
    notice = _react2.default.createElement(
      "span",
      { style: { marginLeft: "16px", color: "rgba(0,0,0,.43)", fontSize: "12px" } },
      "(",
      props.notice,
      ")"
    );
  }
  return _react2.default.createElement(
    "div",
    { style: style },
    props.title,
    notice
  );
}
//# sourceMappingURL=SectionTitle.js.map