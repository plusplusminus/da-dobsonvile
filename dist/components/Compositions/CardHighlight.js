"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base;

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
    base: (_base = {
      display: 'inline-block',
      width: '100%'
    }, _defineProperty(_base, "display", 'flex'), _defineProperty(_base, "borderRadius", _variables.spacing.space05), _defineProperty(_base, "overflow", 'hidden'), _defineProperty(_base, "marginBottom", _variables.spacing.space4), _base),
    col: {
      flexDirection: 'column'
    },
    row: {
      flexDirection: 'row'
    }
  },
  wrapper: {
    base: {
      padding: _variables.spacing.space9,
      backgroundColor: _variables.colors.bgWhite

    },
    col: {
      width: '100%'
    },
    row: {
      width: '50%'
    }
  },
  figure: {
    base: {
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      margin: 0
    },
    row: {
      width: '50%'
    },
    col: {
      width: '100%',
      paddingBottom: '60%',
      order: -1
    }
  },
  paragraph: {
    marginBottom: _variables.spacing.space4
  },
  bgColor: {
    white: {
      backgroundColor: _variables.colors.bgWhite,
      color: _variables.colors.textBase
    },
    blue: {
      backgroundColor: _variables.colors.bgBlue
    }
  }
};

var CardHighlight = function CardHighlight(_ref) {
  var bgColor = _ref.bgColor,
      title = _ref.title,
      url = _ref.url,
      imageUrl = _ref.imageUrl,
      meta = _ref.meta,
      paragraph = _ref.paragraph,
      children = _ref.children,
      col = _ref.col;


  var baseStyles = _aphrodite.StyleSheet.create({
    container: _extends({}, styles.container.base, styles.container.row, col && styles.container.col),
    wrapper: _extends({}, styles.wrapper.base, styles.wrapper.row, col && styles.wrapper.col, bgColor && styles.bgColor[bgColor]),
    figure: _extends({}, styles.figure.base, styles.figure.row, col && styles.figure.col),
    paragraph: _extends({}, styles.paragraph)
  });

  return _react2.default.createElement(
    "section",
    { className: (0, _aphrodite.css)(baseStyles.container) },
    _react2.default.createElement(
      "div",
      { className: (0, _aphrodite.css)(baseStyles.wrapper) },
      _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          _.Heading,
          {
            level: 3,
            color: bgColor === "white" ? "blue" : "white",
            size: "large",
            mb: meta === true ? "tiny" : "small"
          },
          title
        ),
        meta && _react2.default.createElement(
          _.Heading,
          {
            level: 6,
            color: bgColor === "white" ? "blue" : "white",
            size: "tiny",
            letterSpacing: "small",
            weight: "medium",
            tracking: "small",
            mb: "small"
          },
          meta
        )
      ),
      _react2.default.createElement(
        "div",
        { className: (0, _aphrodite.css)(baseStyles.paragraph) },
        _react2.default.createElement(
          _.Copy,
          {
            isParent: true,
            color: bgColor === "white" ? null : "white"
          },
          _react2.default.createElement("p", {
            className: (0, _aphrodite.css)(baseStyles.paragraph),
            dangerouslySetInnerHTML: createMarkup(paragraph)
          })
        ),
        children
      )
    ),
    _react2.default.createElement("figure", { className: (0, _aphrodite.css)(baseStyles.figure), style: { backgroundImage: "url(" + imageUrl + ")" } })
  );
};

CardHighlight.defaultProps = {
  title: null,
  meta: null,
  url: null,
  col: null,
  imageUrl: null,
  paragraph: null,
  bgColor: "white"
};

CardHighlight.propTypes = {
  /** Background Color of Card */
  bgColor: _propTypes2.default.string.isRequired,
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
  /** Is image and text below each other? */
  col: _propTypes2.default.bool.isRequired
};

exports.default = CardHighlight;
//# sourceMappingURL=CardHighlight.js.map