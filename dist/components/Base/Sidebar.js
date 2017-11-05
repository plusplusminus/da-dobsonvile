'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rambda = require('rambda');

var _aphrodite = require('aphrodite');

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  sidebar: {},
  pl: {
    none: {
      paddingLeft: _variables.spacing.space0
    },
    medium: {
      paddingLeft: _variables.spacing.space9
    }
  }
};

var Sidebar = function Sidebar(props) {
  var children = props.children,
      col = props.col,
      pl = props.pl;


  var baseStyles = _aphrodite.StyleSheet.create({
    sidebar: _extends({}, styles.sidebar, pl && styles.pl[pl])
  });

  return _react2.default.createElement(
    'aside',
    { className: (0, _aphrodite.css)(baseStyles.sidebar) + ' ' + col },
    children
  );
};

Sidebar.defaultProps = {
  children: null,
  col: 'col',
  pl: "medium"
};

Sidebar.propTypes = {
  /** Contents of the Sidebar */
  children: _propTypes2.default.node,
  /** Cols as per Bootstrap for layout */
  col: _propTypes2.default.node,
  /** Padding left  */
  pl: _propTypes2.default.oneOf(["none", "medium"])
};

Sidebar.styles = styles;

exports.default = Sidebar;
//# sourceMappingURL=Sidebar.js.map