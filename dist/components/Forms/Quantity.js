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
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    transition: 'padding 0.8s',
    justifyContent: 'space-between'
  },
  inner: {
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    color: _variables.colors.textBase,
    border: 0,
    width: '50px',
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'transparent',
    height: 'auto',
    color: _variables.colors.brandPrimary,
    fontSize: '1.5rem',
    padding: 0,
    border: 0
  }
});

var Quantity = function Quantity(props) {
  return _react2.default.createElement(
    "div",
    { className: (0, _aphrodite.css)(styles.wrapper) },
    _react2.default.createElement(
      "div",
      { className: (0, _aphrodite.css)(styles.inner) },
      _react2.default.createElement(
        "button",
        { type: "button", className: (0, _aphrodite.css)(styles.button), onClick: props.onDecreaseQuantity },
        _react2.default.createElement(_.Icon, { name: "minus" })
      ),
      _react2.default.createElement(
        "span",
        { className: (0, _aphrodite.css)(styles.input) },
        props.quantity
      ),
      _react2.default.createElement(
        "button",
        { type: "button", className: (0, _aphrodite.css)(styles.button), onClick: props.onIncreaseQuantity },
        _react2.default.createElement(_.Icon, { name: "plus" })
      )
    ),
    props.children
  );
};

exports.default = Quantity;
//# sourceMappingURL=Quantity.js.map