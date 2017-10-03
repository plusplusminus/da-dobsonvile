import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { colors, fonts, fontStyles, fontWeight, letterSpacing, opacity, spacing, timing } from 'common/styles/variables';

const NavIcon = (props) => {
  const { content, weight, color, children, iconName, iconColor } = props;
  const styles = StyleSheet.create({
    navIcon:{
      padding: 0,
      fontFamily: fonts.Sans,
      cursor: 'pointer',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      background: colors.Transparent,
      marginBottom: spacing.Space1,
      color: colors[props.color],
      transition: `all ${timing.default} ease-in-out`,
      ...fontStyles('14px'),
      ':hover': {
        opacity: opacity.Hover,
      }
    },
    label:{
      marginLeft: spacing.Space1,
    },
    icon:{
      color: colors[props.iconColor],
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
  color: 'Copy',
  iconColor: 'Copy',
  iconName: null,
}

NavIcon.propTypes = {
  color: PropTypes.string,
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
}

export default NavIcon;
