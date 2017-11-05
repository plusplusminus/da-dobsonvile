"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require("aphrodite");

var _variables = require("../../common/styles/variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  var color = props.color,
      fs = props.fs,
      lh = props.lh,
      name = props.name,
      style = props.style;

  var styles = _aphrodite.StyleSheet.create({
    icon: _extends({
      color: props.color,
      marginLeft: props.ml,
      marginRight: props.mr
    }, (0, _variables.fontStyles)(props.fs, props.lh))
  });

  return _react2.default.createElement("span", { className: (0, _aphrodite.css)(styles.icon, props.style) + " icon icon-" + name });
};

Icon.defaultProps = {
  name: null,
  color: _variables.colors.baseInherit,
  ml: _variables.spacing.space05,
  mr: _variables.spacing.space05,
  fs: 'inherit',
  lh: 'inherit'
};

Icon.propTypes = {
  /** Color of Icon as per variables.js */
  color: _propTypes2.default.string.isRequired,
  /** Name of Icon as per variables.js */
  name: _propTypes2.default.string.isRequired,
  /** Margin Left taking property from Spacing in variables.js */
  ml: _propTypes2.default.string,
  /** Margin Right taking property from Spacing in variables.js */
  mr: _propTypes2.default.string,
  /** Font size taking px value */
  fs: _propTypes2.default.string,
  /** Line height taking px value */
  lh: _propTypes2.default.string
};

exports.default = Icon;
//# sourceMappingURL=Icon.js.map