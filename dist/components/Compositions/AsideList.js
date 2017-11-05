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

var AsideList = function AsideList(props) {
  var cta = props.cta,
      children = props.children,
      heading = props.heading,
      title = props.title;


  var styles = _aphrodite.StyleSheet.create({
    asideList: {
      display: 'block',
      width: '100%',
      marginBottom: _variables.spacing.space9
    }
  });

  return _react2.default.createElement(
    'nav',
    { className: (0, _aphrodite.css)(styles.asideList) },
    title && _react2.default.createElement(
      _.Heading,
      { color: "red", tracking: "huge", size: "tiny", mb: "medium", weight: "light", uppercase: true },
      title
    ),
    children,
    cta && _react2.default.createElement(
      _.MoreLink,
      null,
      cta
    )
  );
};

AsideList.defaultProps = {
  children: null,
  title: null
};

AsideList.propTypes = {
  children: _propTypes2.default.array,
  title: _propTypes2.default.string
};

exports.default = AsideList;
//# sourceMappingURL=AsideList.js.map