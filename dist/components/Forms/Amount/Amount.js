"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _variables = require("../../../common/styles/variables");

var _ = require("../..");

var _aphrodite = require("aphrodite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Amount = function (_Component) {
  _inherits(Amount, _Component);

  function Amount() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Amount);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Amount.__proto__ || Object.getPrototypeOf(Amount)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: 50
    }, _this.onSelection = function (value) {
      _this.setState({
        value: value
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Amount, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var styles = _aphrodite.StyleSheet.create({
        wrapper: {
          marginBottom: _variables.spacing.space4
        },
        group: {
          marginBottom: this.state.value == "other" ? _variables.spacing.space1 : _variables.spacing.space0,
          borderRadius: _variables.spacing.space05,
          overflow: 'hidden',
          boxShadow: '0 0 0 1px #ebebeb'
        }
      });

      return _react2.default.createElement(
        "div",
        { className: (0, _aphrodite.css)(styles.wrapper) },
        this.props.label && _react2.default.createElement(
          _.Label,
          null,
          this.props.label
        ),
        _react2.default.createElement(
          "div",
          { className: (0, _aphrodite.css)(styles.group) },
          _react2.default.createElement(
            "div",
            { className: "row no-gutters" },
            this.props.items.map(function (item, index) {
              return _react2.default.createElement(
                "div",
                { className: "col", key: index },
                _react2.default.createElement(_.AmountButton, {
                  label: item.label,
                  value: item.value,
                  type: item.type,
                  selected: _this2.state.value === item.value,
                  onClick: function onClick() {
                    return _this2.onSelection(item.value);
                  }
                })
              );
            })
          )
        ),
        this.state.value === "other" ? this.props.children : null
      );
    }
  }]);

  return Amount;
}(_react.Component);

;

Amount.defaultProps = {
  items: [],
  label: null
};

exports.default = Amount;
//# sourceMappingURL=Amount.js.map