"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _variables = require("../../common/styles/variables");

var _ = require("..");

var _aphrodite = require("aphrodite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hoverStyles = {
  base: {
    textDecoration: "none"
  },

  blue: {
    backgroundColor: _variables.colors.brandBlueHover,
    color: _variables.colors.baseWhite
  },

  white: {
    backgroundColor: _variables.colors.baseWhite,
    color: _variables.colors.brandBlue
  },

  green: {
    backgroundColor: _variables.colors.brandGreenHover,
    color: _variables.colors.baseWhite
  },

  red: {
    backgroundColor: _variables.colors.brandRedHover,
    color: _variables.colors.baseWhite
  },

  yellow: {
    backgroundColor: _variables.colors.brandYellowHover,
    color: _variables.colors.baseWhite
  }
};

var styles = {
  base: {
    appearance: "none",
    backfaceVisibility: "hidden",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: _variables.colors.borderBase,
    borderRadius: 0,
    cursor: "pointer",
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1,
    paddingLeft: "30px",
    paddingRight: "30px",
    textAlign: "center",
    textDecoration: "none",
    fontFamily: _variables.fonts.sans,
    fontWeight: _variables.fontWeight.medium,
    letterSpacing: _variables.letterSpacing.base,
    textTransform: "uppercase",
    transition: "color " + _variables.timing.base + " ease-in-out,\n      background-color " + _variables.timing.base + " ease-in-out,\n      opacity " + _variables.timing.base + " ease-in-out",
    verticalAlign: "middle",
    whiteSpace: "nowrap",

    ":hover": hoverStyles.base,
    ":active": hoverStyles.base,
    ":focus": hoverStyles.base
  },
  color: {
    blue: {
      backgroundColor: _variables.colors.brandBlue,
      color: _variables.colors.baseWhite,
      borderColor: _variables.colors.brandBlue,

      ":hover": hoverStyles.blue,
      ":focus": hoverStyles.blue,
      ":active": hoverStyles.blue
    },

    white: {
      backgroundColor: _variables.colors.baseWhite,
      color: _variables.colors.brandBlue,
      borderColor: _variables.colors.baseWhite,

      ":hover": hoverStyles.blue,
      ":focus": hoverStyles.blue,
      ":active": hoverStyles.blue
    },

    red: {
      backgroundColor: _variables.colors.brandRed,
      color: _variables.colors.baseWhite,
      borderColor: _variables.colors.brandRed,

      ":hover": hoverStyles.red,
      ":focus": hoverStyles.red,
      ":active": hoverStyles.red
    },

    green: {
      backgroundColor: _variables.colors.brandGreen,
      color: _variables.colors.baseWhite,
      borderColor: _variables.colors.brandGreen,

      ":hover": hoverStyles.green,
      ":focus": hoverStyles.green,
      ":active": hoverStyles.green
    },

    yellow: {
      backgroundColor: _variables.colors.brandYellow,
      color: _variables.colors.baseWhite,
      borderColor: _variables.colors.brandYellow,

      ":hover": hoverStyles.yellow,
      ":focus": hoverStyles.yellow,
      ":active": hoverStyles.yellow
    }
  },

  outline: {
    red: {
      backgroundColor: _variables.colors.baseTransparent,
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: _variables.colors.brandRed,
      color: _variables.colors.brandRed,

      ":hover": hoverStyles.red,
      ":focus": hoverStyles.red,
      ":active": hoverStyles.red
    },

    blue: {
      backgroundColor: _variables.colors.baseTransparent,
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: _variables.colors.brandBlue,
      color: _variables.colors.brandBlue,

      ":hover": hoverStyles.blue,
      ":focus": hoverStyles.blue,
      ":active": hoverStyles.blue
    },

    green: {
      backgroundColor: _variables.colors.baseTransparent,
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: _variables.colors.brandGreen,
      color: _variables.colors.brandGreen,

      ":hover": hoverStyles.green,
      ":focus": hoverStyles.green,
      ":active": hoverStyles.green
    },

    yellow: {
      backgroundColor: _variables.colors.baseTransparent,
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: _variables.colors.brandYellow,
      color: _variables.colors.brandYellow,

      ":hover": hoverStyles.yellow,
      ":focus": hoverStyles.yellow,
      ":active": hoverStyles.yellow
    },

    white: {
      backgroundColor: _variables.colors.baseTransparent,
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: _variables.colors.baseWhite,
      color: _variables.colors.baseWhite,

      ":hover": hoverStyles.white,
      ":focus": hoverStyles.white,
      ":active": hoverStyles.white
    }
  },

  size: {
    small: {
      fontSize: "11px",
      paddingBottom: 15 / 11 + "em",
      paddingTop: 15 / 11 + "em"
    },
    medium: {
      fontSize: "11px",
      paddingBottom: "15px",
      paddingTop: "15px"
    },
    large: {
      fontSize: "11px",
      paddingBottom: 23 / 15 + "em",
      paddingTop: 23 / 15 + "em"
    }
  },

  type: {
    rounded: {
      base: {
        borderRadius: "30px"
      },

      small: {
        paddingBottom: "12px",
        paddingTop: "12px",
        paddingLeft: "30px",
        paddingRight: "30px"
      },

      medium: {
        paddingBottom: "15px",
        paddingTop: "15px",
        paddingLeft: "40px",
        paddingRight: "40px"
      },

      large: {
        paddingBottom: "18px",
        paddingTop: "18px",
        paddingLeft: "50px",
        paddingRight: "50px"
      }

    },
    full: {
      justifyContent: 'center',
      width: "100%"
    }
  },

  variant: {
    center: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },

  disabled: {
    cursor: "not-allowed",
    opacity: 0.5
  }
};

