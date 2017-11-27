'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Campaigns = function Campaigns(props) {

  return _react2.default.createElement(
    'section',
    { className: css(styles.campaigns) },
    _react2.default.createElement(
      _.HeadingLines,
      { lineLeft: true, color: "red", mb: "large" },
      _react2.default.createElement(
        _.Heading,
        {
          color: "red",
          tracking: "huge",
          size: "tiny",
          weight: "light",
          uppercase: true
        },
        'Latest Campaigns'
      )
    ),
    _react2.default.createElement(_.CardCampaign, {
      meta: 'Western Cape',
      title: 'Firing Zuma is the first step towards building a better tomorrow',
      paragraph: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.',
      cta: 'Join the fight',
      url: "/"
    }),
    _react2.default.createElement(_.CardCampaign, {
      meta: 'Western Cape',
      title: 'Firing Zuma is the first step towards building a better tomorrow',
      paragraph: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.',
      cta: 'Join the fight',
      url: "/"
    }),
    _react2.default.createElement(_.CardCampaign, {
      meta: 'Western Cape',
      title: 'Firing Zuma is the first step towards building a better tomorrow',
      paragraph: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.',
      cta: 'Join the fight',
      url: "/"
    }),
    _react2.default.createElement(
      _.ViewAll,
      null,
      'View all Campaigns'
    )
  );
};

exports.default = Campaigns;
//# sourceMappingURL=Campaigns.js.map