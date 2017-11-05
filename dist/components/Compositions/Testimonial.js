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
    borderRadius: _variables.spacing.space05,
    overflow: 'hidden',
    marginBottom: _variables.spacing.space4,
    paddingTop: _variables.spacing.space9,
    paddingBottom: _variables.spacing.space9,
    backgroundColor: _variables.colors.bgWhite
  },
  wrapper: {},
  figure: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderRadius: '100%',
    overflow: 'hidden',
    margin: 0,
    paddingBottom: '100%'
  }
};

var Testimonial = function Testimonial(_ref) {
  var highlight = _ref.highlight,
      url = _ref.url,
      imageUrl = _ref.imageUrl,
      meta = _ref.meta,
      paragraph = _ref.paragraph,
      cta = _ref.cta;


  var baseStyles = _aphrodite.StyleSheet.create({
    container: _extends({}, styles.container),
    wrapper: _extends({}, styles.wrapper),
    figure: _extends({}, styles.figure)
  });

  return _react2.default.createElement(
    "section",
    { className: (0, _aphrodite.css)(baseStyles.container) },
    _react2.default.createElement(
      "div",
      { className: "row align-items-center" },
      _react2.default.createElement(
        "div",
        { className: "col-md-2 offset-md-1" },
        _react2.default.createElement("figure", { className: (0, _aphrodite.css)(baseStyles.figure), style: { backgroundImage: "url(" + imageUrl + ")" } })
      ),
      _react2.default.createElement(
        "div",
        { className: "col-md-8" },
        _react2.default.createElement(
          "div",
          { className: (0, _aphrodite.css)(baseStyles.wrapper) },
          highlight && _react2.default.createElement(
            _.Copy,
            {
              color: "blue",
              size: "large",
              weight: "medium"
            },
            highlight
          ),
          paragraph && _react2.default.createElement(
            _.Copy,
            { isParent: true },
            _react2.default.createElement("p", {
              className: (0, _aphrodite.css)(baseStyles.paragraph),
              dangerouslySetInnerHTML: createMarkup(paragraph)
            })
          ),
          meta && _react2.default.createElement(
            _.Heading,
            {
              level: 6,
              color: "blue",
              size: "tiny",
              letterSpacing: "small",
              weight: "medium",
              tracking: "small",
              mb: "none"
            },
            meta
          )
        )
      )
    )
  );
};

Testimonial.defaultProps = {
  highlight: null,
  meta: null,
  url: null,
  imageUrl: null,
  paragraph: null,
  cta: null
};

Testimonial.propTypes = {
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
  /** Call to Action of Card */
  cta: _propTypes2.default.string.isRequired
};

exports.default = Testimonial;
//# sourceMappingURL=Testimonial.js.map