'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rambda = require('rambda');

var _aphrodite = require('aphrodite');

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    width: '100%',
    display: 'inline-block',
    borderTop: '1px solid'
  },

  mt: {
    none: {
      marginTop: _variables.spacing.space0
    },
    small: {
      marginTop: _variables.spacing.space1
    },
    medium: {
      marginTop: _variables.spacing.space2
    },
    large: {
      marginTop: _variables.spacing.space4
    }
  },

  mb: {
    none: {
      marginBottom: _variables.spacing.space0
    },
    small: {
      marginBottom: _variables.spacing.space1
    },
    medium: {
      marginBottom: _variables.spacing.space2
    },
    large: {
      marginBottom: _variables.spacing.space4
    }
  },

  color: {
    base: {
      borderColor: _variables.colors.borderBase
    },
    dark: {
      borderColor: _variables.colors.borderDark
    },
    light: {
      borderColor: _variables.colors.borderLight
    },
    white: {
      borderColor: _variables.colors.borderWhite
    },
    whiteO: {
      borderColor: _variables.colors.borderWhiteO
    }
  }
};

var Border = function Border(props) {
  var color = props.color,
      mb = props.mb,
      mt = props.mt;


  var baseStyles = _aphrodite.StyleSheet.create({
    border: _extends({}, styles.base, mb && styles.mb[mb], mt && styles.mt[mt], color && styles.color[color])
  });

  return _react2.default.createElement('span', { className: (0, _aphrodite.css)(baseStyles.border) });
};

Border.defaultProps = {
  color: "dark",
  mb: "medium",
  mt: "medium"
};

Border.propTypes = {
  /** The Border color */
  color: _propTypes2.default.oneOf(["base", "dark", "light", "white", "whiteO"]),
  /** Margin bottom  */
  mb: _propTypes2.default.oneOf(["none", "tiny", "small", "medium", "large"]),
  /** Margin top  */
  mt: _propTypes2.default.oneOf(["none", "tiny", "small", "medium", "large"])
};

Border.styles = styles;

exports.default = Border;
//# sourceMappingURL=Border.js.map