import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Icon } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { getHoverAttributes } from 'utils/helpers'

const NavBox = (props) => {
  const { content, weight, color, children } = props;
  const styles = StyleSheet.create({
    NavBox:{
      paddingLeft: spacing.Space3,
      paddingRight: spacing.Space3,
      paddingTop: spacing.Space2,
      paddingBottom: spacing.Space2,
      fontFamily: fonts.Sans,
      cursor: 'pointer',
      textAlign: 'left',
      display: 'block',
      border: '1px solid #fff',
      background: colors.bgLight,
      width:'100%',
    	...fontStyles('13px','13px'),
      color: colors[props.color],
      ':hover': {
        color: colors.PrimaryHover,
        borderColor: colors.BorderLight,
      }
    },
  });

  return (
    <button className={css(styles.NavBox)} disabled={props.disabled || false}>
      { children }
    </button>
  )
}

NavBox.defaultProps = {
  color: 'Copy',
}

export default NavBox;
