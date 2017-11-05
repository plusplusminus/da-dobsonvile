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

var styles = {
  progress: {
    base: {
      fontFamily: _variables.fonts.sans,
      display: 'inline-block',
      width: '100%',
      color: _variables.colors.textLightO,
      marginBottom: _variables.spacing.space2
    }
  },
  bg: {
    base: {
      borderColor: _variables.colors.bgLightO,
      borderRadius: _variables.spacing.space3,
      overflow: 'hidden',
      clear: 'both',
      backgroundColor: _variables.colors.bgLight
    }
  },
  fill: {
    base: {
      height: _variables.spacing.space3,
      borderRadius: _variables.spacing.space3
    }
  },
  label: {
    base: _extends({}, (0, _variables.fontStyles)('13px', '14px'), {
      display: 'block',
      paddingTop: '5px',
      paddingRight: _variables.spacing.space1,
      paddingBottom: '5px',
      paddingLeft: _variables.spacing.space1,
      color: _variables.colors.textLightO
    })
  },
  status: {
    neutral: {
      bg: { backgroundColor: _variables.colors.statusNeutral },
      border: { borderColor: _variables.colors.statusNeutral }
    },
    info: {
      bg: { backgroundColor: _variables.colors.statusInfo },
      border: { borderColor: _variables.colors.statusInfo }
    },
    success: {
      bg: { backgroundColor: _variables.colors.statusSuccess },
      border: { borderColor: _variables.colors.statusSuccess }
    },
    warning: {
      bg: { backgroundColor: _variables.colors.statusWarning },
      border: { borderColor: _variables.colors.statusWarning }
    },
    danger: {
      bg: { backgroundColor: _variables.colors.statusDanger },
      border: { borderColor: _variables.colors.statusDanger }
    }
  }
};

var Progress = function Progress(_ref) {
  var status = _ref.status,
      progress = _ref.progress,
      showProgress = _ref.showProgress,
      labelTop = _ref.labelTop,
      labelBottom = _ref.labelBottom;


  var baseStyles = _aphrodite.StyleSheet.create({
    progress: _extends({}, styles.progress.base),
    bg: _extends({}, styles.bg.base),
    fill: _extends({}, styles.fill.base, status && styles.status[status].bg, status && styles.status[status].border, {
      width: '' + progress + '%'
    }),
    label: _extends({}, styles.label.base)
  });

  return _react2.default.createElement(
    'div',
    null,
    labelTop && _react2.default.createElement(
      _.Copy,
      {
        color: "blue",
        weight: "medium",
        size: "small",
        mb: "small"
      },
      labelTop
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _aphrodite.css)(baseStyles.progress) },
      _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(baseStyles.bg) },
        _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(baseStyles.bgFilter) },
          _react2.default.createElement(
            'div',
            { className: (0, _aphrodite.css)(baseStyles.fill) },
            showProgress && _react2.default.createElement(
              'small',
              { className: (0, _aphrodite.css)(baseStyles.label) },
              progress,
              '%'
            )
          )
        )
      )
    ),
    labelBottom && _react2.default.createElement(
      _.Copy,
      {
        weight: "regular",
        size: "small",
        mb: "small",
        right: true
      },
      labelBottom
    )
  );
};

Progress.defaultProps = {
  status: "neutral",
  progress: '50',
  showProgress: true,
  labelTop: null,
  labelBottom: null
};

Progress.propTypes = {
  /** Status of Badge to indicate color */
  status: _propTypes2.default.oneOf(["danger", "info", "neutral", "success", "warning"]).isRequired,
  /** Number Value to indicate % progress */
  progress: _propTypes2.default.number,
  /** Option to remove progress & label from progress bar */
  showProgress: _propTypes2.default.bool,
  /** Label above the Progress Bar */
  labelTop: _propTypes2.default.string,
  /** Label below the Progress Bar */
  labelBottom: _propTypes2.default.string
};

exports.default = Progress;
//# sourceMappingURL=Progress.js.map