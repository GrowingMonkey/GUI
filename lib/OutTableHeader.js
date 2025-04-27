"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    return _react2.default.createElement(
        "p",
        { className: "out-table-header" },
        props.list.map(function (item) {
            return _react2.default.createElement(
                "span",
                { key: item.text, style: { width: item.width + "px" } },
                item.text
            );
        })
    );
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=OutTableHeader.js.map