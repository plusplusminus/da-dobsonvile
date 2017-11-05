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

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsideTwitter = function AsideTwitter(props) {
  var heading = props.heading,
      copy = props.copy,
      buttonLabel = props.buttonLabel,
      visual = props.visual;


  var styles = _aphrodite.StyleSheet.create({
    aside: {
      marginBottom: _variables.spacing.space4,
      borderLeft: '1px solid',
      borderColor: _variables.colors.borderBase,
      paddingLeft: _variables.spacing.space4,
      paddingBottom: _variables.spacing.space2
    },
    tweet: {
      marginBottom: _variables.spacing.space4
    }
  });

  return _react2.default.createElement(
    'aside',
    { className: (0, _aphrodite.css)(styles.aside) },
    _react2.default.createElement(_.Icon, { name: 'twitter', color: _variables.colors.socialTwitter, fs: "22px", mr: _variables.spacing.space2 }),
    _react2.default.createElement(
      _.Heading,
      {
        size: 'tiny',
        mb: 'medium',
        weight: 'light',
        tracking: 'large',
        inline: true,
        uppercase: true
      },
      heading
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(styles.tweet) },
      _react2.default.createElement(
        _.Copy,
        { mb: "small" },
        'Today, Leader, @MmusiMaimane, takes the #Change19 tour to the Western'
      ),
      _react2.default.createElement(
        _.Heading,
        { size: "tiny", color: "light", weight: "light", uppercase: true },
        '5 HOURS AGO'
      ),
      _react2.default.createElement(
        _.MoreLink,
        { color: "blue" },
        'View on Twitter'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(styles.tweet) },
      _react2.default.createElement(
        _.Copy,
        { mb: "small" },
        'Today, Leader, @MmusiMaimane, takes the #Change19 tour to the Western'
      ),
      _react2.default.createElement(
        _.Heading,
        { size: "tiny", color: "light", weight: "light", uppercase: true },
        '5 HOURS AGO'
      ),
      _react2.default.createElement(
        _.MoreLink,
        { color: "blue" },
        'View on Twitter'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(styles.tweet) },
      _react2.default.createElement(
        _.Copy,
        { mb: "small" },
        'Today, Leader, @MmusiMaimane, takes the #Change19 tour to the Western'
      ),
      _react2.default.createElement(
        _.Heading,
        { size: "tiny", color: "light", weight: "light", uppercase: true },
        '5 HOURS AGO'
      ),
      _react2.default.createElement(
        _.MoreLink,
        { color: "blue" },
        'View on Twitter'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(styles.tweet) },
      _react2.default.createElement(
        _.Copy,
        { mb: "small" },
        'Today, Leader, @MmusiMaimane, takes the #Change19 tour to the Western'
      ),
      _react2.default.createElement(
        _.Heading,
        { size: "tiny", color: "light", weight: "light", uppercase: true },
        '5 HOURS AGO'
      ),
      _react2.default.createElement(
        _.MoreLink,
        { color: "blue" },
        'View on Twitter'
      )
    )
  );
};

AsideTwitter.defaultProps = {
  buttonLabel: 'View All',
  copy: 'Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.',
  heading: 'Heading'
};

AsideTwitter.propTypes = {
  buttonLabel: _propTypes2.default.string,
  copy: _propTypes2.default.string,
  heading: _propTypes2.default.string
};

exports.default = AsideTwitter;
//# sourceMappingURL=AsideTwitter.js.map