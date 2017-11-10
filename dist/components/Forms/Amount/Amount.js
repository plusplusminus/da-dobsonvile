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

  function Amount(props) {
    _classCallCheck(this, Amount);

    var _this = _possibleConstructorReturn(this, (Amount.__proto__ || Object.getPrototypeOf(Amount)).call(this, props));

    _this.state = {
      active: 0
    };

    _this.onSelection = function (value) {
      var amount = value.value;

      if (value.type === 'other') {
        amount = 0;
        return _this.setState({
          active: "other"
        });
      } else {
        _this.setState({ active: amount });
      }

      if (_this.props.onPress) {
        _this.props.onPress(amount);
      }
    };

    _this.state = {
      active: _this.props.amount
    };
    return _this;
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
          marginBottom: this.state.active == "other" ? _variables.spacing.space1 : _variables.spacing.space0,
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
                  value: item.value || "0",
                  type: item.type,
                  selected: _this2.state.active === item.value,
                  onClick: function onClick() {
                    return _this2.onSelection(item);
                  }
                })
              );
            })
          )
        ),
        this.state.active === "other" ? this.props.children : null
      );
    }
  }]);

  return Amount;
}(_react.Component);

;

Amount.defaultProps = {
  items: [],
  label: null,
  amount: 0
};

exports.default = Amount;
//# sourceMappingURL=Amount.js.map