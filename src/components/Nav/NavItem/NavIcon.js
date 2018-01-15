import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { colors, fonts, fontStyles, fontWeight, letterSpacing, opacity, spacing, timing } from 'common/styles/variables';

const NavIcon = (props) => {
  const { content, color, children, iconName, iconColor } = props;
  const styles = StyleSheet.create({
    navIcon:{
      padding: 0,
      fontFamily: fonts.sans,
      fontWeight: fontWeight.regular,
      cursor: 'pointer',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      background: colors.baseTransparent,
      marginBottom: spacing.space1,
      color: props.color,
      transition: `all ${timing.base} ease-in-out`,
      ...fontStyles('14px'),
      '@media (max-width: 576px)': {
        ...fontStyles(`${14 * 0.80}px`, `${14 * 1.25}px`),
      },
      ':hover': {
        opacity: opacity.hover,
      }
    },
    label:{
      marginLeft: spacing.space1,
    },
    icon:{
      color: props.iconColor,
      ...fontStyles('18px'),
    }
  });

  return (
    <button className={css(styles.navIcon)} disabled={props.disabled || false}>
      { iconName && <span className={`${css(styles.icon)} icon icon-fw icon-${iconName}`}></span> }
      { children &&
        <span className={css(styles.label)}>{ children }</span>
      }
    </button>
  )
}

NavIcon.defaultProps = {
  color: colors.textBase,
  iconColor: colors.textBase,
  iconName: null,
}

NavIcon.propTypes = {
  /** Color of text as per variables.js */
  color: PropTypes.string,
  /** Color of icon as per variables.js */
  iconColor: PropTypes.string,
  /** Icon name as per variables.js */
  iconName: PropTypes.string,
}

export default NavIcon;
