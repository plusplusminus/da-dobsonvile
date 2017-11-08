"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _variables = require("../../../common/styles/variables");

var _ = require("../..");

var _aphrodite = require("aphrodite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AmountButton = function AmountButton(props) {
  var label = props.label,
      selected = props.selected,
      value = props.value,
      type = props.type;


  var styles = _aphrodite.StyleSheet.create({
    wrapper: {
      borderRadius: _variables.spacing.space05,
      overflow: 'hidden',
      boxShadow: '0 0 0 1px #ebebeb'
    }
  });

  return _react2.default.createElement(
    _.ButtonTest,
    {
      full: true,
      rounded: false,
      customStyles: {
        borderWidth: "0px",
        boxShadow: '0 0 0 1px #ebebeb',
        backgroundColor: selected === true ? _variables.colors.brandBlue : _variables.colors.brandWhite,
        color: selected === true ? _variables.colors.brandWhite : _variables.colors.brandBlue
      },
      onClick: props.onClick
    },
    label
  );
};

AmountButton.defaultProps = {
  label: null,
  value: null,
  type: null,
  selected: false
};

exports.default = AmountButton;
//# sourceMappingURL=AmountButton.js.map