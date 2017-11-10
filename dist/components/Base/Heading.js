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
    margin: 0,
    padding: 0
  },

  size: {
    tiny: _extends({}, (0, _variables.fontStyles)("13px", 13 * 1.5 + "px")),
    small: _extends({}, (0, _variables.fontStyles)("16px", 16 * 1.5 + "px")),
    medium: _extends({}, (0, _variables.fontStyles)("20px", 20 * 1.5 + "px")),
    large: _extends({}, (0, _variables.fontStyles)("25px", 25 * 1.5 + "px")),
    huge: _extends({}, (0, _variables.fontStyles)("49px", 49 * 1.5 + "px"))
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
      color: _variables.colors.textBlue
    },
    red: {
      color: _variables.colors.textRed
    },
    light: {
      color: _variables.colors.textLight
    },
    white: {
      color: _variables.colors.textWhite
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
    },
    noWrap: {
      whiteSpace: "nowrap"
    },
    left: {
      textAlign: "left"
    },
    right: {
      textAlign: "right"
    },
    center: {
      textAlign: "center"
    },
    inline: {
      display: "inline-block"
    }
  },

  tracking: {
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
  var color = props.color,
      children = props.children,
      inline = props.inline,
      level = props.level,
      tracking = props.tracking,
      mb = props.mb,
      override = props.override,
      size = props.size,
      truncate = props.truncate,
      noWrap = props.noWrap,
      uppercase = props.uppercase,
      left = props.left,
      right = props.right,
      center = props.center,
      weight = props.weight;


  var Component = level !== 'text' ? "h" + level : level;

  var style = [styles.base, size && styles.size[size], mb && styles.mb[mb], weight && styles.weight[weight], color && styles.color[color], tracking && styles.tracking[tracking], truncate && styles.variant.truncate, noWrap && styles.variant.noWrap, uppercase && styles.variant.uppercase, left && styles.variant.left, right && styles.variant.right, center && styles.variant.center, inline && styles.variant.inline, override && override];

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
  color: "base",
  level: 2,
  tracking: "small",
  mb: "none",
  override: {},
  size: "medium",
  truncate: false,
  noWrap: false,
  uppercase: false,
  left: true,
  right: false,
  center: false,
  inline: false,
  weight: "bold"
};

Heading.propTypes = {
  /** The heading color*/
  color: _propTypes2.default.oneOf(["base", "blue", "red", "white", "light"]),
  /** Text for the heading */
  children: _propTypes2.default.node.isRequired,
  /** Creates the heading HTML element */
  level: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6, 'text']).isRequired,
  /** Controls the letter spacing */
  tracking: _propTypes2.default.oneOf(["none", "small", "base", "large", "huge"]),
  /** Margin bottom  */
  mb: _propTypes2.default.oneOf(["none", "tiny", "small", "medium", "large"]),
  /** Override styles */
  override: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object])),
  /** Declares the font size of the heading */
  size: _propTypes2.default.oneOf(["huge", "large", "medium", "small", "tiny"]).isRequired,
  /** Whether or not to hide the text overflow with an ellipsis */
  truncate: _propTypes2.default.bool,
  /** Whether or not to prevent the text from wrapping */
  noWrap: _propTypes2.default.bool,
  /** Whether or not to set the heading in all caps */
  uppercase: _propTypes2.default.bool,
  /** Whether or not to align left */
  left: _propTypes2.default.bool,
  /** Whether or not to align right */
  right: _propTypes2.default.bool,
  /** Whether or not to align center */
  center: _propTypes2.default.bool,
  /** Whether or not to apply inline-block display property */
  inline: _propTypes2.default.bool,
  /** Adjusts the font weight of the heading */
  weight: _propTypes2.default.oneOf(["bold", "medium", "regular", "light"])
};

Heading.styles = styles;

exports.default = Heading;
//# sourceMappingURL=Heading.js.map