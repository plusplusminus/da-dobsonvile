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

var _variables = require('../../common/styles/variables');

var _images = require('../../common/images');

var _ = require('..');

var _helpers = require('../../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  badge: {
    base: {
      paddingTop: _variables.spacing.space05,
      paddingRight: _variables.spacing.space2,
      paddingBottom: _variables.spacing.space05,
      paddingLeft: _variables.spacing.space2,
      borderRadius: _variables.spacing.space05,
      overflow: 'hidden',
      textTransform: 'uppercase',
      color: _variables.colors.white,
      display: 'inline-flex',
      alignItems: 'center'
    }
  },

  icon: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    neutral: {
      backgroundColor: _variables.colors.brandWhite,
      color: _variables.colors.statusNeutral
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

var Badge = function Badge(_ref) {
  var status = _ref.status,
      title = _ref.title,
      icon = _ref.icon;


  var baseStyles = _aphrodite.StyleSheet.create({
    badge: _extends({}, styles.badge.base, status && styles.status[status]),
    icon: _extends({}, styles.icon),
    title: {
      letterSpacing: '10px'
    }
  });

  return _react2.default.createElement(
    'div',
    { className: (0, _aphrodite.css)(baseStyles.badge) },
    icon && _react2.default.createElement(_.Icon, {
      ml: _variables.spacing.space0,
      mr: _variables.spacing.space1,
      color: status === "neutral" ? _variables.colors.textLight : _variables.colors.textWhite,
      fs: "14px",
      lh: "14px",
      name: icon
    }),
    _react2.default.createElement(
      _.Copy,
      {
        size: "tiny",
        color: status === "neutral" ? "light" : "white",
        mb: "none",
        override: { letterSpacing: _variables.letterSpacing.small }
      },
      title
    )
  );
};

Badge.defaultProps = {
  title: "Secured",
  icon: "lock",
  status: "info"
};

Badge.propTypes = {
  /** Icon for the Badge */
  icon: _propTypes2.default.string,
  /** Title of the Badge */
  title: _propTypes2.default.string.isRequired,
  /** Status of Badge to indicate color */
  status: _propTypes2.default.oneOf(["danger", "info", "neutral", "success", "warning"]).isRequired
};

exports.default = Badge;
//# sourceMappingURL=Badge.js.map