import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Button } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from '../../../common/styles/variables';

function NavItem(props) {

  const { content, weight, color, children, mr, ml } = props;

  const styles = StyleSheet.create({
    navItem:{
      color: colors[props.color],
      marginRight: spacing[props.mr],
      marginLeft: spacing[props.ml],
      marginBottom: spacing[props.mb],
      display: props.display,
      fontWeight: fontWeight[props.fontWeight],
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
  color: 'White',
  mr:  'Space1',
  ml:  'Space1',
  mb:  'Space',
  display: 'inline-block',
  fs: '14px',
  lh: '18px',
}

export default NavItem;
