'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphrodite = require('aphrodite');

var _ = require('..');

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterLegal = function FooterLegal(props) {
  var content = props.content,
      children = props.children;

  var styles = _aphrodite.StyleSheet.create({
    footerLegal: {
      fontFamily: _variables.fonts.sans,
      marginTop: _variables.spacing.space3,
      marginBottom: _variables.spacing.space3,
      color: _variables.colors.baseWhite
    },
    legal: _extends({
      fontWeight: _variables.fontWeight.light
    }, (0, _variables.fontStyles)('11px', '30px')),
    attribution: _extends({
      textAlign: 'right',
      display: 'block',
      fontWeight: _variables.fontWeight.light
    }, (0, _variables.fontStyles)('11px', '30px'))
  });

  return _react2.default.createElement(
    'div',
    { className: (0, _aphrodite.css)(styles.footerLegal) },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-lg' },
        _react2.default.createElement(
          'small',
          { className: (0, _aphrodite.css)(styles.legal) },
          '\xA9 2017 Democratic Alliance  |  All Rights Reserved  |  Sitemap Disclaimer'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-lg' },
        _react2.default.createElement(
          'small',
          { className: (0, _aphrodite.css)(styles.attribution) },
          'Created by the friendly people at PlusPlusMinus'
        )
      )
    )
  );
};

FooterLegal.defaultProps = {};

exports.default = FooterLegal;
//# sourceMappingURL=FooterLegal.js.map