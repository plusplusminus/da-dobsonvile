'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require('aphrodite');

var _ = require('../..');

var _variables = require('../../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavItem = function NavItem(props) {
  var content = props.content,
      weight = props.weight,
      color = props.color,
      children = props.children,
      mr = props.mr,
      ml = props.ml;


  var styles = _aphrodite.StyleSheet.create({
    navItem: _extends({
      color: props.color,
      marginTop: props.mt,
      marginRight: props.mr,
      marginBottom: props.mb,
      marginLeft: props.ml,
      display: props.display,
      fontWeight: props.fontWeight,
      fontFamily: _variables.fonts.sans,
      listStyle: 'none'
    }, (0, _variables.fontStyles)(props.fs, props.lh), {
      ':hover': {
        textDecoration: 'none'
      }
    })
  });

  var className = (0, _aphrodite.css)(styles.navItem);

  return _react2.default.createElement(
    'li',
    { className: className },
    props.children
  );
};

NavItem.defaultProps = {
  color: _variables.colors.linkBase,
  display: 'inline-block',
  fontWeight: _variables.fontWeight.regular,
  fs: '14px',
  lh: '18px',
  mt: _variables.spacing.space0,
  mr: _variables.spacing.space1,
  mb: _variables.spacing.space0,
  ml: _variables.spacing.space1
};

NavItem.propTypes = {
  /** Text color as per variables.js */
  color: _propTypes2.default.string.isRequired,
  /** Display property as per CSS */
  display: _propTypes2.default.string,
  /** Font weight as per CSS */
  fontWeight: _propTypes2.default.string,
  /** Font size as pixel value */
  fs: _propTypes2.default.string,
  /** Line height as pixel value */
  lh: _propTypes2.default.string,
  /** Margin top in Spacing value as per variables.js */
  mt: _propTypes2.default.string,
  /** Margin right in Spacing value as per variables.js */
  mr: _propTypes2.default.string,
  /** Margin bottom in Spacing value as per variables.js */
  mb: _propTypes2.default.string,
  /** Margin left in Spacing value as per variables.js */
  ml: _propTypes2.default.string
};

exports.default = NavItem;
//# sourceMappingURL=NavItem.js.map