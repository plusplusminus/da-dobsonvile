'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphrodite = require('aphrodite');

var _ = require('../..');

var _variables = require('../../../common/styles/variables');

var _helpers = require('../../../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBox = function NavBox(props) {
  var content = props.content,
      weight = props.weight,
      color = props.color,
      children = props.children;

  var styles = _aphrodite.StyleSheet.create({
    NavBox: _extends({
      paddingLeft: _variables.spacing.space3,
      paddingRight: _variables.spacing.space3,
      paddingTop: _variables.spacing.space2,
      paddingBottom: _variables.spacing.space2,
      fontFamily: _variables.fonts.sans,
      marginBottom: '1px',
      cursor: 'pointer',
      textAlign: 'left',
      display: 'block',
      border: '1px solid',
      borderColor: _variables.colors.bgLight,
      backgroundColor: _variables.colors.bgLight,
      width: '100%',
      color: _variables.colors.textCopy
    }, (0, _variables.fontStyles)('13px', '13px'), {
      transition: 'all ' + _variables.timing.base + ' ease-in-out',
      ':hover': {
        color: _variables.colors.brandBlueHover,
        borderColor: _variables.colors.borderDark,
        backgroundColor: _variables.colors.bgWhite
      }
    })
  });

  return _react2.default.createElement(
    'button',
    { className: (0, _aphrodite.css)(styles.NavBox), disabled: props.disabled || false },
    children
  );
};

exports.default = NavBox;
//# sourceMappingURL=NavBox.js.map