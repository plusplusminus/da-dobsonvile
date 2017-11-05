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

var createMarkup = function createMarkup(content) {
  return { __html: "" + content };
};

var styles = {
  container: {
    display: "inline-block",
    marginBottom: _variables.spacing.space4
  },
  header: {},
  figure: {
    margin: 0
  }
};

var CardNews = function CardNews(_ref) {
  var featured = _ref.featured,
      title = _ref.title,
      url = _ref.url,
      imageUrl = _ref.imageUrl,
      meta = _ref.meta,
      paragraph = _ref.paragraph,
      visual = _ref.visual;


  var baseStyles = _aphrodite.StyleSheet.create({
    container: _extends({}, styles.container),
    figure: _extends({}, styles.figure)
  });

  return _react2.default.createElement(
    "article",
    { className: (0, _aphrodite.css)(baseStyles.container) },
    _react2.default.createElement(
      "div",
      { className: "row" },
      imageUrl && _react2.default.createElement(
        "div",
        { className: "col-md-6" },
        _react2.default.createElement(
          "figure",
          { className: (0, _aphrodite.css)(baseStyles.figure) },
          _react2.default.createElement("img", { src: imageUrl, alt: "", className: "img-fluid" })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: (imageUrl && "col-md-6") + " " + (!imageUrl && "col-md-12") },
        _react2.default.createElement(
          "header",
          { className: (0, _aphrodite.css)(baseStyles.header) },
          _react2.default.createElement(
            _.Heading,
            {
              level: 3,
              size: "" + (featured == true ? "medium" : "small"),
              mb: "tiny",
              tracking: "none"
            },
            title
          ),
          meta && _react2.default.createElement(
            _.Heading,
            {
              level: 6,
              size: "tiny",
              tracking: "none",
              weight: "light",
              uppercase: true
            },
            meta
          )
        )
      )
    )
  );
};

CardNews.propTypes = {
  /** Title of Card */
  title: _propTypes2.default.string.isRequired,
  /** Meta text of Card */
  meta: _propTypes2.default.string.isRequired,
  /** URL of Card */
  url: _propTypes2.default.string.isRequired,
  /** ImageURL of Card */
  imageUrl: _propTypes2.default.string,
  /** Paragraph content of Card */
  paragraph: _propTypes2.default.string,
  featured: _propTypes2.default.bool
};

CardNews.defaultProps = {
  title: null,
  meta: null,
  url: null,
  imageUrl: null,
  paragraph: null,
  featured: false
};

exports.default = CardNews;
//# sourceMappingURL=CardNews.js.map