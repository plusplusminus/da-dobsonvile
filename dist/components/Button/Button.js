'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonViewAll = exports.ButtonPrimary = exports.ButtonOutline = exports.ButtonDonate = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphrodite = require('aphrodite');

var _variables = require('../../common/styles/variables');

var _helpers = require('../../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
  var content = props.content,
      weight = props.weight,
      color = props.color,
      children = props.children;


  var styles = _aphrodite.StyleSheet.create({
    Button: _extends({
      padding: '15px 30px',
      borderRadius: '30px',
      borderWidth: '2px',
      borderStyle: 'solid',
      fontFamily: _variables.fonts.sans,
      cursor: 'pointer',
      textAlign: 'center',
      display: 'block',
      textTransform: 'uppercase',
      fontSize: '11px',
      lineHeight: '14px',
      fontWeight: _variables.fontWeight.bold,
      letterSpacing: _variables.letterSpacing.base,
      color: _variables.colors[props.color],
      borderColor: _variables.colors[props.borderColor],
      backgroundColor: _variables.colors[props.backgroundColor]
    }, (0, _helpers.getHoverAttributes)(props.hover, _variables.colors))
  });

  return _react2.default.createElement(
    'button',
    { className: (0, _aphrodite.css)(styles.Button), disabled: props.disabled || false },
    children
  );
}

Button.defaultProps = {
  color: 'White',
  borderColor: 'Primary',
  backgroundColor: 'Primary',
  hover: {
    backgroundColor: 'PrimaryHover',
    borderColor: 'PrimaryHover',
    color: 'White'
  }
};

var ButtonViewAll = function ButtonViewAll(props) {
  var styles = {
    color: props.color,
    borderColor: props.color,
    backgroundColor: 'Transparent',
    hover: {
      backgroundColor: props.color,
      borderColor: props.color,
      color: props.color === 'White' ? 'Primary' : 'White'
    }
  };
  return _react2.default.createElement(
    Button,
    styles,
    props.children
  );
};

ButtonViewAll.defaultProps = {
  color: 'BlueLight',
  borderColor: 'BlueLight',
  backgroundColor: 'Transparent',
  hover: {
    backgroundColor: 'BlueLightHover',
    borderColor: 'BlueLightHover',
    color: 'White'
  }
};

var ButtonPrimary = function ButtonPrimary(props) {
  var styles = {
    hover: {
      backgroundColor: 'PrimaryHover',
      borderColor: 'PrimaryHover'
    }
  };
  return _react2.default.createElement(
    Button,
    styles,
    props.children
  );
};

var ButtonOutline = function ButtonOutline(props) {
  var styles = {
    color: props.color,
    borderColor: props.color,
    backgroundColor: 'Transparent',
    hover: {
      backgroundColor: props.color,
      borderColor: props.color,
      color: props.color === 'White' ? 'Primary' : 'White'
    }
  };

  return _react2.default.createElement(
    Button,
    styles,
    props.children
  );
};

ButtonOutline.defaultProps = {
  color: 'Primary',
  borderColor: 'Primary',
  backgroundColor: 'Transparent',
  hover: {
    backgroundColor: 'PrimaryHover',
    borderColor: 'PrimaryHover',
    color: 'White'
  }
};

var ButtonDonate = function ButtonDonate(props) {
  var styles = {
    backgroundColor: 'Green',
    borderColor: 'Green',
    hover: {
      backgroundColor: 'GreenHover',
      borderColor: 'GreenHover'
    }
  };
  return _react2.default.createElement(
    Button,
    styles,
    props.children
  );
};

exports.ButtonDonate = ButtonDonate;
exports.ButtonOutline = ButtonOutline;
exports.ButtonPrimary = ButtonPrimary;
exports.ButtonViewAll = ButtonViewAll;
exports.default = Button;
//# sourceMappingURL=Button.js.map