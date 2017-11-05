'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphrodite = require('aphrodite');

var _variables = require('../../../common/styles/variables');

var _helpers = require('../../../utils/helpers');

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavButton = function NavButton(props) {

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
    _.Button,
    styles,
    props.children
  );
};

exports.default = NavButton;
//# sourceMappingURL=NavButton.js.map