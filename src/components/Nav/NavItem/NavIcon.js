import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const NavIcon = (props) => {
  const { content, weight, color, children, iconName, iconColor } = props;
  const styles = StyleSheet.create({
    NavIcon:{
      padding: 0,
      fontFamily: fonts.Sans,
      cursor: 'pointer',
      textAlign: 'left',
      display: 'inline-flex',
      alignItems: 'center',
    	...fontStyles('14px'),
      border: 'none',
      background: colors.Transparent,
      color: colors[props.color],
      ':hover': {
        opacity: opacity.Hover,
      }
    },
    icon:{
      paddingRight: spacing.Space1,
      color: colors[props.iconColor],
      ...fontStyles('22px'),
    }
  });

  return (
    <button className={css(styles.NavIcon)} disabled={props.disabled || false}>
      { iconName && <span className={`${css(styles.icon)} icon icon-fw icon-${iconName} ${iconColor}`}></span> }
      { children }
    </button>
  )
}

NavIcon.defaultProps = {
  color: 'Copy',
  iconColor: 'Copy',
  iconName: null,
}

export default NavIcon;
