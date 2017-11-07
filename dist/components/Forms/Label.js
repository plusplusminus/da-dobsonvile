"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _variables = require("../../common/styles/variables");

var _ = require("..");

var _aphrodite = require("aphrodite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _aphrodite.StyleSheet.create({
  label: {
    display: 'inline-block'
  }
});

var Label = function Label(props) {
  return _react2.default.createElement(
    "span",
    { className: (0, _aphrodite.css)(styles.label) },
    _react2.default.createElement(
      _.Heading,
      {
        size: "tiny",
        color: "blue",
        weight: "regular",
        mb: "tiny",
        tracking: "none"
      },
      props.children
    )
  );
};

exports.default = Label;
//# sourceMappingURL=Label.js.map