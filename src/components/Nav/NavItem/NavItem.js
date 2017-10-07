import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Button } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from '../../../common/styles/variables';

const NavItem = (props) => {

  const { content, weight, color, children, mr, ml } = props;

  const styles = StyleSheet.create({
    navItem:{
      color: props.color,
      marginTop: props.mt,
      marginRight: props.mr,
      marginBottom: props.mb,
      marginLeft: props.ml,
      display: props.display,
      fontWeight: props.fontWeight,
      fontFamily: fonts.sans,
      listStyle:'none',
      ...fontStyles(props.fs,props.lh),
      ':hover':{
        textDecoration: 'none',
      },
    }
  });

  const className = css(
    styles.navItem,
  )

  return (
    <li className={className}>
      {props.children}
    </li>
  )
}

NavItem.defaultProps = {
  color: colors.linkBase,
  display: 'inline-block',
  fontWeight: fontWeight.regular,
  fs: '14px',
  lh: '18px',
  mt:  spacing.space0,
  mr:  spacing.space1,
  mb:  spacing.space0,
  ml:  spacing.space1,
}

NavItem.propTypes = {
  /** Text color as per variables.js */
  color: PropTypes.string.isRequired,
  /** Display property as per CSS */
  display: PropTypes.string,
  /** Font weight as per CSS */
  fontWeight: PropTypes.string,
  /** Font size as pixel value */
  fs: PropTypes.string,
  /** Line height as pixel value */
  lh: PropTypes.string,
  /** Margin top in Spacing value as per variables.js */
  mt:  PropTypes.string,
  /** Margin right in Spacing value as per variables.js */
  mr:  PropTypes.string,
  /** Margin bottom in Spacing value as per variables.js */
  mb:  PropTypes.string,
  /** Margin left in Spacing value as per variables.js */
  ml:  PropTypes.string,
}

export default NavItem;
