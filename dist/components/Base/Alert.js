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

var _components = require('../../components');

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function Alert(props) {
  var children = props.children,
      iconBefore = props.iconBefore,
      close = props.close,
      color = props.color;


  var styles = _aphrodite.StyleSheet.create({
    alert: _extends({
      display: 'inline-block',
      position: 'relative',
      paddingTop: _variables.spacing.space1,
      paddingBottom: _variables.spacing.space1,
      paddingLeft: props.iconBefore ? _variables.spacing.space5 : _variables.spacing.space2,
      paddingRight: props.close ? _variables.spacing.space5 : _variables.spacing.space2,
      color: _variables.colors.textLightO,
      backgroundColor: props.color,
      borderRadius: _variables.spacing.space05
    }, (0, _variables.fontStyles)('14px', '22px')),
    close: _extends({
      position: 'absolute',
      top: _variables.spacing.space1,
      right: _variables.spacing.space1
    }, (0, _variables.fontStyles)('22px', '22px')),
    iconBefore: _extends({
      position: 'absolute',
      top: _variables.spacing.space1,
      left: _variables.spacing.space1
    }, (0, _variables.fontStyles)('22px', '22px'))
  });

  return _react2.default.createElement(
    'span',
    { className: (0, _aphrodite.css)(styles.alert) },
    iconBefore && _react2.default.createElement(
      'div',
      { className: '' + (0, _aphrodite.css)(styles.iconBefore) },
      _react2.default.createElement(_components.Icon, { name: iconBefore })
    ),
    children,
    close && _react2.default.createElement(
      'div',
      { className: '' + (0, _aphrodite.css)(styles.close) },
      _react2.default.createElement(_components.Icon, { name: _variables.icons.close })
    )
  );
};

Alert.defaultProps = {
  close: true,
  iconBefore: null,
  color: _variables.colors.bgDark
};

Alert.propTypes = {
  /** Should be replaced with onClick logic */
  close: _propTypes2.default.bool,
  /** Name of icon as per variables.js */
  iconBefore: _propTypes2.default.string,
  /** Color of Alert background */
  color: _propTypes2.default.string
};

exports.default = Alert;
//# sourceMappingURL=Alert.js.map