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

var ArticleFooter = function ArticleFooter(props) {

  var styles = _aphrodite.StyleSheet.create({
    articleFooter: {},
    articleDetails: {},
    articleShare: {}
  });

  return _react2.default.createElement(
    'footer',
    { className: (0, _aphrodite.css)(styles.articleFooter) },
    _react2.default.createElement(
      'section',
      { className: (0, _aphrodite.css)(styles.articleDetails) },
      _react2.default.createElement(
        _.Widget,
        {
          colTitle: "col-md-3",
          colSection: "col-md-9",
          widgetTitle: "Publication Date" },
        _react2.default.createElement(
          _.Tag,
          null,
          '23 May 2019'
        )
      ),
      _react2.default.createElement(
        _.Widget,
        {
          colTitle: "col-md-3",
          colSection: "col-md-9",
          widgetTitle: "Author" },
        _react2.default.createElement(
          _.Tag,
          null,
          'Mmusi Maimane'
        )
      ),
      _react2.default.createElement(
        _.Widget,
        {
          colTitle: "col-md-3",
          colSection: "col-md-9",
          widgetTitle: "Category" },
        _react2.default.createElement(
          _.Tag,
          null,
          'News'
        ),
        _react2.default.createElement(
          _.Tag,
          null,
          'Speeches'
        )
      ),
      _react2.default.createElement(
        _.Widget,
        {
          colTitle: "col-md-3",
          colSection: "col-md-9",
          widgetTitle: "Tags" },
        _react2.default.createElement(
          _.Tag,
          null,
          'Education'
        ),
        _react2.default.createElement(
          _.Tag,
          null,
          'ANC'
        ),
        _react2.default.createElement(
          _.Tag,
          null,
          'Corruption'
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { className: (0, _aphrodite.css)(styles.articleShare) },
      _react2.default.createElement(_.Border, { mt: "large", mb: "large" }),
      _react2.default.createElement(
        _.Widget,
        {
          widgetTitle: "Direct Link",
          widgetTitleColor: "blue",
          colTitle: "col-md-12",
          colSection: "col-md-12" },
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'link', placeholder: 'https://da.org.za/news/corruption/article-name', readonly: true })
          )
        )
      ),
      _react2.default.createElement(_.Border, { mt: "small", mb: "small", borderColor: "none", color: "whiteO" }),
      _react2.default.createElement(
        _.Widget,
        {
          widgetTitle: "Share",
          widgetTitleColor: "blue",
          colTitle: "col-md-12",
          colSection: "col-md-12" },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              _.NavIcon,
              { iconName: 'facebook', iconColor: _variables.colors.socialFacebook },
              "Share on Facebook"
            ),
            _react2.default.createElement(
              _.NavIcon,
              { iconName: 'twitter', iconColor: _variables.colors.socialTwitter },
              "Share on Twitter"
            ),
            _react2.default.createElement(
              _.NavIcon,
              { iconName: 'envelope', iconColor: _variables.colors.socialEmail },
              "Send by Email"
            ),
            _react2.default.createElement(
              _.NavIcon,
              { iconName: 'whatsapp', iconColor: _variables.colors.socialWhatsApp },
              "Share with What's App"
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              _.NavIcon,
              { iconName: 'print', iconColor: _variables.colors.brandBlue },
              "Print"
            ),
            _react2.default.createElement(
              _.NavIcon,
              { iconName: 'bookmark', iconColor: _variables.colors.brandBlue },
              "Bookmark"
            ),
            _react2.default.createElement(
              _.NavIcon,
              { iconName: 'download', iconColor: _variables.colors.brandBlue },
              "Download"
            ),
            _react2.default.createElement(
              _.NavIcon,
              { iconName: 'newspaper', iconColor: _variables.colors.brandBlue },
              "Journalist sign up"
            )
          )
        )
      )
    )
  );
};

exports.default = ArticleFooter;
//# sourceMappingURL=ArticleFooter.js.map