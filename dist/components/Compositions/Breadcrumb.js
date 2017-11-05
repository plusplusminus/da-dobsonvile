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

var _ = require('..');

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  breadcrumb: _extends({
    fontWeight: _variables.fontWeight.bold,
    display: 'block'
  }, (0, _variables.fontStyles)('13px', '20px')),
  mb: {
    small: {
      marginBottom: _variables.spacing.space1
    },
    large: {
      marginBottom: _variables.spacing.space4
    }
  }
};

var Breadcrumb = function Breadcrumb(props) {
  var children = props.children,
      mb = props.mb;


  var baseStyles = _aphrodite.StyleSheet.create({
    breadcrumb: _extends({}, styles.breadcrumb, mb && styles.mb[mb])
  });

  return _react2.default.createElement(
    'span',
    { className: (0, _aphrodite.css)(baseStyles.breadcrumb) },
    _react2.default.createElement(
      _.Copy,
      { size: 'small', weight: 'medium', mb: 'none' },
      children,
      _react2.default.createElement(_.Icon, { name: "angle-right" })
    )
  );
};

Breadcrumb.defaultProps = {
  children: null,
  mb: "small"
};

Breadcrumb.propTypes = {
  /** Margin bottom  */
  mb: _propTypes2.default.oneOf(["small", "large"])
};

Breadcrumb.styles = styles;

exports.default = Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map