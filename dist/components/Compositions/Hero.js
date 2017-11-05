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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  hero: {
    base: {},
    imageUrl: {
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    },
    mb: {
      none: {
        marginBottom: _variables.spacing.space0
      },
      large: {
        marginBottom: _variables.spacing.space13
      }
    }
  },
  wrapper: {
    base: {
      paddingTop: parseInt(_variables.spacing.space9) * 2,
      paddingBottom: _variables.spacing.space13,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    imageUrl: _defineProperty({
      minHeight: parseInt(_variables.spacing.space6) * 6,
      background: _variables.colors.bgLight,
      backgroundColor: 'rgba(0,0,0,0.3)'
    }, 'background', 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(21,95,162,0.85) 100%)'),
    small: {
      paddingTop: _variables.spacing.space10,
      paddingBottom: _variables.spacing.space8,
      justifyContent: 'flex-end'
    }
  }
};

var Hero = function Hero(_ref) {
  var center = _ref.center,
      children = _ref.children,
      imageUrl = _ref.imageUrl,
      mb = _ref.mb,
      small = _ref.small,
      title = _ref.title;


  var baseStyles = _aphrodite.StyleSheet.create({
    hero: _extends({}, styles.hero.base, imageUrl && styles.hero.imageUrl, mb && styles.hero.mb[mb], {
      backgroundImage: 'url(' + imageUrl + ')'
    }),
    wrapper: _extends({}, styles.wrapper.base, imageUrl && styles.wrapper.imageUrl, small && styles.wrapper.small)
  });

  return _react2.default.createElement(
    'div',
    { className: (0, _aphrodite.css)(baseStyles.hero) },
    _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(baseStyles.wrapper) },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-10 ' + (center ? "offset-md-1" : null) },
            title && _react2.default.createElement(
              _.Heading,
              {
                size: "huge",
                color: imageUrl ? "white" : "blue",
                mb: !small ? "huge" : "small",
                center: !center ? false : true
              },
              title
            ),
            children
          )
        )
      )
    )
  );
};

Hero.defaultProps = {
  center: false,
  children: null,
  imageUrl: null,
  mb: "none",
  small: true,
  title: null
};

Hero.propTypes = {
  /** Is the title centered */
  center: _propTypes2.default.bool,
  /** Children of the Hero - such as CTA etc */
  children: _propTypes2.default.node,
  /** ImageUrl for background effect */
  imageUrl: _propTypes2.default.string,
  /** Margin Bottom of hero */
  mb: _propTypes2.default.oneOf(["none", "large"]),
  /** Is the Hero as small version */
  small: _propTypes2.default.bool,
  /** Title of Hero Component */
  title: _propTypes2.default.string.isRequired
};

exports.default = Hero;
//# sourceMappingURL=Hero.js.map