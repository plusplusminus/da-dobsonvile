'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AsideOverlay$propTyp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require('aphrodite');

var _ = require('..');

var _variables = require('../../common/styles/variables');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _helpers = require('../../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  asideOverlay: {
    base: {
      borderRadius: _variables.spacing.space1,
      marginBottom: _variables.spacing.space4,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  },
  bg: {
    borderRadius: _variables.spacing.space1,
    paddingTop: _variables.spacing.space9,
    paddingRight: _variables.spacing.space2,
    paddingBottom: _variables.spacing.space9,
    paddingLeft: _variables.spacing.space2,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  mb: {
    none: {
      marginBottom: _variables.spacing.space0
    },
    small: {
      marginBottom: _variables.spacing.space4
    },
    large: {
      marginBottom: _variables.spacing.space9
    }
  },
  color: {
    dark: {
      imageUrl: {
        backgroundColor: _variables.colors.bgDarkO
      },
      base: {
        backgroundColor: _variables.colors.bgDark
      }
    },
    blue: {
      imageUrl: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandBlue, 0.9)
      },
      base: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandBlue, 1)
      }
    },
    green: {
      imageUrl: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandGreen, 0.9)
      },
      base: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandGreen, 1)
      }
    },
    red: {
      imageUrl: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandRed, 0.9)
      },
      base: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandRed, 1)
      }
    },
    yellow: {
      imageUrl: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandYellow, 0.9)
      },
      base: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandYellow, 1)
      }
    }
  }
};

var AsideOverlay = function AsideOverlay(props) {
  var title = props.title,
      color = props.color,
      paragraph = props.paragraph,
      cta = props.cta,
      mb = props.mb,
      imageUrl = props.imageUrl;


  var baseStyles = _aphrodite.StyleSheet.create({
    asideOverlay: _extends({}, styles.asideOverlay.base, mb && styles.mb[mb]),
    bg: _extends({}, styles.bg, imageUrl && color && styles.color[color].imageUrl, !imageUrl && color && styles.color[color].base)
  });

  return _react2.default.createElement(
    'aside',
    { className: (0, _aphrodite.css)(baseStyles.asideOverlay), style: { backgroundImage: 'url(' + imageUrl + ')' } },
    _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(baseStyles.bg) },
      title && _react2.default.createElement(
        _.Heading,
        {
          color: "white",
          size: "large",
          mb: "small",
          center: true
        },
        title
      ),
      paragraph && _react2.default.createElement(
        _.Copy,
        {
          color: "white",
          weight: "bold",
          mb: "large",
          center: true
        },
        paragraph
      ),
      cta && _react2.default.createElement(
        _Button2.default,
        {
          color: 'white',
          center: true
        },
        cta
      )
    )
  );
};

AsideOverlay.defaultProps = {
  color: "dark",
  mb: 'small',
  cta: 'View All',
  paragraph: 'Find out more about DAs delivery record',
  title: 'Heading'
};

AsideOverlay.propTypes = (_AsideOverlay$propTyp = {
  /** Button label */
  cta: _propTypes2.default.string,
  /** Paragraph appearing below Title */
  paragraph: _propTypes2.default.string,
  /** Title of Overlay */
  title: _propTypes2.default.string
}, _defineProperty(_AsideOverlay$propTyp, 'title', _propTypes2.default.string), _defineProperty(_AsideOverlay$propTyp, 'color', _propTypes2.default.oneOf(["dark", "blue", "red", "green", "yellow"])), _defineProperty(_AsideOverlay$propTyp, 'mb', _propTypes2.default.oneOf(["none", "small", "large"])), _AsideOverlay$propTyp);

exports.default = AsideOverlay;
//# sourceMappingURL=AsideOverlay.js.map