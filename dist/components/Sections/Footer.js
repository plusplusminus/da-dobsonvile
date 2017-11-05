'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphrodite = require('aphrodite');

var _ = require('..');

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  var children = props.children;

  var styles = _aphrodite.StyleSheet.create({
    footer: {},
    menus: {
      paddingTop: _variables.spacing.space6,
      paddingBottom: _variables.spacing.space3,
      backgroundColor: _variables.colors.bgBlueLight,
      display: 'inline-block',
      width: '100%'
    },
    legal: {
      paddingTop: _variables.spacing.space3,
      backgroundColor: _variables.colors.bgBlue,
      display: 'inline-block',
      width: '100%'
    }
  });

  return _react2.default.createElement(
    'footer',
    { className: (0, _aphrodite.css)(styles.footer) },
    _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(styles.menus) },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_.FooterMenus, null)
      )
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(styles.legal) },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_.FooterLegal, null)
      )
    )
  );
};

Footer.defaultProps = {
  color: 'Copy'
};

exports.default = Footer;
//# sourceMappingURL=Footer.js.map