"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require("aphrodite");

var _components = require("../../components");

var _variables = require("../../common/styles/variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Masthead = function Masthead(props) {

  return _react2.default.createElement(
    "nav",
    null,
    _react2.default.createElement(
      _components.NavbarSecondary,
      null,
      _react2.default.createElement(
        _components.NavItem,
        { fs: "13px", lh: "16px", color: _variables.colors.brandWhite, mr: "auto", ml: _variables.spacing.space0 },
        _react2.default.createElement(
          _components.MoreLink,
          _defineProperty({ color: "white", arrowDirection: "left", lowercase: true, size: "large", weight: "regular", tracking: "small" }, "size", "medium"),
          "Visit da.org.za"
        )
      )
    ),
    _react2.default.createElement(
      _components.Navbar,
      null,
      _react2.default.createElement(
        _components.NavItem,
        { mr: "auto", ml: _variables.spacing.space0 },
        _react2.default.createElement(_components.Logo, { division: "Western Cape" })
      ),
      _react2.default.createElement(
        _components.NavItem,
        { fontWeight: _variables.fontWeight.bold, color: _variables.colors.baseWhite, fs: "18px" },
        _react2.default.createElement("span", { className: "icon icon-youtube" })
      ),
      _react2.default.createElement(
        _components.NavItem,
        { fontWeight: _variables.fontWeight.bold, color: _variables.colors.baseWhite, fs: "18px" },
        _react2.default.createElement("span", { className: "icon icon-instagram" })
      ),
      _react2.default.createElement(
        _components.NavItem,
        { fontWeight: _variables.fontWeight.bold, color: _variables.colors.baseWhite, fs: "18px" },
        _react2.default.createElement("span", { className: "icon icon-facebook" })
      ),
      _react2.default.createElement(
        _components.NavItem,
        { fontWeight: _variables.fontWeight.bold, color: _variables.colors.baseWhite, fs: "18px" },
        _react2.default.createElement("span", { className: "icon icon-twitter" })
      ),
      _react2.default.createElement(
        _components.NavItem,
        { fontWeight: _variables.fontWeight.bold, color: _variables.colors.baseWhite },
        "Campaigns"
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
        { fontWeight: _variables.fontWeight.bold, color: _variables.colors.linkBlue, mr: _variables.spacing.space0 },
        _react2.default.createElement(
          _components.ButtonTest,
          { color: "green" },
          "Donate"
        )
      ),
      _react2.default.createElement(
        _components.NavItem,
        { mr: _variables.spacing.space0, ml: _variables.spacing.space2 },
        _react2.default.createElement(_components.Badge, { status: "neutral" })
      )
    ),
    _react2.default.createElement(
      _components.NavbarSub,
      null,
      _react2.default.createElement(
        _components.NavItem,
        { fontWeight: _variables.fontWeight.bold, color: _variables.colors.linkBlue, fs: "13px", lh: "16px", ml: _variables.spacing.space0 },
        "Bokamoso"
      ),
      _react2.default.createElement(
        _components.NavItem,
        { fontWeight: _variables.fontWeight.bold, color: _variables.colors.linkBlue, fs: "13px", lh: "16px" },
        "Speeches"
      ),
      _react2.default.createElement(
        _components.NavItem,
        { fontWeight: _variables.fontWeight.bold, color: _variables.colors.linkBlue, fs: "13px", lh: "16px" },
        "Archive"
      ),
      _react2.default.createElement(
        _components.NavItem,
        { fontWeight: _variables.fontWeight.bold, color: _variables.colors.linkBlue, ml: "auto", mr: _variables.spacing.space0 },
        _react2.default.createElement(
          _components.MoreLink,
          { color: "blue", size: "medium", lowercase: true, tracking: "small", weight: "regular" },
          "Subscribe to Bokamoso"
        )
      )
    )
  );
};

Masthead.propTypes = {};

Masthead.defaultProps = {};

exports.default = Masthead;
//# sourceMappingURL=Masthead.js.map