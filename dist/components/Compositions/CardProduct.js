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

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createMarkup = function createMarkup(content) {
  return { __html: "" + content };
};

var styles = {
  card: {
    backgroundColor: _variables.colors.bgLight,
    display: 'flex',
    borderRadius: _variables.spacing.space1,
    overflow: 'hidden',
    flexDirection: 'column',
    marginBottom: _variables.spacing.space5
  },
  wrapper: {
    padding: _variables.spacing.space4,
    paddingBottom: _variables.spacing.space6
  },
  figure: {
    base: {
      width: '100%',
      margin: 0
    },
    image: {
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }
};

var CardProduct = function CardProduct(_ref) {
  var title = _ref.title,
      url = _ref.url,
      imageUrl = _ref.imageUrl,
      text = _ref.text,
      cta = _ref.cta,
      small = _ref.small,
      children = _ref.children,
      meta = _ref.meta;


  var baseStyles = _aphrodite.StyleSheet.create({
    card: _extends({}, styles.card),
    wrapper: _extends({}, styles.wrapper),
    figure: _extends({}, styles.figure.base),
    image: _extends({}, styles.figure.image)
  });

  return _react2.default.createElement(
    "aside",
    { className: (0, _aphrodite.css)(baseStyles.card) },
    imageUrl && _react2.default.createElement(
      "figure",
      { className: (0, _aphrodite.css)(baseStyles.figure) },
      _react2.default.createElement("img", { src: imageUrl, alt: "", className: (0, _aphrodite.css)(baseStyles.image) })
    ),
    _react2.default.createElement(
      "div",
      { className: (0, _aphrodite.css)(baseStyles.wrapper) },
      meta && _react2.default.createElement(
        _.Heading,
        {
          level: 6,
          color: "blue",
          size: "tiny",
          weight: "regular",
          tracking: "small",
          uppercase: true
        },
        meta
      ),
      title && _react2.default.createElement(
        _.Heading,
        {
          color: "blue",
          size: !small ? "large" : "small",
          mb: "small"
        },
        title
      ),
      text && _react2.default.createElement(_.Copy, {
        mb: !small ? "large" : "medium",
        size: !small ? "medium" : "small",
        html: text
      }),
      children && children
    )
  );
};

CardProduct.propTypes = {
  /** Title of Card */
  title: _propTypes2.default.string.isRequired,
  /** Paragraph content of Card */
  text: _propTypes2.default.string,
  /** URL of Card */
  url: _propTypes2.default.string.isRequired,
  /** ImageURL of Card */
  imageUrl: _propTypes2.default.string,
  /** Meta text to appear above Title */
  meta: _propTypes2.default.string,
  /** Is this a small version of the card? Used in narrow sidebar and below article */
  small: _propTypes2.default.bool.isRequired
};

CardProduct.defaultProps = {
  title: null,
  url: null,
  meta: null,
  imageUrl: null,
  text: null,
  cta: null,
  small: false
};

exports.default = CardProduct;
//# sourceMappingURL=CardProduct.js.map