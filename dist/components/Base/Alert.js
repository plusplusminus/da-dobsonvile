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

var styles = {
  alert: {
    base: _extends({
      display: 'inline-block',
      position: 'relative',
      paddingTop: _variables.spacing.space1,
      paddingBottom: _variables.spacing.space1,
      paddingLeft: _variables.spacing.space2,
      paddingRight: _variables.spacing.space2,
      marginBottom: _variables.spacing.space1,
      color: _variables.colors.textLightO,
      borderRadius: _variables.spacing.space05,
      width: '100%'
    }, (0, _variables.fontStyles)('14px', '22px')),
    iconBefore: {
      paddingLeft: _variables.spacing.space5
    },
    close: {
      paddingRight: _variables.spacing.space5
    }
  },
  close: _extends({
    position: 'absolute',
    top: _variables.spacing.space1,
    right: _variables.spacing.space1
  }, (0, _variables.fontStyles)('22px', '22px')),
  iconBefore: _extends({
    position: 'absolute',
    top: _variables.spacing.space1,
    left: _variables.spacing.space1
  }, (0, _variables.fontStyles)('22px', '22px')),
  mb: {
    none: {
      marginBottom: _variables.spacing.space0
    },
    small: {
      marginBottom: _variables.spacing.space2
    },
    large: {
      marginBottom: _variables.spacing.space4
    }
  },
  status: {
    neutral: {
      backgroundColor: _variables.colors.statusNeutral
    },
    info: {
      backgroundColor: _variables.colors.statusInfo
    },
    success: {
      backgroundColor: _variables.colors.statusSuccess
    },
    warning: {
      backgroundColor: _variables.colors.statusWarning
    },
    danger: {
      backgroundColor: _variables.colors.statusDanger
    }
  }
};

var Alert = function Alert(props) {
  var children = props.children,
      iconBefore = props.iconBefore,
      close = props.close,
      status = props.status,
      mb = props.mb;


  var baseStyles = _aphrodite.StyleSheet.create({
    alert: _extends({}, styles.alert.base, iconBefore && styles.alert.iconBefore, close && styles.alert.close, mb && styles.mb[mb], status && styles.status[status]),
    close: _extends({}, styles.close),
    iconBefore: _extends({}, styles.iconBefore)
  });

  return _react2.default.createElement(
    'span',
    { className: (0, _aphrodite.css)(baseStyles.alert) },
    iconBefore && _react2.default.createElement(
      'div',
      { className: '' + (0, _aphrodite.css)(baseStyles.iconBefore) },
      _react2.default.createElement(_components.Icon, { name: iconBefore })
    ),
    children,
    close && _react2.default.createElement(
      'div',
      { className: '' + (0, _aphrodite.css)(baseStyles.close) },
      _react2.default.createElement(_components.Icon, { name: _variables.icons.close })
    )
  );
};

Alert.defaultProps = {
  close: true,
  iconBefore: null,
  mb: "small",
  color: _variables.colors.bgDark,
  status: "neutral"
};

Alert.propTypes = {
  /** Should be replaced with onClick logic */
  close: _propTypes2.default.bool,
  /** Name of icon as per variables.js */
  iconBefore: _propTypes2.default.string,
  /** Color of Alert background */
  color: _propTypes2.default.string,
  /** Margin Below Alert */
  mb: _propTypes2.default.oneOf(["none", "small", "large"]),
  status: _propTypes2.default.oneOf(["danger", "info", "neutral", "success", "warning"]).isRequired
};

exports.default = Alert;
//# sourceMappingURL=Alert.js.map