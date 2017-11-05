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
  card: {
    base: {
      display: 'inline-block',
      width: '100%',
      padding: 0,
      marginBottom: _variables.spacing.space4,
      backgroundColor: _variables.colors.bgWhite
    },
    border: {
      border: '1px solid',
      borderColor: _variables.colors.borderBase
    },
    rounded: {
      borderRadius: _variables.spacing.space05
    }
  },
  wrapper: {
    float: 'left',
    paddingTop: _variables.spacing.space3,
    paddingRight: _variables.spacing.space4,
    paddingBottom: _variables.spacing.space2,
    paddingLeft: _variables.spacing.space4
  },
  figure: {
    base: {
      float: 'left',
      margin: 0
    },
    image: {
      maxWidth: '140px',
      height: 'auto'
    }
  },
  table: _extends({
    fontFamily: _variables.fonts.sans,
    marginBottom: _variables.spacing.space1
  }, (0, _variables.fontStyles)('12px', '14px')),
  td: {
    paddingRight: _variables.spacing.space2,
    paddingBottom: _variables.spacing.space05
  },
  tdLabel: {
    letterSpacing: _variables.letterSpacing.small,
    fontWeight: _variables.fontWeight.medium,
    paddingRight: _variables.spacing.space2,
    paddingBottom: _variables.spacing.space05
  }
};

var CardPerson = function CardPerson(_ref) {
  var title = _ref.title,
      url = _ref.url,
      imageUrl = _ref.imageUrl,
      border = _ref.border,
      cta = _ref.cta,
      meta = _ref.meta,
      tel = _ref.tel,
      email = _ref.email,
      rounded = _ref.rounded;


  var baseStyles = _aphrodite.StyleSheet.create({
    card: _extends({}, styles.card.base, border && styles.card.border, rounded && styles.card.rounded),
    wrapper: _extends({}, styles.wrapper),
    figure: _extends({}, styles.figure.base),
    image: _extends({}, styles.figure.image),
    table: _extends({}, styles.table),
    td: _extends({}, styles.td),
    tdLabel: _extends({}, styles.tdLabel)
  });

  return _react2.default.createElement(
    "div",
    { className: (0, _aphrodite.css)(baseStyles.card) },
    imageUrl && _react2.default.createElement(
      "figure",
      { className: (0, _aphrodite.css)(baseStyles.figure) },
      _react2.default.createElement("img", { src: imageUrl, alt: "", className: (0, _aphrodite.css)(baseStyles.image) })
    ),
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
            weight: "medium",
            color: "blue",
            size: "small"
          },
          title
        ),
        _react2.default.createElement(
          _.Heading,
          {
            mb: "small",
            size: "tiny",
            color: "blue",
            weight: "medium"
          },
          meta
        )
      ),
      tel || email ? _react2.default.createElement(
        "table",
        { className: (0, _aphrodite.css)(baseStyles.table) },
        tel && _react2.default.createElement(
          "tr",
          null,
          _react2.default.createElement(
            "td",
            { className: (0, _aphrodite.css)(baseStyles.tdLabel) },
            "Telephone:"
          ),
          _react2.default.createElement(
            "td",
            { className: (0, _aphrodite.css)(baseStyles.td) },
            tel
          )
        ),
        email && _react2.default.createElement(
          "tr",
          null,
          _react2.default.createElement(
            "td",
            { className: (0, _aphrodite.css)(baseStyles.tdLabel) },
            "Email:"
          ),
          _react2.default.createElement(
            "td",
            { className: (0, _aphrodite.css)(baseStyles.td) },
            email
          )
        )
      ) : null,
      cta && _react2.default.createElement(
        _.MoreLink,
        { href: url },
        cta
      )
    )
  );
};

CardPerson.propTypes = {
  /** Title of Card */
  title: _propTypes2.default.string.isRequired,
  /** Meta info of person */
  meta: _propTypes2.default.string,
  /** URL of Card */
  url: _propTypes2.default.string.isRequired,
  /** ImageURL of Card */
  imageUrl: _propTypes2.default.string,
  /** Call to Action of Card */
  cta: _propTypes2.default.string.isRequired,
  /** Is the card bordered */
  border: _propTypes2.default.bool.isRequired,
  /** Is the card rounded */
  rounded: _propTypes2.default.bool.isRequired,
  /** Email details of person */
  email: _propTypes2.default.string,
  /** Tel number of person */
  tel: _propTypes2.default.string
};

CardPerson.defaultProps = {
  title: null,
  url: null,
  meta: null,
  border: true,
  rounded: true,
  imageUrl: null,
  cta: null,
  tel: null,
  email: null
};

exports.default = CardPerson;
//# sourceMappingURL=CardPerson.js.map