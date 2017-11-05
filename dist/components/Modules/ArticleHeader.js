'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphrodite = require('aphrodite');

var _ = require('..');

var _variables = require('../../common/styles/variables');

var _images = require('../../common/images');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleHeader = function ArticleHeader(props) {
  var meta = props.meta,
      title = props.title,
      attribution = props.attribution,
      subHeading = props.subHeading;


  var styles = _aphrodite.StyleSheet.create({
    articleHeader: {
      display: 'inline-block',
      width: '100%',
      marginBottom: _variables.spacing.space4
    }
  });

  return _react2.default.createElement(
    'header',
    { className: (0, _aphrodite.css)(styles.articleHeader) },
    subHeading && _react2.default.createElement(
      _.Heading,
      {
        level: 6,
        color: "blue",
        size: "tiny",
        letterSpacing: "small",
        weight: "regular",
        tracking: "small",
        mb: "tiny",
        uppercase: true
      },
      subHeading
    ),
    title && _react2.default.createElement(
      _.Heading,
      {
        level: 1,
        color: "blue",
        mb: "small",
        size: "large"
      },
      title
    ),
    attribution && _react2.default.createElement(
      _.Heading,
      {
        level: 6,
        color: "blue",
        size: "tiny",
        weight: "medium",
        tracking: "small",
        mb: "tiny"
      },
      attribution
    ),
    meta && _react2.default.createElement(
      _.Heading,
      {
        level: 6,
        size: "tiny",
        weight: "regular",
        tracking: "small"
      },
      meta
    ),
    _react2.default.createElement(_.Border, {
      mt: "large",
      mb: "none"
    })
  );
};

exports.default = ArticleHeader;
//# sourceMappingURL=ArticleHeader.js.map