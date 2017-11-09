"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _variables = require("../../common/styles/variables");

var _ = require("..");

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

    _this.toggleItem = function () {
      _this.setState({
        selected: !_this.state.selected
      });
    };

    _this.state = {
      selected: false
    };
    return _this;
  }

  _createClass(Amount, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var styles = _aphrodite.StyleSheet.create({
        wrapper: {
          borderRadius: _variables.spacing.space05,
          overflow: 'hidden',
          boxShadow: '0 0 0 1px #ebebeb'
        }
      });

      return _react2.default.createElement(
        "div",
        { className: (0, _aphrodite.css)(styles.wrapper) },
        _react2.default.createElement(
          "div",
          { className: "row no-gutters" },
          this.props.items.map(function (item, index) {
            return _react2.default.createElement(
              "div",
              { className: "col", key: index },
              _react2.default.createElement(
                _.ButtonTest,
                {
                  full: true,
                  rounded: false,
                  customStyles: {
                    borderWidth: "0px",
                    boxShadow: '0 0 0 1px #ebebeb',
                    backgroundColor: _this2.state.selected ? _variables.colors.brandBlue : _variables.colors.brandWhite,
                    color: _this2.state.selected ? _variables.colors.brandWhite : _variables.colors.brandBlue
                  },
                  onClick: function onClick() {
                    return _this2.toggleItem();
                  }
                },
                item.label
              )
            );
          })
        )
      );
    }
  }]);

  return Amount;
}(_react.Component);

;

Amount.defaultProps = {
  items: []
};

exports.default = Amount;
//# sourceMappingURL=Amount.js.map