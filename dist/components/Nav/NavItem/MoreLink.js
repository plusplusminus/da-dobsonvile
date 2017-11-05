"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require("aphrodite");

var _variables = require("../../../common/styles/variables");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hoverStyles = {
  base: {
    textDecoration: "none",
    color: _variables.colors.linkHover
  },
  blue: {
    color: _variables.colors.brandBlueHover
  },
  green: {
    color: _variables.colors.brandGreenHover
  },
  red: {
    color: _variables.colors.brandRedHover
  },
  yellow: {
    color: _variables.colors.brandYellowHover
  },
  white: {
    color: _variables.colors.textLightO
  }
};

var styles = {
  container: {
    base: {
      backgroundColor: _variables.colors.baseTransparent,
      color: _variables.colors.linkBase,
      border: 0,
      display: "inline-block",
      fontFamily: _variables.fonts.sans,
      lineHeight: 1,
      padding: 0,
      textDecoration: "none",
      transition: "color " + _variables.timing.fast + " ease-in-out",
      cursor: 'pointer'
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

    tracking: {
      base: {
        letterSpacing: _variables.letterSpacing.base
      },
      small: {
        letterSpacing: _variables.letterSpacing.small
      }
    },

    color: {
      blue: {
        color: _variables.colors.brandBlue,

        ":hover": hoverStyles.blue,
        ":focus": hoverStyles.blue,
        ":active": hoverStyles.blue
      },

      red: {
        color: _variables.colors.brandRed,

        ":hover": hoverStyles.red,
        ":focus": hoverStyles.red,
        ":active": hoverStyles.red
      },

      green: {
        color: _variables.colors.brandGreen,

        ":hover": hoverStyles.green,
        ":focus": hoverStyles.green,
        ":active": hoverStyles.green
      },

      yellow: {
        color: _variables.colors.brandYellow,

        ":hover": hoverStyles.yellow,
        ":focus": hoverStyles.yellow,
        ":active": hoverStyles.yellow
      },

      white: {
        color: _variables.colors.brandWhite,

        ":hover": hoverStyles.white,
        ":focus": hoverStyles.white,
        ":active": hoverStyles.white
      }
    },

    variant: {
      uppercase: {
        textTransform: "uppercase"
      },
      lowercase: {
        textTransform: "none"
      }
    },

    size: {
      small: {
        fontSize: "11px"
      },
      medium: {
        fontSize: "13px"
      },
      large: {
        fontSize: "14px"
      }
    }
  },

  icon: {
    base: {
      position: "relative",
      verticalAlign: "baseline",
      color: "inherit"
    }
  }
};

var MoreLink = function MoreLink(props) {
  var href = props.href,
      size = props.size,
      children = props.children,
      onClick = props.onClick,
      uppercase = props.uppercase,
      color = props.color,
      hideIcon = props.hideIcon,
      isNested = props.isNested,
      style = props.style,
      arrowDirection = props.arrowDirection,
      target = props.target,
      variant = props.variant,
      lowercase = props.lowercase,
      weight = props.weight,
      tracking = props.tracking;


  var Element = "";

  if (isNested) {
    Element = "span";
  } else if (href) {
    Element = "a";
  } else {
    Element = "button";
  }

  var baseStyles = _aphrodite.StyleSheet.create({
    base: _extends({}, styles.container.base, color && styles.container.color[color], uppercase && styles.container.variant.uppercase, lowercase && styles.container.variant.lowercase, weight && styles.container.weight[weight], tracking && styles.container.tracking[tracking], size && styles.container.size[size], style),
    icon: _extends({}, styles.icon.base, arrowDirection !== "left" && { marginLeft: ".5em" }, arrowDirection === "left" && { marginRight: ".5em" })
  });

  return _react2.default.createElement(
    Element,
    {
      className: (0, _aphrodite.css)(baseStyles.base),
      href: href,
      target: target,
      onClick: onClick
    },
    !hideIcon && arrowDirection === "left" && _react2.default.createElement(_.Icon, { name: "angle-" + arrowDirection, style: baseStyles.icon }),
    children,
    !hideIcon && arrowDirection !== "left" && _react2.default.createElement(_.Icon, { name: "angle-" + arrowDirection, style: baseStyles.icon })
  );
};

MoreLink.propTypes = {
  /** Direction of the arrow */
  arrowDirection: _propTypes2.default.oneOf(["up", "down", "left", "right"]),
  /** Content for the link */
  children: _propTypes2.default.node.isRequired,
  /** Color of the link */
  color: _propTypes2.default.oneOf(["blue", "red", "green", "yellow", "white"]),
  /** If the arrow icon should be hidden */
  hideIcon: _propTypes2.default.bool,
  /** Where the link should point to */
  href: _propTypes2.default.string,
  /** If the link is nested within another link; makes the container a `span` */
  isNested: _propTypes2.default.bool,
  /** Fires onclick function */
  onClick: _propTypes2.default.func,
  /** Adjusts the font size */
  size: _propTypes2.default.oneOf(["large", "medium", "small"]),
  /** Specifies where to open the linked document */
  target: _propTypes2.default.oneOf(["_blank", "_parent", "_self", "_top"]),
  /** Applies textTransform CSS properties */
  uppercase: _propTypes2.default.bool,
  lowercase: _propTypes2.default.bool,
  /** Adjusts the font weight*/
  weight: _propTypes2.default.oneOf(["bold", "medium", "regular", "light"]),
  /** Adjusts the letterSpacing */
  tracking: _propTypes2.default.oneOf(["base", "small"])
};

MoreLink.defaultProps = {
  arrowDirection: "right",
  color: "red",
  hideIcon: false,
  href: null,
  isNested: false,
  onClick: null,
  size: "small",
  target: null,
  uppercase: true,
  lowercase: false,
  tracking: "base",
  weight: "medium"
};

MoreLink.styles = styles;

exports.default = MoreLink;
//# sourceMappingURL=MoreLink.js.map