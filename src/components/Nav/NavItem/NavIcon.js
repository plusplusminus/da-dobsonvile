import React from 'react';
import PropTypes from 'prop-types';
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
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      background: colors.Transparent,
      marginBottom: spacing.Space1,
      color: colors[props.color],
      ...fontStyles('14px'),
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

NavIcon.propTypes = {
  color: PropTypes.string,
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
}

export default NavIcon;
