'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgba = exports.getHoverAttributes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _variables = require('../common/styles/variables');

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Hover Attributes */
var getHoverAttributes = exports.getHoverAttributes = function getHoverAttributes(args, colors) {
  if (!args) return null;

  var styles = Object.keys(args).reduce(function (result, item) {
    result[item] = colors[args[item]];
    return result;
  }, {});

  return {
    ':hover': _extends({
      outline: 0
    }, styles),
    ':focus': _extends({
      outline: 0
    }, styles),
    ':active': _extends({
      outline: 0
    }, styles)
  };
};

/** Convert Hex to RGBA */
var rgba = exports.rgba = function rgba(hex, opacity) {
  return (0, _color2.default)(hex).alpha(opacity).rgbString();
};
//# sourceMappingURL=helpers.js.map