'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require('aphrodite');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewAll = function ViewAll(props) {
  var buttonColor = props.buttonColor,
      children = props.children;


  var styles = _aphrodite.StyleSheet.create({
    ViewAll: {
      width: '100%',
      paddingTop: _variables.spacing.space6,
      marginTop: _variables.spacing.space7,
      borderTop: '1px solid',
      borderColor: props.borderColor,
      display: 'inline-block'
    }
  });

  return _react2.default.createElement(
    'div',
    { className: (0, _aphrodite.css)(styles.ViewAll) },
    _react2.default.createElement(
      _Button2.default,
      { color: props.buttonColor, center: true, outline: true },
      children
    )
  );
};

ViewAll.defaultProps = {
  children: 'View All',
  borderColor: _variables.colors.borderLight,
  buttonColor: 'blue'
};

ViewAll.propTypes = {
  /** Label of button*/
  children: _propTypes2.default.string,
  /** Color of Border as per variables.js*/
  borderColor: _propTypes2.default.string,
  /** Color of the button */
  buttonColor: _propTypes2.default.oneOf(["blue", "red", "green", "yellow", "white"])
};

exports.default = ViewAll;
//# sourceMappingURL=ViewAll.js.map