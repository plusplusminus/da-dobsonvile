"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rambda = require("rambda");

var _aphrodite = require("aphrodite");

var _variables = require("../../common/styles/variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    fontFamily: _variables.fonts.sans,
    lineHeight: 1,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    padding: 0
  },

  size: {
    tiny: _extends({}, (0, _variables.fontStyles)("13px", 13 * 1.5 + "px")),
    small: _extends({}, (0, _variables.fontStyles)("16px", 16 * 1.5 + "px")),
    medium: _extends({}, (0, _variables.fontStyles)("20px", 20 * 1.5 + "px")),
    large: _extends({}, (0, _variables.fontStyles)("25px", 25 * 1.5 + "px")),
    huge: _extends({}, (0, _variables.fontStyles)("49px", 49 * 1.5 + "px"))
  },

  weight: {
    light: {
      fontWeight: _variables.fontWeight.light
    },
    regular: {
      fontWeight: _variables.fontWeight.regular
    },
    medium: {
      fontWeight: _variables.fontWeight.medium
    },
    bold: {
      fontWeight: _variables.fontWeight.bold
    }
  },

  color: {
    base: {
      color: _variables.colors.textBase
    },
    blue: {
      color: _variables.colors.brandBlue
    },
    red: {
      color: _variables.colors.brandRed
    },
    white: {
      color: _variables.colors.brandWhite
    }
  },

  variant: {
    uppercase: {
      textTransform: "uppercase"
    },
    truncate: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  },
  letterSpacing: {
    none: {
      letterSpacing: _variables.letterSpacing.none
    },
    small: {
      letterSpacing: _variables.letterSpacing.small
    },
    base: {
      letterSpacing: _variables.letterSpacing.base
    },
    large: {
      letterSpacing: _variables.letterSpacing.large
    },
    huge: {
      letterSpacing: _variables.letterSpacing.huge
    }
  }
};

var Heading = function Heading(props) {
  var children = props.children,
      level = props.level,
      size = props.size,
      weight = props.weight,
      color = props.color,
      letterSpacing = props.letterSpacing,
      truncate = props.truncate,
      uppercase = props.uppercase,
      override = props.override;


  var Component = "h" + level;

  var style = [styles.base, size && styles.size[size], weight && styles.weight[weight], color && styles.color[color], letterSpacing && styles.letterSpacing[letterSpacing], truncate && styles.variant.truncate, uppercase && styles.variant.uppercase, (0, _rambda.flatten)(override)];

  var temp = _aphrodite.StyleSheet.create({
    heading: style.reduce(function (result, item) {
      if (item) {
        return _extends({}, result, item);
      }
      return result;
    }, {})
  });

  return _react2.default.createElement(
    Component,
    {
      className: (0, _aphrodite.css)(temp.heading)
    },
    children
  );
};

Heading.defaultProps = {
  level: 2,
  size: "medium",
  weight: "regular",
  color: "base",
  letterSpacing: "normal",
  truncate: false,
  uppercase: false,
  override: {}
};

Heading.propTypes = {
  /** Text for the heading */
  children: _propTypes2.default.node.isRequired,
  /** Creates the heading HTML element */
  level: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  /** Declares the font size of the heading */
  size: _propTypes2.default.oneOf(["huge", "large", "medium", "small", "tiny"]).isRequired,
  /** Adjusts the font weight of the heading */
  weight: _propTypes2.default.oneOf(["bold", "medium", "regular", "light"]),
  /** The heading color changes based on importance */
  color: _propTypes2.default.oneOf(["base", "blue", "red", "white"]),
  /** Controls the letter spacing */
  letterSpacing: _propTypes2.default.oneOf(["none", "base", "large"]),
  /** Whether or not to hide the text overflow with an ellipsis */
  truncate: _propTypes2.default.bool,
  /** Whether or not to set the heading in all caps */
  Uppercase: _propTypes2.default.bool,
  /** Override styles */
  override: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object]))
};

Heading.styles = styles;

exports.default = Heading;
//# sourceMappingURL=index.js.map