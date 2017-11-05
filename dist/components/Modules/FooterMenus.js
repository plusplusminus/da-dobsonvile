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

var FooterMenus = function FooterMenus(props) {
  var content = props.content,
      weight = props.weight,
      col = props.col,
      children = props.children;

  var styles = _aphrodite.StyleSheet.create({
    footerMenus: {
      marginBottom: _variables.spacing.space3
    },
    wrapper: {
      marginBottom: _variables.spacing.space5
    },
    menu: {
      margin: _variables.spacing.space0,
      padding: _variables.spacing.space0
    }
  });

  return _react2.default.createElement(
    'div',
    { className: (0, _aphrodite.css)(styles.footerMenus) },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.wrapper) + ' ' + col },
        _react2.default.createElement(
          _.Heading,
          { color: "white", size: "tiny", weight: "bold", letterSpacing: "small", mb: "tiny", uppercase: true },
          'Contact Details'
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.menu) },
          _react2.default.createElement(
            _.NavIcon,
            { color: "White", iconColor: "White", iconName: 'mobile' },
            '+27 832 234 1232'
          ),
          _react2.default.createElement(
            _.NavIcon,
            { color: "White", iconColor: "White", iconName: 'instagram' },
            'Instagram'
          ),
          _react2.default.createElement(
            _.NavIcon,
            { color: "White", iconColor: "White", iconName: 'facebook' },
            'Facebook'
          ),
          _react2.default.createElement(
            _.NavIcon,
            { color: "White", iconColor: "White", iconName: 'twitter' },
            'Twitter'
          ),
          _react2.default.createElement(
            _.NavIcon,
            { color: "White", iconColor: "White", iconName: 'youtube' },
            'YouTube'
          ),
          _react2.default.createElement(
            _.NavIcon,
            { color: "White", iconColor: "White", iconName: 'envelope' },
            'Email'
          ),
          _react2.default.createElement(
            _.MoreLink,
            { color: "white", uppercase: true },
            'View all Info'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.wrapper) + ' ' + col },
        _react2.default.createElement(
          _.Heading,
          { color: "white", size: "tiny", weight: "bold", letterSpacing: "small", mb: "tiny", uppercase: true },
          'About the DA'
        ),
        _react2.default.createElement(
          'ul',
          { className: (0, _aphrodite.css)(styles.menu) },
          _react2.default.createElement(
            _.NavItem,
            { ml: _variables.spacing.space0, mr: _variables.spacing.space0, mb: _variables.spacing.space1, display: "block", fontWeight: _variables.fontWeight.light, color: _variables.colors.baseWhite },
            'Vision'
          ),
          _react2.default.createElement(
            _.NavItem,
            { ml: _variables.spacing.space0, mr: _variables.spacing.space0, mb: _variables.spacing.space1, display: "block", fontWeight: _variables.fontWeight.light, color: _variables.colors.baseWhite },
            'Policies'
          ),
          _react2.default.createElement(
            _.NavItem,
            { ml: _variables.spacing.space0, mr: _variables.spacing.space0, mb: _variables.spacing.space1, display: "block", fontWeight: _variables.fontWeight.light, color: _variables.colors.baseWhite },
            'Principles'
          ),
          _react2.default.createElement(
            _.NavItem,
            { ml: _variables.spacing.space0, mr: _variables.spacing.space0, mb: _variables.spacing.space1, display: "block", fontWeight: _variables.fontWeight.light, color: _variables.colors.baseWhite },
            'History'
          ),
          _react2.default.createElement(
            _.NavItem,
            { ml: _variables.spacing.space0, mr: _variables.spacing.space0, mb: _variables.spacing.space1, display: "block", fontWeight: _variables.fontWeight.light, color: _variables.colors.baseWhite },
            'Our Constitution'
          ),
          _react2.default.createElement(
            _.NavItem,
            { ml: _variables.spacing.space0, mr: _variables.spacing.space0, mb: _variables.spacing.space1, display: "block", fontWeight: _variables.fontWeight.light, color: _variables.colors.baseWhite },
            'DA Youth'
          ),
          _react2.default.createElement(
            _.NavItem,
            { ml: _variables.spacing.space0, mr: _variables.spacing.space0, mb: _variables.spacing.space1, display: "block", fontWeight: _variables.fontWeight.light, color: _variables.colors.baseWhite },
            'Blue, the Network'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.wrapper) + ' ' + col },
        _react2.default.createElement(
          _.Heading,
          { color: "white", size: "tiny", weight: "bold", letterSpacing: "small", mb: "tiny", uppercase: true },
          'Newsroom'
        ),
        _react2.default.createElement(
          'ul',
          { className: (0, _aphrodite.css)(styles.menu) },
          _react2.default.createElement(
            _.NavItem,
            { ml: _variables.spacing.space0, mr: _variables.spacing.space0, mb: _variables.spacing.space1, display: "block", fontWeight: _variables.fontWeight.light, color: _variables.colors.baseWhite },
            'News'
          ),
          _react2.default.createElement(
            _.NavItem,
            { ml: _variables.spacing.space0, mr: _variables.spacing.space0, mb: _variables.spacing.space1, display: "block", fontWeight: _variables.fontWeight.light, color: _variables.colors.baseWhite },
            'Speeches'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(styles.wrapper) + ' ' + col },
        _react2.default.createElement(
          _.Heading,
          { color: "white", size: "tiny", weight: "bold", letterSpacing: "small", mb: "tiny", uppercase: true },
          'Campaigns'
        ),
        _react2.default.createElement(
          'ul',
          { className: (0, _aphrodite.css)(styles.menu) },
          _react2.default.createElement(
            _.NavItem,
            { ml: _variables.spacing.space0, mr: _variables.spacing.space0, mb: _variables.spacing.space1, display: "block", fontWeight: _variables.fontWeight.light, color: _variables.colors.baseWhite },
            'Remove President Zuma'
          ),
          _react2.default.createElement(
            _.NavItem,
            { ml: _variables.spacing.space0, mr: _variables.spacing.space0, mb: _variables.spacing.space1, display: "block", fontWeight: _variables.fontWeight.light, color: _variables.colors.baseWhite },
            'Social Grants Crisis'
          ),
          _react2.default.createElement(
            _.NavItem,
            { ml: _variables.spacing.space0, mr: _variables.spacing.space0, mb: _variables.spacing.space1, display: "block", fontWeight: _variables.fontWeight.light, color: _variables.colors.baseWhite },
            'Education in the DA-led Western Cape'
          ),
          _react2.default.createElement(
            _.NavItem,
            { ml: _variables.spacing.space0, mr: _variables.spacing.space0, mb: _variables.spacing.space1, display: "block", fontWeight: _variables.fontWeight.light, color: _variables.colors.baseWhite },
            'Vision 2029'
          ),
          _react2.default.createElement(
            _.NavItem,
            { ml: _variables.spacing.space0, mr: _variables.spacing.space0, mb: _variables.spacing.space1, display: "block", fontWeight: _variables.fontWeight.light, color: _variables.colors.baseWhite },
            'A Rescue Mission for the Lost Generation'
          )
        )
      )
    )
  );
};

FooterMenus.defaultProps = {
  col: 'col-lg'
};

FooterMenus.propTypes = {
  col: _propTypes2.default.string
};

exports.default = FooterMenus;
//# sourceMappingURL=FooterMenus.js.map