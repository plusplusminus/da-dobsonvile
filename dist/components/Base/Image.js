'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _images = require('../../common/images');

var _aphrodite = require('aphrodite');

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  image: {
    margin: 0,
    padding: 0,
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    flex: 'none'
  },
  fixed: {
    display: 'inline-block'
  },
  rounded: {
    borderRadius: _variables.spacing.space05
  }
};

var Image = function Image(props) {
  var imageUrl = props.imageUrl,
      alt = props.alt,
      fixed = props.fixed,
      rounded = props.rounded;


  var baseStyles = _aphrodite.StyleSheet.create({
    image: _extends({}, styles.image, fixed && styles.fixed, rounded && styles.rounded)
  });

  return _react2.default.createElement('img', { src: imageUrl, alt: alt, className: (0, _aphrodite.css)(baseStyles.image) });
};

Image.defaultProps = {
  imageUrl: _images.dobsonville,
  alt: 'alt text missing',
  fixed: false,
  rounded: false
};

Image.propTypes = {
  /** Alt text for the image */
  alt: _propTypes2.default.string.isRequired,
  /** Image src */
  imageUrl: _propTypes2.default.string.isRequired,
  /** Is this image not fluid */
  fixed: _propTypes2.default.bool.isRequired,
  /** Does the image have rounded corners */
  rounded: _propTypes2.default.bool.isRequired
};

Image.styles = styles;

exports.default = Image;
//# sourceMappingURL=Image.js.map