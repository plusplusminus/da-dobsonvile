import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";
import { Border, Copy, Heading, Icon, MoreLink } from 'components';
import { fontStyles, colors, spacing } from "common/styles/variables";


class ListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open:false
    }
  }

  toggleItem = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const styles = StyleSheet.create({
      item:{
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
      header:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid',
        borderBottomColor: colors.borderBase,
        paddingTop: spacing.space2,
        paddingBottom: spacing.space2,
      },
    });
    return (
      <li className={css(styles.item)}>
        <div className={css(styles.header)} onClick={()=>this.toggleItem()}>
          <Heading
            level={"5"}
            color={"blue"}
            weight={"medium"}
            size={"medium"}>
            { this.props.title }
          </Heading>

          { this.props.children && this.props.collapsed &&
            <Icon name={this.state.open ? "angle-up" : "angle-down"} color={colors.textBlue}/>
          }
        </div>

        { this.props.collapsed && this.state.open &&
          this.props.children
        }
        { !this.props.collapsed ? this.props.children : null }
      </li>
    );
  }
};

ListItem.defaultProps = {
  children: null,
  closed: false,
  collapsed: false,
  open: false,
  title: null,
};

ListItem.propTypes = {
  /** Children such as buttons or links */
  children: PropTypes.node,
  /** Is the collapsed Item closed  */
  closed: PropTypes.bool.isRequired,
  /** Is the Item collapsed */
  collapsed: PropTypes.bool.isRequired,
  /** Is the collapsed Item open  */
  open: PropTypes.bool.isRequired,
  /** Title of list item */
  title: PropTypes.string.isRequired,
};


const ListChild = (props) => {
  const styles = StyleSheet.create({
    child:{
      borderBottom: '1px solid',
      borderBottomColor: colors.borderBase,
      paddingTop: spacing.space2,
      paddingBottom: spacing.space2,
    },
  });
  const { title,children } = props;
  var output = [];
  var output = Object.keys(children).map((key) => {
    return (
      <div key={key} className={css(styles.child)}>
        <Copy mb={"none"}>
          {children[key].title}
        </Copy>
        <ListAction actions={children[key].actions ? children[key].actions : []} />
      </div>
    )
  });

  return (
    <div>{ output }</div>
  )
};

ListChild.defaultProps = {
  title: null,
  children: null,
};

ListChild.propTypes = {
  /** Title of list item child */
  title: PropTypes.string.isRequired,
  /** Children such as buttons or links */
  children: PropTypes.node,
};


const ListAction = (props) => {
  const styles = StyleSheet.create({
    action:{
      marginRight: spacing.space2,
    },
  });
  const { actions } = props;

  var output = [];
  var output = Object.keys(actions).map((key) => {
    return (
      <span className={css(styles.action)}>
        <MoreLink key={key} href={ actions[key].url }>{ actions[key].label }</MoreLink>
      </span>
    )
  });
  return (
    <div>{ output }</div>
  )
};

ListAction.defaultProps = {
};

ListAction.propTypes = {
};



const List = (props) => {

  const { items, collapsed, title } = props;
  const styles = StyleSheet.create({
    list:{
      margin: 0,
      marginTop: spacing.space2,
      marginBottom: spacing.space8,
      padding: 0,
    },
  });

  var listItems = items;
  var output = [];
  var output = Object.keys(listItems).map((key) => {
    return (
      <ListItem
        key={key}
        title={listItems[key].title}
        collapsed={collapsed && listItems[key].children.length > 0 ? true : false}
      >
        <ListChild children={listItems[key].children} />
      </ListItem>
    );

  });

  return (
    <div>
      { title &&
        <Heading
          color={"red"}
          size={"tiny"}
          tracking={"huge"}
          weight={"light"}
          uppercase
        >
          {title}
        </Heading>
      }
      <ul className={css(styles.list)}>
        { output }
      </ul>
    </div>
  )
};

List.defaultProps = {
  items: null,
  collapsed: false,
  title: null,
};

List.propTypes = {
  /** Is the ListItems Expandable */
  collapsed: PropTypes.node.isRequired,
  /** Items for the list from API */
  items: PropTypes.array.isRequired,
  /** Title of List */
  title: PropTypes.string,
};

export {
  ListItem,
  ListChild,
  ListAction
}
export default List;
