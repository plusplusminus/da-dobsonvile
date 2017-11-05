'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require('aphrodite');

var _ = require('..');

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Widget = function Widget(props) {
  var colTitle = props.colTitle,
      colSection = props.colSection,
      children = props.children,
      widgetTitle = props.widgetTitle,
      widgetTitleColor = props.widgetTitleColor;


  var styles = _aphrodite.StyleSheet.create({
    widget: {
      marginBottom: _variables.spacing.space1
    },
    title: {},
    section: {}
  });

  return _react2.default.createElement(
    'section',
    { className: (0, _aphrodite.css)(styles.widget) },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      widgetTitle && _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.title) + ' ' + colTitle },
        _react2.default.createElement(
          _.Heading,
          { size: "small", color: widgetTitleColor, mb: "small", tracking: "none" },
          widgetTitle
        )
      ),
      _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.section) + ' ' + colSection },
        children
      )
    )
  );
};

Widget.defaultProps = {
  colTitle: 'col-2',
  colSection: 'col-12',
  widgetTitle: 'Title',
  widgetTitleColor: null
};

Widget.propTypes = {
  /** Col value for Title */
  colTitle: _propTypes2.default.string,
  /** Col value for Section */
  colSection: _propTypes2.default.string,
  /** Title of Widget */
  widgetTitle: _propTypes2.default.string,
  /** Color of Widget based on color prop of Heading component */
  widgetTitleColor: _propTypes2.default.string
};

exports.default = Widget;
//# sourceMappingURL=Widget.js.map