'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarSub = exports.NavbarSecondary = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphrodite = require('aphrodite');

var _components = require('../../../components');

var _variables = require('../../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(props) {
  var content = props.content,
      weight = props.weight,
      color = props.color,
      children = props.children;


  var styles = _aphrodite.StyleSheet.create({
    navbar: _extends({
      backgroundColor: props.background,
      paddingTop: props.padding,
      paddingBottom: props.padding,
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }, props.custom),
    ul: {
      width: '100%',
      marginBottom: 0,
      paddingLeft: 0,
      display: 'flex',
      alignItems: 'center'
    }
  });

  return _react2.default.createElement(
    'nav',
    { className: (0, _aphrodite.css)(styles.navbar) },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'ul',
        { className: (0, _aphrodite.css)(styles.ul) },
        props.children
      )
    )
  );
};

Navbar.defaultProps = {
  background: _variables.colors.bgBlue,
  padding: _variables.spacing.space4
};

var NavbarSecondary = function NavbarSecondary(props) {
  var styles = {
    background: _variables.colors.bgBlueLight,
    padding: _variables.spacing.space2
  };

  return _react2.default.createElement(
    Navbar,
    styles,
    props.children
  );
};

var NavbarSub = function NavbarSub(props) {
  var styles = {
    background: _variables.colors.baseWhite,
    justifyContent: 'flex-start'
  };

  var custom = {
    borderBottom: '1px solid',
    borderColor: _variables.colors.borderLight,
    paddingTop: parseInt(_variables.spacing.space2) * 0.75,
    paddingBottom: parseInt(_variables.spacing.space2) * 0.75,
    justifyContent: 'flex-start'
  };

  return _react2.default.createElement(
    Navbar,
    _extends({}, styles, { custom: custom }),
    props.children
  );
};

exports.NavbarSecondary = NavbarSecondary;
exports.NavbarSub = NavbarSub;
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map