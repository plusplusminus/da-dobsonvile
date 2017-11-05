'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require('aphrodite');

var _variables = require('../../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavIcon = function NavIcon(props) {
  var content = props.content,
      color = props.color,
      children = props.children,
      iconName = props.iconName,
      iconColor = props.iconColor;

  var styles = _aphrodite.StyleSheet.create({
    navIcon: _extends({
      padding: 0,
      fontFamily: _variables.fonts.sans,
      fontWeight: _variables.fontWeight.regular,
      cursor: 'pointer',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      background: _variables.colors.baseTransparent,
      marginBottom: _variables.spacing.space1,
      color: props.color,
      transition: 'all ' + _variables.timing.base + ' ease-in-out'
    }, (0, _variables.fontStyles)('14px'), {
      ':hover': {
        opacity: _variables.opacity.hover
      }
    }),
    label: {
      marginLeft: _variables.spacing.space1
    },
    icon: _extends({
      color: props.iconColor
    }, (0, _variables.fontStyles)('18px'))
  });

  return _react2.default.createElement(
    'button',
    { className: (0, _aphrodite.css)(styles.navIcon), disabled: props.disabled || false },
    iconName && _react2.default.createElement('span', { className: (0, _aphrodite.css)(styles.icon) + ' icon icon-fw icon-' + iconName }),
    children && _react2.default.createElement(
      'span',
      { className: (0, _aphrodite.css)(styles.label) },
      children
    )
  );
};

NavIcon.defaultProps = {
  color: _variables.colors.textBase,
  iconColor: _variables.colors.textBase,
  iconName: null
};

NavIcon.propTypes = {
  /** Color of text as per variables.js */
  color: _propTypes2.default.string,
  /** Color of icon as per variables.js */
  iconColor: _propTypes2.default.string,
  /** Icon name as per variables.js */
  iconName: _propTypes2.default.string
};

exports.default = NavIcon;
//# sourceMappingURL=NavIcon.js.map