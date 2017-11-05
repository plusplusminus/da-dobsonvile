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
    display: "block",
    marginBottom: _variables.spacing.space6
  },
  figure: {
    base: {},
    image: {
      display: "block",
      maxWidth: "100%"
    }
  },
  header: {
    base: {},
    heading: {},
    meta: {}
  },
  paragraph: {},
  moreLink: {}
};

var CardCampaign = function CardCampaign(_ref) {
  var title = _ref.title,
      url = _ref.url,
      imageUrl = _ref.imageUrl,
      meta = _ref.meta,
      paragraph = _ref.paragraph,
      cta = _ref.cta;


  var baseStyles = _aphrodite.StyleSheet.create({
    container: _extends({}, styles.container),
    header: _extends({}, styles.header.base),
    paragraph: _extends({}, styles.paragraph.base),
    figure: _extends({}, styles.figure.base),
    moreLink: _extends({}, styles.moreLink)
  });

  return _react2.default.createElement(
    "article",
    { className: (0, _aphrodite.css)(baseStyles.container) },
    _react2.default.createElement(
      "header",
      { className: (0, _aphrodite.css)(baseStyles.header) },
      meta && _react2.default.createElement(
        _.Heading,
        {
          level: 6,
          color: "blue",
          size: "tiny",
          weight: "regular",
          tracking: "small",
          uppercase: true,
          override: styles.header.meta
        },
        meta
      ),
      _react2.default.createElement(
        _.Heading,
        {
          level: 3,
          color: "blue",
          mb: "small",
          size: "large",
          override: styles.header.heading
        },
        title
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "row" },
      imageUrl && _react2.default.createElement(
        "div",
        { className: "col-sm-3" },
        _react2.default.createElement(
          "figure",
          { className: (0, _aphrodite.css)(baseStyles.figure) },
          _react2.default.createElement("img", { src: imageUrl, alt: "", style: styles.figure.image })
        )
      ),
      _react2.default.createElement(
        "main",
        { className: !imageUrl ? "col-md-12" : "col-md-9" },
        _react2.default.createElement(
          "div",
          { className: (0, _aphrodite.css)(baseStyles.paragraph) },
          _react2.default.createElement(
            _.Copy,
            { isParent: true },
            _react2.default.createElement("p", {
              className: (0, _aphrodite.css)(baseStyles.paragraph),
              dangerouslySetInnerHTML: createMarkup(paragraph)
            })
          ),
          cta && _react2.default.createElement(
            _.MoreLink,
            { href: url, style: styles.moreLink },
            cta
          )
        )
      )
    )
  );
};

CardCampaign.propTypes = {
  /** Title of Card */
  title: _propTypes2.default.string.isRequired,
  /** Meta text of Card */
  meta: _propTypes2.default.string,
  /** URL of Card */
  url: _propTypes2.default.string.isRequired,
  /** ImageURL of Card */
  imageUrl: _propTypes2.default.string,
  /** Paragraph content of Card */
  paragraph: _propTypes2.default.string,
  /** Call to Action of Card */
  cta: _propTypes2.default.string.isRequired
};

CardCampaign.defaultProps = {
  title: null,
  meta: null,
  url: null,
  imageUrl: null,
  paragraph: null,
  cta: null
};

exports.default = CardCampaign;
//# sourceMappingURL=CardCampaign.js.map