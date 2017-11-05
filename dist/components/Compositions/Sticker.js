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
  sticker: {
    base: {
      borderRadius: _variables.spacing.space05,
      marginBottom: _variables.spacing.space2,
      overflow: 'hidden',
      display: 'inline-block',
      height: '100%'
    },
    imageUrl: {
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  wrapper: {
    base: {
      padding: _variables.spacing.space4,
      paddingTop: _variables.spacing.space3,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      border: '1px solid',
      height: '100%'
    }
  },
  color: {
    white: {
      base: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandWhite, 1),
        borderColor: _variables.colors.borderLight
      },
      imageUrl: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandWhite, 0.9),
        borderColor: _variables.colors.borderLight
      }
    },
    blue: {
      base: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandBlue, 1),
        borderColor: _variables.colors.brandBlue
      },
      imageUrl: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandBlue, 0.9),
        borderColor: _variables.colors.brandBlue
      }
    },
    green: {
      base: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandGreen, 1),
        borderColor: _variables.colors.brandGreen
      },
      imageUrl: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandGreen, 0.9),
        borderColor: _variables.colors.brandGreen
      }
    },
    red: {
      base: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandRed, 1),
        borderColor: _variables.colors.brandRed
      },
      imageUrl: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandRed, 0.9),
        borderColor: _variables.colors.brandRed
      }
    },
    yellow: {
      base: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandYellow, 1),
        borderColor: _variables.colors.brandYellow
      },
      imageUrl: {
        backgroundColor: (0, _helpers.rgba)(_variables.colors.brandYellow, 0.9),
        borderColor: _variables.colors.brandYellow
      }
    }
  }
};

var Sticker = function Sticker(_ref) {
  var color = _ref.color,
      imageUrl = _ref.imageUrl,
      title = _ref.title,
      content = _ref.content,
      icon = _ref.icon;


  var baseStyles = _aphrodite.StyleSheet.create({
    sticker: _extends({}, styles.sticker.base, color && styles.color[color], imageUrl && styles.sticker.imageUrl, {
      backgroundImage: 'url(' + imageUrl + ')'
    }),
    header: _extends({}, styles.header),
    wrapper: _extends({}, styles.wrapper.base, imageUrl && color && styles.color[color].imageUrl, !imageUrl && color && styles.color[color].base)
  });

  return _react2.default.createElement(
    'div',
    { className: (0, _aphrodite.css)(baseStyles.sticker) },
    _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(baseStyles.wrapper) },
      _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(baseStyles.header) },
        icon && _react2.default.createElement(_.Icon, {
          ml: _variables.spacing.space0,
          mr: _variables.spacing.space2,
          color: color === "white" ? _variables.colors.brandBlue : _variables.colors.brandWhite,
          fs: "49px",
          name: icon
        }),
        title && _react2.default.createElement(
          _.Heading,
          {
            size: "huge",
            weight: "regular",
            color: color === "white" ? "blue" : "white",
            mb: "tiny"
          },
          title
        )
      ),
      content && _react2.default.createElement(
        _.Copy,
        {
          color: color === "white" ? "blue" : "white",
          weight: title || icon ? "light" : "regular",
          size: title || icon ? "medium" : "huge",
          mb: "none"
        },
        content
      )
    )
  );
};

Sticker.defaultProps = {
  imageUrl: null,
  title: null,
  icon: null,
  color: "white",
  content: null
};

Sticker.propTypes = {
  /** Content of Component */
  content: _propTypes2.default.string.isRequired,
  /** Icon for the Title */
  icon: _propTypes2.default.string,
  /** ImageUrl for background effect */
  imageUrl: _propTypes2.default.string,
  /** Title of Sticker Component */
  title: _propTypes2.default.string,
  /** Background Color Sticker Component */
  color: _propTypes2.default.oneOf(["white", "blue", "red", "green", "yellow"])
};

exports.default = Sticker;
//# sourceMappingURL=Sticker.js.map