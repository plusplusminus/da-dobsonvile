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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    base: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    mb: {
      none: {
        marginBottom: _variables.spacing.space0
      },
      tiny: {
        marginBottom: _variables.spacing.space1
      },
      small: {
        marginBottom: _variables.spacing.space2
      },
      medium: {
        marginBottom: _variables.spacing.space4
      },
      large: {
        marginBottom: _variables.spacing.space6
      },
      huge: {
        marginBottom: _variables.spacing.space9
      }
    }
  },

  lines: {
    base: {
      position: 'relative'
    },
    line: {
      width: _variables.spacing.space10,
      content: '""',
      height: '1px',
      position: 'absolute',
      top: '50%'
    },
    color: {
      base: {
        backgroundColor: _variables.colors.textBase
      },
      blue: {
        backgroundColor: _variables.colors.textBlue
      },
      red: {
        backgroundColor: _variables.colors.textRed
      },
      white: {
        backgroundColor: _variables.colors.textWhite
      }
    }
  }
};

var HeadingLines = function HeadingLines(props) {
  var children = props.children,
      lines = props.lines,
      lineLeft = props.lineLeft,
      container = props.container,
      lineRight = props.lineRight,
      color = props.color,
      mb = props.mb;


  var baseStyles = _aphrodite.StyleSheet.create({
    container: _extends({}, styles.container.base, mb && styles.container.mb[mb]),
    lineLeft: _extends({}, styles.lines.base, lineLeft && styles.lines.lineLeft, {
      ':before': _extends({}, styles.lines.line, color && styles.lines.color[color], {
        right: _variables.spacing.space4
      })
    }),
    lineRight: _extends({}, styles.lines.base, lineRight && styles.lines.lineRight, {
      ':after': _extends({}, styles.lines.line, color && styles.lines.color[color], {
        left: _variables.spacing.space4
      })
    })
  });

  return _react2.default.createElement(
    'span',
    { className: (0, _aphrodite.css)(baseStyles.container) },
    lineLeft && _react2.default.createElement('span', { className: (0, _aphrodite.css)(baseStyles.lineLeft) }),
    children,
    lineRight && _react2.default.createElement('span', { className: (0, _aphrodite.css)(baseStyles.lineRight) })
  );
};

HeadingLines.defaultProps = {
  children: null,
  color: 'base',
  lineLeft: false,
  lineRight: false,
  mb: 'none'
};

HeadingLines.propTypes = {
  /** Children getting wraped by lines */
  children: _propTypes2.default.node.isRequired,
  /** Color of lines - mimic color of Heading Component */
  color: _propTypes2.default.oneOf(["blue", "red", "green", "yellow", "white"]),
  /** Add right line */
  lineLeft: _propTypes2.default.bool,
  /** Add left line */
  lineRight: _propTypes2.default.bool,
  /** Margin bottom of container - mimic mb of Heading Component */
  mb: _propTypes2.default.oneOf(["none", "tiny", "small", "medium", "large"])
};

exports.default = HeadingLines;
//# sourceMappingURL=HeadingLines.js.map