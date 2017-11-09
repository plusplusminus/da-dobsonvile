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

var _ = require('..');

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  base: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  bg: {},
  bgColor: {
    blue: {
      backgroundColor: _variables.colors.bgBlue
    },
    blueLight: {
      backgroundColor: _variables.colors.bgBlueLight
    },
    light: {
      backgroundColor: _variables.colors.bgLight
    },
    lightO: {
      backgroundColor: _variables.colors.bgLightO
    },
    dark: {
      backgroundColor: _variables.colors.bgDark
    },
    darkO: {
      backgroundColor: _variables.colors.bgDarkO
    },
    white: {
      backgroundColor: _variables.colors.bgWhite
    }
  },
  center: {
    textAlign: 'center'
  },
  space: {
    mb: {
      none: {
        marginBottom: _variables.spacing.space0
      },
      small: {
        marginBottom: _variables.spacing.space6
      },
      medium: {
        marginBottom: _variables.spacing.space9
      },
      large: {
        marginBottom: _variables.spacing.space13
      }
    },
    mt: {
      none: {
        marginTop: _variables.spacing.space0
      },
      small: {
        marginTop: _variables.spacing.space6
      },
      medium: {
        marginTop: _variables.spacing.space9
      },
      large: {
        marginTop: _variables.spacing.space13
      }
    },
    pb: {
      none: {
        paddingBottom: _variables.spacing.space0
      },
      small: {
        paddingBottom: _variables.spacing.space6
      },
      medium: {
        paddingBottom: _variables.spacing.space9
      },
      large: {
        paddingBottom: _variables.spacing.space13
      }
    },
    pt: {
      none: {
        paddingTop: _variables.spacing.space0
      },
      small: {
        paddingTop: _variables.spacing.space6
      },
      medium: {
        paddingTop: _variables.spacing.space9
      },
      large: {
        paddingTop: _variables.spacing.space13
      }
    }
  }
};

var sectionFull = function sectionFull(props) {
  var bgColor = props.bgColor,
      bgUrl = props.bgUrl,
      color = props.color,
      center = props.center,
      mb = props.mb,
      mt = props.mt,
      pb = props.pb,
      pt = props.pt,
      title = props.title,
      children = props.children,
      container = props.container,
      rowClass = props.rowClass;


  var baseStyles = _aphrodite.StyleSheet.create({
    base: _extends({}, styles.base, center && styles[center], mt && styles.space.mt[mt], mb && styles.space.mb[mb]),
    bg: _extends({}, styles.bg, pt && styles.space.pt[pt], pb && styles.space.pb[pb], bgColor && styles.bgColor[bgColor])
  });

  return _react2.default.createElement(
    'section',
    { className: (0, _aphrodite.css)(baseStyles.base), style: { backgroundImage: 'url(' + bgUrl + ')' } },
    _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(baseStyles.bg) },
      _react2.default.createElement(
        'div',
        { className: container === true ? "container" : null },
        title && !center && _react2.default.createElement(
          _.HeadingLines,
          { lineLeft: true, color: color, mb: "huge" },
          _react2.default.createElement(
            _.Heading,
            { color: color, size: "tiny", tracking: "huge", weight: "light", uppercase: true },
            title
          )
        ),
        title && center && _react2.default.createElement(
          _.Heading,
          { color: color, mb: "small", center: true },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: rowClass },
          children
        )
      )
    )
  );
};

sectionFull.defaultProps = {
  bgColor: 'white',
  bgUrl: null,
  color: 'base',
  center: false,
  children: null,
  mb: 'large',
  mt: 'none',
  pt: 'none',
  pb: 'none',
  title: null,
  container: true,
  rowClass: 'row'
};

sectionFull.propTypes = {
  /** Background color of Section. Layered over the optional bgUrl image */
  bgColor: _propTypes2.default.oneOf(["blue", "blueLight", "light", "lightO", "dark", "darkO", "white"]),
  /** URL for Background Image of Section */
  rowClass: _propTypes2.default.string,
  /** URL for Background Image of Section */
  bgUrl: _propTypes2.default.string,
  /** Color of Heading in section. Can be used to pass to children */
  color: _propTypes2.default.oneOf(["base", "blue", "red", "white"]),
  /** Should section text and heading be center aligned. Changes format of title if present. Can be overwritten by alignment children components */
  center: _propTypes2.default.bool,
  /** Content of section. For coloumns, apply Bootstrap col values to divs inside children. */
  children: _propTypes2.default.node.isRequired,
  /** Should section contents be wrapped in container div */
  container: _propTypes2.default.bool,
  /** Margin Bottom of Section. Margin is primary spacing unit. Top down approach */
  mb: _propTypes2.default.oneOf(["none", "large", "medium", "small"]),
  /** Margin Top of Section. Margin is primary spacing unit. Top down approach */
  mt: _propTypes2.default.oneOf(["none", "large", "medium", "small"]),
  /** Padding Top of Section. Margin is primary spacing unit. Top down approach */
  pt: _propTypes2.default.oneOf(["none", "large", "medium", "small"]),
  /** Padding Bottom of Section. Margin is primary spacing unit. Top down approach */
  pb: _propTypes2.default.oneOf(["none", "large", "medium", "small"]),
  /** Optional Title of section */
  title: _propTypes2.default.string

};

exports.default = sectionFull;
//# sourceMappingURL=SectionFull.js.map