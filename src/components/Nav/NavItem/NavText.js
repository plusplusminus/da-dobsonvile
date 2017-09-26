import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Icon } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { getHoverAttributes } from 'utils/helpers'

const NavText = (props) => {
  const { content, weight, color, children } = props;
  const styles = StyleSheet.create({
    NavText:{
      padding: 0,
      fontFamily: fonts.Sans,
      cursor: 'pointer',
      textAlign: 'left',
      display: props.Display,
      textTransform: 'uppercase',
      border: 'none',
      background: colors.Transparent,
    	...fontStyles('11px','14px'),
    	fontWeight: fontWeight.Bold,
    	letterSpacing: letterSpacing.Base,
      color: colors[props.color],
      ':hover': {
        opacity: opacity.Hover,
      }
    },
  });

  return (
    <button className={css(styles.NavText)} disabled={props.disabled || false}>
      { children }
      <Icon color={props.color} name={"angle-right"} ml="Space1"/>
    </button>
  )
}

NavText.defaultProps = {
  color: 'Primary',
  display: 'inline-block',
}

NavText.propTypes = {
  /** Color of link text and icon */
  color: PropTypes.string,
  /** CSS Display options  */
  display: PropTypes.string,
};

export default NavText;
