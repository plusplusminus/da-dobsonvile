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

var _ = require("..");

var _variables = require("../../common/styles/variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createMarkup = function createMarkup(content) {
  return { __html: "" + content };
};

var styles = {
  container: {
    display: 'inline-block',
    width: '100%',
    marginBottom: _variables.spacing.space3
  },
  figure: {
    base: {
      marginBottom: _variables.spacing.space3
    },
    image: {
      maxWidth: '100%',
      height: 'auto'
    }
  }
};

var CardVideo = function CardVideo(_ref) {
  var title = _ref.title,
      url = _ref.url,
      imageUrl = _ref.imageUrl,
      paragraph = _ref.paragraph,
      cta = _ref.cta,
      featured = _ref.featured,
      color = _ref.color;


  var baseStyles = _aphrodite.StyleSheet.create({
    container: _extends({}, styles.container),
    figure: _extends({}, styles.figure.base),
    image: _extends({}, styles.figure.image)
  });

  return _react2.default.createElement(
    "article",
    { className: (0, _aphrodite.css)(baseStyles.container) },
    _react2.default.createElement(
      "figure",
      { className: (0, _aphrodite.css)(baseStyles.figure) },
      _react2.default.createElement("img", { src: imageUrl, alt: "", className: (0, _aphrodite.css)(baseStyles.image) })
    ),
    _react2.default.createElement(
      "header",
      null,
      featured == true ? _react2.default.createElement(
        _.Heading,
        {
          level: 3,
          mb: "small",
          size: "large",
          color: color
        },
        title
      ) : _react2.default.createElement(
        _.Heading,
        {
          level: 3,
          mb: "small",
          size: "small",
          color: color
        },
        title
      )
    ),
    featured && paragraph && _react2.default.createElement(
      _.Copy,
      {
        isParent: true,
        color: color
      },
      _react2.default.createElement("p", {
        className: (0, _aphrodite.css)(baseStyles.paragraph),
        dangerouslySetInnerHTML: createMarkup(paragraph)
      })
    ),
    featured && cta && _react2.default.createElement(
      _.MoreLink,
      { href: url, color: color },
      cta
    )
  );
};

CardVideo.propTypes = _defineProperty({
  /** Title of Card */
  title: _propTypes2.default.string.isRequired,
  /** Color of Headings and Copy of Card */
  color: _propTypes2.default.string,
  /** Paragraph content of Card */
  paragraph: _propTypes2.default.string,
  /** URL of Card */
  url: _propTypes2.default.string.isRequired,
  /** ImageURL of Card */
  imageUrl: _propTypes2.default.string,
  /** Call to Action of Card */
  cta: _propTypes2.default.string.isRequired,
  /** Is card featured */
  featured: _propTypes2.default.bool.isRequired
}, "featured", _propTypes2.default.string);

CardVideo.defaultProps = {
  title: null,
  paragraph: null,
  url: null,
  imageUrl: null,
  cta: null,
  featured: false,
  color: "base"
};

exports.default = CardVideo;
//# sourceMappingURL=CardVideo.js.map