import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Icon } from 'components';
import { colors, fonts, fontStyles, fontWeight, letterSpacing, opacity, spacing, timing } from 'common/styles/variables';
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
      marginBottom: '1px',
      cursor: 'pointer',
      textAlign: 'left',
      display: 'block',
      border: '1px solid',
      borderColor: colors.bgLight,
      background: colors.bgLight,
      width:'100%',
      color: colors.textCopy,
    	...fontStyles('13px','13px'),
      transition: `all ${timing.base} ease-in-out`,
      ':hover': {
        color: colors.brandBlueHover,
        borderColor: colors.brandBlueHover,
      }
    },
  });

  return (
    <button className={css(styles.NavBox)} disabled={props.disabled || false}>
      { children }
    </button>
  )
}

export default NavBox;
