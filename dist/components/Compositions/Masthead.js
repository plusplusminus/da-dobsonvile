"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require("aphrodite");

var _reactMedia = require("react-media");

var _reactMedia2 = _interopRequireDefault(_reactMedia);

var _components = require("../../components");

var _variables = require("../../common/styles/variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Masthead = function Masthead(props) {

  return _react2.default.createElement(
    "nav",
    null,
    _react2.default.createElement(
      _reactMedia2.default,
      { query: "(max-width: 767px)" },
      function (matches) {
        var _React$createElement, _React$createElement2, _React$createElement3;

        return matches ? _react2.default.createElement(
          _components.NavbarSecondary,
          { padding: _variables.spacing.space1 },
          _react2.default.createElement(
            _components.NavItem,
            { fs: "13px", lh: "16px", color: _variables.colors.brandWhite, mr: "auto", ml: _variables.spacing.space0 },
            _react2.default.createElement(
              _components.MoreLink,
              (_React$createElement = { color: "white", arrowDirection: "left", lowercase: true, size: "large", weight: "regular", tracking: "small" }, _defineProperty(_React$createElement, "size", "medium"), _defineProperty(_React$createElement, "href", "#"), _React$createElement),
              "Visit da.org.za"
            )
          ),
          _react2.default.createElement(
            _components.NavItem,
            { color: _variables.colors.textLightO, fs: "18px", href: "#" },
            _react2.default.createElement(_components.Icon, { name: "search", mr: _variables.spacing.space0, ml: _variables.spacing.space0 })
          ),
          _react2.default.createElement(
            _components.NavItem,
            { color: _variables.colors.textLightO, fs: "18px", href: "#" },
            _react2.default.createElement(_components.Icon, { name: "youtube", mr: _variables.spacing.space0, ml: _variables.spacing.space0 })
          ),
          _react2.default.createElement(
            _components.NavItem,
            { color: _variables.colors.textLightO, fs: "18px", href: "#" },
            _react2.default.createElement(_components.Icon, { name: "instagram", mr: _variables.spacing.space0, ml: _variables.spacing.space0 })
          ),
          _react2.default.createElement(
            _components.NavItem,
            { color: _variables.colors.textLightO, fs: "18px", href: "#" },
            _react2.default.createElement(_components.Icon, { name: "facebook", mr: _variables.spacing.space0, ml: _variables.spacing.space0 })
          ),
          _react2.default.createElement(
            _components.NavItem,
            (_React$createElement2 = { color: _variables.colors.textLightO, fs: "18px", href: "#", mr: _variables.spacing.space0 }, _defineProperty(_React$createElement2, "mr", _variables.spacing.space0), _defineProperty(_React$createElement2, "ml", _variables.spacing.space0), _React$createElement2),
            _react2.default.createElement(_components.Icon, { name: "twitter" })
          )
        ) : _react2.default.createElement(
          _components.NavbarSecondary,
          null,
          _react2.default.createElement(
            _components.NavItem,
            { fs: "13px", lh: "16px", color: _variables.colors.brandWhite, mr: "auto", ml: _variables.spacing.space0 },
            _react2.default.createElement(
              _components.MoreLink,
              (_React$createElement3 = { color: "white", arrowDirection: "left", lowercase: true, size: "large", weight: "regular", tracking: "small" }, _defineProperty(_React$createElement3, "size", "medium"), _defineProperty(_React$createElement3, "href", "#"), _React$createElement3),
              "Visit da.org.za"
            )
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fs: "16px", lh: "16px", color: _variables.colors.brandWhite, href: "#" },
            _react2.default.createElement(_components.Icon, { name: "search", mr: _variables.spacing.space0, ml: _variables.spacing.space0 })
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fs: "13px", lh: "16px", color: _variables.colors.brandWhite, href: "#" },
            "Why the DA?"
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fs: "13px", lh: "16px", color: _variables.colors.brandWhite, href: "#" },
            "Where We Govern"
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fs: "13px", lh: "16px", color: _variables.colors.brandWhite, href: "#" },
            "Our People"
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fs: "13px", lh: "16px", color: _variables.colors.brandWhite, href: "#" },
            "Newsroom"
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fs: "13px", lh: "16px", color: _variables.colors.brandWhite, href: "#", mr: _variables.spacing.space0 },
            "Contact"
          )
        );
      }
    ),
    _react2.default.createElement(_reactMedia2.default, { query: { maxWidth: 767 }, render: function render() {
        return _react2.default.createElement(
          _components.Navbar,
          { padding: _variables.spacing.space2 },
          _react2.default.createElement(
            _components.NavItem,
            { mr: "auto", ml: _variables.spacing.space0, href: "#" },
            _react2.default.createElement(_components.Logo, { division: "Western Cape", size: "80px" })
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fontWeight: _variables.fontWeight.bold, color: _variables.colors.linkBlue },
            _react2.default.createElement(
              _components.ButtonTest,
              { color: "white", outline: true, iconBefore: "close", size: "small" },
              "Menu"
            )
          )
        );
      } }),
    _react2.default.createElement(_reactMedia2.default, { query: { minWidth: 768, maxWidth: 991 }, render: function render() {
        return _react2.default.createElement(
          _components.Navbar,
          null,
          _react2.default.createElement(
            _components.NavItem,
            { mr: "auto", ml: _variables.spacing.space0, href: "#" },
            _react2.default.createElement(_components.Logo, { division: "Western Cape", size: "100px" })
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fontWeight: _variables.fontWeight.bold, color: _variables.colors.linkBlue, mr: _variables.spacing.space0 },
            _react2.default.createElement(
              _components.ButtonTest,
              { color: "green" },
              "Donate"
            )
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fontWeight: _variables.fontWeight.bold, color: _variables.colors.linkBlue },
            _react2.default.createElement(
              _components.ButtonTest,
              { color: "white", outline: true, iconBefore: "bars" },
              "Menu"
            )
          )
        );
      } }),
    _react2.default.createElement(_reactMedia2.default, { query: { minWidth: 992 }, render: function render() {
        return _react2.default.createElement(
          _components.Navbar,
          null,
          _react2.default.createElement(
            _components.NavItem,
            { mr: "auto", ml: _variables.spacing.space0, href: "#" },
            _react2.default.createElement(_components.Logo, { division: "Western Cape" })
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fontWeight: _variables.fontWeight.bold, color: _variables.colors.textLightO, fs: "18px", href: "#" },
            _react2.default.createElement(_components.Icon, { name: "youtube", mr: _variables.spacing.space0, ml: _variables.spacing.space0 })
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fontWeight: _variables.fontWeight.bold, color: _variables.colors.textLightO, fs: "18px", href: "#" },
            _react2.default.createElement(_components.Icon, { name: "instagram", mr: _variables.spacing.space0, ml: _variables.spacing.space0 })
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fontWeight: _variables.fontWeight.bold, color: _variables.colors.textLightO, fs: "18px", href: "#" },
            _react2.default.createElement(_components.Icon, { name: "facebook", mr: _variables.spacing.space0, ml: _variables.spacing.space0 })
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fontWeight: _variables.fontWeight.bold, color: _variables.colors.textLightO, fs: "18px", href: "#" },
            _react2.default.createElement(_components.Icon, { name: "twitter", mr: _variables.spacing.space0, ml: _variables.spacing.space0 })
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fontWeight: _variables.fontWeight.bold, color: _variables.colors.textLightO, href: "#" },
            "Campaigns"
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fontWeight: _variables.fontWeight.bold, color: _variables.colors.linkBlue, mr: _variables.spacing.space0 },
            _react2.default.createElement(
              _components.ButtonTest,
              { color: "green" },
              "Donate"
            )
          ),
          _react2.default.createElement(
            _components.NavItem,
            { fontWeight: _variables.fontWeight.bold, color: _variables.colors.linkBlue },
            _react2.default.createElement(
              _components.ButtonTest,
              { color: "white", outline: true },
              "Get Involved"
            )
          ),
          _react2.default.createElement(
            _components.NavItem,
            { mr: _variables.spacing.space0, ml: _variables.spacing.space2 },
            _react2.default.createElement(_components.Badge, { status: "neutral" })
          )
        );
      } }),
    _react2.default.createElement(
      _components.NavbarSub,
      null,
      _react2.default.createElement(
        _components.NavItem,
        { fontWeight: _variables.fontWeight.medium, color: _variables.colors.linkBlue, fs: "13px", lh: "16px", ml: _variables.spacing.space0, href: "#" },
        "Bokamoso"
      ),
      _react2.default.createElement(
        _components.NavItem,
        { fontWeight: _variables.fontWeight.medium, color: _variables.colors.linkBlue, fs: "13px", lh: "16px", href: "#" },
        "Speeches"
      ),
      _react2.default.createElement(
        _components.NavItem,
        { fontWeight: _variables.fontWeight.medium, color: _variables.colors.linkBlue, fs: "13px", lh: "16px", href: "#" },
        "Archive"
      ),
      _react2.default.createElement(
        _components.NavItem,
        { fontWeight: _variables.fontWeight.medium, color: _variables.colors.linkBlue, ml: "auto", mr: _variables.spacing.space0, href: "#" },
        _react2.default.createElement(
          _components.MoreLink,
          { color: "blue", size: "medium", lowercase: true, tracking: "small", weight: "regular" },
          "Subscribe to Bokamoso"
        )
      )
    ),
    _react2.default.createElement(_reactMedia2.default, { query: { maxWidth: 767 }, render: function render() {
        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            _components.Navbar,
            { padding: _variables.spacing.space2, vertical: true, background: _variables.colors.bgLight },
            _react2.default.createElement(
              _components.NavItem,
              { fs: "13px", lh: "16px", mt: _variables.spacing.space1, mb: _variables.spacing.space2, color: _variables.colors.linkBlue, ml: "0", mr: "0", href: "#" },
              "Campaigns"
            ),
            _react2.default.createElement(
              _components.NavItem,
              { fs: "13px", lh: "16px", mt: _variables.spacing.space1, mb: _variables.spacing.space2, color: _variables.colors.linkBlue, ml: "0", mr: "0", href: "#" },
              "Get Involved"
            ),
            _react2.default.createElement(
              _components.NavItem,
              { fs: "13px", lh: "16px", mt: _variables.spacing.space1, mb: _variables.spacing.space2, color: _variables.colors.linkBlue, ml: "0", mr: "0", href: "#" },
              "Why the DA?"
            ),
            _react2.default.createElement(
              _components.NavItem,
              { fs: "13px", lh: "16px", mt: _variables.spacing.space1, mb: _variables.spacing.space2, color: _variables.colors.linkBlue, ml: "0", mr: "0", href: "#" },
              "Where We Govern"
            ),
            _react2.default.createElement(
              _components.NavItem,
              { fs: "13px", lh: "16px", mt: _variables.spacing.space1, mb: _variables.spacing.space2, color: _variables.colors.linkBlue, ml: "0", mr: "0", href: "#" },
              "Our People"
            ),
            _react2.default.createElement(
              _components.NavItem,
              { fs: "13px", lh: "16px", mt: _variables.spacing.space1, mb: _variables.spacing.space2, color: _variables.colors.linkBlue, ml: "0", mr: "0", href: "#" },
              "Newsroom"
            ),
            _react2.default.createElement(
              _components.NavItem,
              { fs: "13px", lh: "16px", mt: _variables.spacing.space1, mb: _variables.spacing.space2, color: _variables.colors.linkBlue, ml: "0", mr: "0", href: "#" },
              "Contact"
            )
          ),
          _react2.default.createElement(
            _components.ButtonTest,
            { color: "green", mt: _variables.spacing.space4, full: true },
            "Donate"
          )
        );
      } })
  );
};

Masthead.propTypes = {};

Masthead.defaultProps = {};

exports.default = Masthead;
//# sourceMappingURL=Masthead.js.map