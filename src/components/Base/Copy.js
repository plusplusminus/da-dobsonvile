import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, letterSpacing, colors, spacing } from 'common/styles/variables';

function Copy(props) {

  const { children } = props;

  const styles = StyleSheet.create({
    Copy:{
      textAlign: props.align,
      display: props.display,
      fontWeight: fontWeight[props.fontWeight],
      fontFamily: fonts[props.font],
      color: colors[props.color],
      letterSpacing: letterSpacing[props.letterSpacing],
      textTransform: props.transform,
      marginTop: spacing[props.mt],
      marginBottom: spacing[props.mb],
      marginLeft: spacing[props.ml],
      marginRight: spacing[props.mr],
      ...fontStyles(props.fs,props.lh),
    },
  });

  return (
    <span className={css(styles.Copy)}>{children}</span>
  )
}

Copy.defaultProps = {
  font: 'Sans',
  color: 'Copy',
  letterSpacing: 'None',
  fontWeight: 'Light',
  align: 'left',
  textTransform: 'none',
  display:'inline-block',
  mt: 'Space',
  mr: 'Space',
  mb: 'Space3',
  ml: 'Space',
  fs: '16px',
  lh: '30px',
}

Copy.propTypes = {
  font: PropTypes.string,
  color: PropTypes.string,
  letterSpacing: PropTypes.string,
  fontWeight: PropTypes.string,
  align: PropTypes.string,
  textTransform: PropTypes.string,
  display: PropTypes.string,
  mt: PropTypes.string,
  mr: PropTypes.string,
  mb: PropTypes.string,
  ml: PropTypes.string,
  fs: PropTypes.string,
  lh: PropTypes.string,
};

export {
  HeadingAside,
}
export default Copy;
