'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rambda = require('rambda');

var _aphrodite = require('aphrodite');

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var skRotate = {
  '100%': {
    transform: 'rotate(360deg)'
  }
};

var skBounce = {
  '0%': {
    transform: 'scale(0.0)'
  },
  '100%': {
    transform: 'scale(0.0)'
  },
  '50%': {
    transform: 'scale(1.0)'
  }
};

var styles = _aphrodite.StyleSheet.create({
  spinner: {
    margin: '100px auto',
    width: '40px',
    height: '40px',
    position: 'relative',
    textAlign: 'center',
    animationName: [skRotate],
    animationDuration: '2.0s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  },
  dot: {
    width: '60%',
    height: '60%',
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    backgroundColor: '#155FA2',
    borderRadius: '100%',
    animationName: [skBounce],
    animationDuration: '2.0s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out'
  },
  dot2: {
    top: 'auto',
    backgroundColor: '#52A74B',
    bottom: 0,
    animationDelay: '-1.0s'
  },
  mt: {
    none: {
      marginTop: _variables.spacing.space0
    },
    small: {
      marginTop: _variables.spacing.space1
    },
    medium: {
      marginTop: _variables.spacing.space2
    },
    large: {
      marginTop: _variables.spacing.space4
    }
  },

  mb: {
    none: {
      marginBottom: _variables.spacing.space0
    },
    small: {
      marginBottom: _variables.spacing.space1
    },
    medium: {
      marginBottom: _variables.spacing.space2
    },
    large: {
      marginBottom: _variables.spacing.space4
    }
  }
});

var Loading = function Loading(props) {
  var mb = props.mb,
      mt = props.mt;


  return _react2.default.createElement(
    'div',
    { className: (0, _aphrodite.css)(styles.spinner) },
    _react2.default.createElement('div', { className: (0, _aphrodite.css)(styles.dot) }),
    _react2.default.createElement('div', { className: (0, _aphrodite.css)(styles.dot) + ' ' + (0, _aphrodite.css)(styles.dot2) })
  );
};

Loading.defaultProps = {
  mb: "medium",
  mt: "medium"
};

Loading.propTypes = {
  /** Margin bottom  */
  mb: _propTypes2.default.oneOf(["none", "tiny", "small", "medium", "large"]),
  /** Margin top  */
  mt: _propTypes2.default.oneOf(["none", "tiny", "small", "medium", "large"])
};

Loading.styles = styles;

exports.default = Loading;
//# sourceMappingURL=Loading.js.map