var Button = function Button(props) {
  var href = props.href,
      children = props.children,
      onClick = props.onClick,
      color = props.color,
      center = props.center,
      size = props.size,
      rounded = props.rounded,
      outline = props.outline,
      full = props.full,
      disabled = props.disabled,
      customStyles = props.customStyles,
      iconBefore = props.iconBefore,
      iconAfter = props.iconAfter,
      variant = props.variant;


  var Element = href ? "a" : "button";

  var role = Element === "a" ? "button" : null;

  var style = [styles.base, color && styles.color[color], size && styles.size[size], rounded && styles.type.rounded.base, rounded && styles.type.rounded[size], outline && styles.outline[color], full && styles.type.full, center && styles.variant.center, customStyles, disabled && styles.disabled];

  var temp = _aphrodite.StyleSheet.create({
    button: style.reduce(function (result, item) {
      if (item) {
        return _extends({}, result, item);
      }
      return result;
    }, {})
  });

  return _react2.default.createElement(
    Element,
    {
      className: (0, _aphrodite.css)(temp.button),
      href: href,
      onClick: onClick,
      role: role,
      disabled: disabled
    },
    iconBefore && _react2.default.createElement(_.Icon, { name: iconBefore }),
    children && _react2.default.createElement(
      "span",
      null,
      children
    ),
    iconAfter && _react2.default.createElement(_.Icon, { name: iconAfter })
  );
};

Button.defaultProps = {
  href: null,
  onClick: null,
  color: "blue",
  center: false,
  size: "medium",
  rounded: true,
  full: false,
  children: "Button",
  disabled: false,
  customStyles: null,
  iconBefore: null,
  iconAfter: null
};

Button.propTypes = {
  /** Pass an href prop to make the button an `a` element instead of a `button` */
  href: _propTypes2.default.string,
  /** Content for the button */
  children: _propTypes2.default.node.isRequired,
  /** Should button be aligned center */
  center: _propTypes2.default.bool,
  /** Function to run when the button is clicked */
  onClick: _propTypes2.default.func,
  /** Color of the button */
  color: _propTypes2.default.oneOf(["blue", "red", "green", "yellow", "white"]),
  /** Size of the button */
  size: _propTypes2.default.oneOf(["small", "medium", "large"]),
  /** Use a rounded button */
  rounded: _propTypes2.default.bool,
  /** Use a outline button */
  outline: _propTypes2.default.bool,
  /** Allow button to span available width */
  full: _propTypes2.default.bool,
  /** Special styles passed in props */
  customStyles: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object])),
  /** Disable button */
  disabled: _propTypes2.default.bool,
  /** Icon name to appear before text */
  iconBefore: _propTypes2.default.string,
  /** Icon name to appear after text */
  iconAfter: _propTypes2.default.string
};

Button.styles = styles;

exports.default = Button;
//# sourceMappingURL=index.js.map