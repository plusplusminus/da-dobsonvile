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

var CardPerson = function CardPerson(props) {
  var heading = props.heading,
      meta = props.meta,
      moreLink = props.moreLink,
      noVisual = props.noVisual,
      visual = props.visual;


  var styles = _aphrodite.StyleSheet.create({
    cardPerson: {
      display: 'inline-block',
      width: '100%',
      marginBottom: _variables.spacing.space2,
      padding: _variables.spacing.space3,
      borderBottom: '1px solid',
      borderColor: _variables.colors.borderBase

    },
    content: {
      float: 'left'
    },
    wrapper: {
      marginBottom: _variables.spacing.space1
    },
    visual: {
      marginRight: _variables.spacing.space2,
      maxWidth: '140px',
      float: 'left'
    },
    table: _extends({
      fontFamily: _variables.fonts.sans,
      marginBottom: _variables.spacing.space1
    }, (0, _variables.fontStyles)('12px', '14px')),
    td: {
      paddingRight: _variables.spacing.space2,
      paddingBottom: _variables.spacing.space05
    }
  });

  return _react2.default.createElement(
    'div',
    { className: (0, _aphrodite.css)(styles.cardPerson) },
    visual && !noVisual && _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(styles.visual) },
      visual
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(styles.content) },
      _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.wrapper) },
        _react2.default.createElement(
          _.Heading,
          { size: 'medium', weight: 'medium' },
          heading
        ),
        _react2.default.createElement(
          _.Heading,
          { size: 'tiny', color: 'blue', weight: "medium" },
          meta
        )
      ),
      _react2.default.createElement(
        'table',
        { className: (0, _aphrodite.css)(styles.table) },
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            { className: (0, _aphrodite.css)(styles.td) },
            _react2.default.createElement(
              'strong',
              null,
              'Telephone:'
            )
          ),
          _react2.default.createElement(
            'td',
            { className: (0, _aphrodite.css)(styles.td) },
            'Elit Condimentum'
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            { className: (0, _aphrodite.css)(styles.td) },
            _react2.default.createElement(
              'strong',
              null,
              'Email:'
            )
          ),
          _react2.default.createElement(
            'td',
            { className: (0, _aphrodite.css)(styles.td) },
            'Ipsum Fermentum'
          )
        )
      ),
      moreLink && _react2.default.createElement(
        _.MoreLink,
        null,
        'More info'
      )
    )
  );
};

CardPerson.defaultProps = {
  heading: null,
  meta: '',
  noVisual: true,
  visual: null,
  moreLink: true
};

CardPerson.propTypes = {
  heading: _propTypes2.default.string,
  meta: _propTypes2.default.string,
  noVisual: _propTypes2.default.bool,
  visual: _propTypes2.default.string,
  moreLink: _propTypes2.default.bool
};

exports.default = CardPerson;
//# sourceMappingURL=CardPersonOld.js.map