import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, letterSpacing, colors, spacing } from 'common/styles/variables';

const Copy = (props) => {

  const { children } = props;

  const styles = StyleSheet.create({
    Copy:{
      textAlign: props.align,
      display: props.display,
      fontWeight: props.fontWeight,
      fontFamily: props.fontFamily,
      color: props.color,
      textTransform: props.textTransform,
      marginTop: props.mt,
      marginBottom: props.mb,
      marginLeft: props.ml,
      marginRight: props.mr,
      ...fontStyles(props.fs,props.lh),
    },
  });

  return (
    <span className={css(styles.Copy)}>{children}</span>
  )
}

Copy.defaultProps = {
  align: 'left',
  color: colors.textBase,
  display:'inline-block',
  fontFamily: fonts.sans,
  fontWeight: fontWeight.light,
  textTransform: 'none',
  fs: '16px',
  lh: '24px',
  mt:  spacing.space0,
  mr:  spacing.space0,
  mb:  spacing.space2,
  ml:  spacing.space0,
}

Copy.propTypes = {
  /** Align value as per CSS */
  align: PropTypes.string,
  /** Text color as per variables.js */
  color: PropTypes.string.isRequired,
  /** Font as per variables.js */
  fontFamily: PropTypes.string.isRequired,
  /** Text Transform as per CSS */
  textTransform: PropTypes.string,
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
};

export default Copy;
