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
    fontFamily: _variables.fonts.sans,
    lineHeight: 1,
    margin: 0,
    padding: 0
  },

  size: {
    tiny: _extends({}, (0, _variables.fontStyles)("12px", 13 * 1.5 + 'px')),
    small: _extends({}, (0, _variables.fontStyles)("13px", 13 * 1.5 + 'px')),
    medium: _extends({}, (0, _variables.fontStyles)("16px", 16 * 1.5 + 'px')),
    large: _extends({}, (0, _variables.fontStyles)("18px", 18 * 1.5 + 'px')),
    huge: _extends({}, (0, _variables.fontStyles)("20px", 20 * 1.5 + 'px'))
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
    light: {
      color: _variables.colors.textLight
    },
    light0: {
      color: _variables.colors.textLightO
    },
    white: {
      color: _variables.colors.textWhite
    },
    red: {
      color: _variables.colors.textRed
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
    left: {
      textAlign: "left"
    },
    right: {
      textAlign: "right"
    },
    center: {
      textAlign: "center"
    },
    justify: {
      textAlign: "justify"
    }
  }
};

var Copy = function Copy(props) {
  var color = props.color,
      children = props.children,
      html = props.html,
      mb = props.mb,
      override = props.override,
      size = props.size,
      truncate = props.truncate,
      uppercase = props.uppercase,
      left = props.left,
      right = props.right,
      center = props.center,
      justify = props.justify,
      weight = props.weight,
      isParent = props.isParent;


  var Element = "";

  if (isParent) {
    Element = "span";
  } else {
    Element = "p";
  }

  var style = [styles.base, size && styles.size[size], mb && styles.mb[mb], weight && styles.weight[weight], color && styles.color[color], truncate && styles.variant.truncate, uppercase && styles.variant.uppercase, left && styles.variant.left, right && styles.variant.right, center && styles.variant.center, justify && styles.variant.justify, override && override];

  var temp = _aphrodite.StyleSheet.create({
    copy: style.reduce(function (result, item) {
      if (item) {
        return _extends({}, result, item);
      }
      return result;
    }, {})
  });

  if (html) {
    return _react2.default.createElement(Element, {
      className: (0, _aphrodite.css)(temp.copy),
      dangerouslySetInnerHTML: { __html: html }
    });
  }

  return _react2.default.createElement(
    Element,
    {
      className: (0, _aphrodite.css)(temp.copy)
    },
    children
  );
};

Copy.defaultProps = {
  color: "base",
  mb: "medium",
  override: {},
  size: "medium",
  isParent: false,
  truncate: false,
  uppercase: false,
  left: true,
  right: false,
  center: false,
  justify: false,
  weight: "light"
};

Copy.propTypes = {
  /** The copy color */
  color: _propTypes2.default.oneOf(["base", "blue", "textBase", "textLight", "textLightO", "textWhite"]),
  /** Text for the copy */
  children: _propTypes2.default.node.isRequired,
  /** Margin bottom  */
  mb: _propTypes2.default.oneOf(["none", "tiny", "small", "medium", "large"]),
  /** Override styles */
  override: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object])),
  /** If the Copy container is a parent of other <p> tags then make the component a 'span' instead*/
  isParent: _propTypes2.default.bool,
  /** Declares the font size of the heading */
  size: _propTypes2.default.oneOf(["tiny", "small", "medium", "large", "huge"]).isRequired,
  /** Whether or not to hide the text overflow with an ellipsis */
  truncate: _propTypes2.default.bool,
  /** Whether or not to set the copy in all caps */
  uppercase: _propTypes2.default.bool,
  /** Whether or not to align left */
  left: _propTypes2.default.bool,
  /** Whether or not to align right */
  right: _propTypes2.default.bool,
  /** Whether or not to align center */
  center: _propTypes2.default.bool,
  /** Adjusts the font weight of the copy */
  weight: _propTypes2.default.oneOf(["bold", "medium", "regular", "light"])
};

Copy.styles = styles;

exports.default = Copy;
//# sourceMappingURL=Copy.js.map