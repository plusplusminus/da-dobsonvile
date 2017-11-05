'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListAction = exports.ListChild = exports.ListItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _aphrodite = require('aphrodite');

var _ = require('..');

var _variables = require('../../common/styles/variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem(props) {
    _classCallCheck(this, ListItem);

    var _this = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

    _this.toggleItem = function () {
      _this.setState({
        open: !_this.state.open
      });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = _aphrodite.StyleSheet.create({
        item: {
          margin: 0,
          padding: 0,
          listStyle: 'none'
        },
        header: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid',
          borderBottomColor: _variables.colors.borderBase,
          paddingTop: _variables.spacing.space2,
          paddingBottom: _variables.spacing.space2
        }
      });
      return _react2.default.createElement(
        'li',
        { className: (0, _aphrodite.css)(styles.item) },
        _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(styles.header), onClick: function onClick() {
              return _this2.toggleItem();
            } },
          _react2.default.createElement(
            _.Heading,
            {
              level: "5",
              color: "blue",
              weight: "medium",
              size: "medium",
              override: { fontSize: '18px' }
            },
            this.props.title
          ),
          this.props.children && this.props.collapsed && _react2.default.createElement(_.Icon, { name: this.state.open ? "angle-up" : "angle-down", color: _variables.colors.textBlue })
        ),
        this.props.collapsed && this.state.open && this.props.children,
        !this.props.collapsed ? this.props.children : null
      );
    }
  }]);

  return ListItem;
}(_react.Component);

;

ListItem.defaultProps = {
  children: null,
  closed: false,
  collapsed: false,
  open: false,
  title: null
};

ListItem.propTypes = {
  /** Children such as buttons or links */
  children: _propTypes2.default.node,
  /** Is the collapsed Item closed  */
  closed: _propTypes2.default.bool.isRequired,
  /** Is the Item collapsed */
  collapsed: _propTypes2.default.bool.isRequired,
  /** Is the collapsed Item open  */
  open: _propTypes2.default.bool.isRequired,
  /** Title of list item */
  title: _propTypes2.default.string.isRequired
};

var ListChild = function ListChild(props) {
  var styles = _aphrodite.StyleSheet.create({
    child: {
      borderBottom: '1px solid',
      borderBottomColor: _variables.colors.borderBase,
      paddingTop: _variables.spacing.space2,
      paddingBottom: _variables.spacing.space2
    }
  });
  var title = props.title,
      children = props.children;

  var output = [];
  var output = Object.keys(children).map(function (key) {
    return _react2.default.createElement(
      'div',
      { key: key, className: (0, _aphrodite.css)(styles.child) },
      _react2.default.createElement(
        _.Copy,
        { mb: "none" },
        children[key].title
      ),
      _react2.default.createElement(ListAction, { actions: children[key].actions ? children[key].actions : [] })
    );
  });

  return _react2.default.createElement(
    'div',
    null,
    output
  );
};

ListChild.defaultProps = {
  title: null,
  children: null
};

ListChild.propTypes = {
  /** Title of list item child */
  title: _propTypes2.default.string.isRequired,
  /** Children such as buttons or links */
  children: _propTypes2.default.node
};

var ListAction = function ListAction(props) {
  var styles = _aphrodite.StyleSheet.create({
    action: {
      marginRight: _variables.spacing.space2
    }
  });
  var actions = props.actions;


  var output = [];
  var output = Object.keys(actions).map(function (key) {
    return _react2.default.createElement(
      'span',
      { className: (0, _aphrodite.css)(styles.action) },
      _react2.default.createElement(
        _.MoreLink,
        { key: key, href: actions[key].url },
        actions[key].label
      )
    );
  });
  return _react2.default.createElement(
    'div',
    null,
    output
  );
};

ListAction.defaultProps = {};

ListAction.propTypes = {};

var List = function List(props) {
  var items = props.items,
      collapsed = props.collapsed,
      title = props.title;

  var styles = _aphrodite.StyleSheet.create({
    list: {
      margin: 0,
      marginTop: _variables.spacing.space2,
      marginBottom: _variables.spacing.space8,
      padding: 0
    }
  });

  var listItems = items;
  var output = [];
  var output = Object.keys(listItems).map(function (key) {
    return _react2.default.createElement(
      ListItem,
      {
        key: key,
        title: listItems[key].title,
        collapsed: collapsed && listItems[key].children.length > 0 ? true : false
      },
      _react2.default.createElement(ListChild, { children: listItems[key].children })
    );
  });

  return _react2.default.createElement(
    'div',
    null,
    title && _react2.default.createElement(
      _.Heading,
      {
        color: "red",
        size: "tiny",
        tracking: "huge",
        weight: "light",
        uppercase: true
      },
      title
    ),
    _react2.default.createElement(
      'ul',
      { className: (0, _aphrodite.css)(styles.list) },
      output
    )
  );
};

List.defaultProps = {
  items: null,
  collapsed: false,
  title: null
};

List.propTypes = {
  /** Is the ListItems Expandable */
  collapsed: _propTypes2.default.node.isRequired,
  /** Items for the list from API */
  items: _propTypes2.default.array.isRequired,
  /** Title of List */
  title: _propTypes2.default.string
};

exports.ListItem = ListItem;
exports.ListChild = ListChild;
exports.ListAction = ListAction;
exports.default = List;
//# sourceMappingURL=List.js.map