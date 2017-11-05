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

var _ = require('..');

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = function Tag(props) {
  var children = props.children,
      close = props.close;


  var styles = _aphrodite.StyleSheet.create({
    tag: _extends({
      fontFamily: _variables.fonts.sans,
      position: 'relative',
      display: 'inline-block',
      border: '1px solid',
      marginRight: _variables.spacing.space1,
      marginBottom: _variables.spacing.space1,
      borderColor: props.color === '#FFFFFF' ? _variables.colors.borderBase : props.color,
      borderRadius: _variables.spacing.space05,
      backgroundColor: props.color,
      padding: _variables.spacing.space1,
      paddingRight: props.close ? _variables.spacing.space4 : _variables.spacing.space1
    }, (0, _variables.fontStyles)('13px', '16px')),
    label: {
      color: props.color === '#FFFFFF' ? _variables.colors.textBase : _variables.colors.textLightO
    },
    close: _extends({
      position: 'absolute',
      top: _variables.spacing.space1,
      right: _variables.spacing.space0,
      color: props.color === '#FFFFFF' ? _variables.colors.textBase : _variables.colors.textLightO
    }, (0, _variables.fontStyles)('22px', '18px'))
  });

  return _react2.default.createElement(
    'span',
    { className: (0, _aphrodite.css)(styles.tag) },
    children && _react2.default.createElement(
      'span',
      { className: (0, _aphrodite.css)(styles.label) },
      children
    ),
    close && _react2.default.createElement(
      'div',
      { className: '' + (0, _aphrodite.css)(styles.close) },
      _react2.default.createElement(_.Icon, { name: _variables.icons.close })
    )
  );
};

Tag.defaultProps = {
  close: false,
  color: _variables.colors.baseWhite
};

Tag.propTypes = {
  /** Should be replaced with onClick logic */
  close: _propTypes2.default.bool,
  /** Color options from variables.js */
  color: _propTypes2.default.string
};

exports.default = Tag;
//# sourceMappingURL=Tag.js.map