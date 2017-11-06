import React from 'react';
import PropTypes from 'prop-types';
import { flatten } from 'rambda'
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, letterSpacing, colors, spacing } from 'common/styles/variables';


const skRotate = {
  '100%': {
    transform: 'rotate(360deg)',
  },
}

const skBounce = {
  '0%':{
    transform: 'scale(0.0)',
  },
  '100%': {
    transform: 'scale(0.0)',
  },
  '50%': {
    transform: 'scale(1.0)',
  },
}

const styles = StyleSheet.create({
  spinner: {
    margin: '100px auto',
    width: '40px',
    height: '40px',
    position: 'relative',
    textAlign: 'center',
    animationName: [skRotate],
    animationDuration: '2.0s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  dot:{
    width: '60%',
    height: '60%',
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    backgroundColor: '#155FA2',
    borderRadius: '100%',
    animationName: [skBounce],
    animationDuration: '2.0s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
  },
  dot2:{
    top: 'auto',
    backgroundColor: '#52A74B',
    bottom: 0,
    animationDelay: '-1.0s',
  },
  mt: {
    none: {
      marginTop: spacing.space0,
    },
    small: {
      marginTop: spacing.space1,
    },
    medium: {
      marginTop: spacing.space2,
    },
    large: {
      marginTop: spacing.space4,
    },
  },

  mb: {
    none: {
      marginBottom: spacing.space0,
    },
    small: {
      marginBottom: spacing.space1,
    },
    medium: {
      marginBottom: spacing.space2,
    },
    large: {
      marginBottom: spacing.space4,
    },
  },
});

const Loading = (props) => {

  const { mb, mt } = props;

  return (
      <div className={css(styles.spinner)}>
        <div className={css(styles.dot)}></div>
        <div className={`${css(styles.dot)} ${css(styles.dot2)}`}></div>
      </div>
  );
}

Loading.defaultProps = {
  mb: "medium",
  mt: "medium",
}

Loading.propTypes = {
  /** Margin bottom  */
  mb: PropTypes.oneOf([
    "none",
    "tiny",
    "small",
    "medium",
    "large",
  ]),
  /** Margin top  */
  mt: PropTypes.oneOf([
    "none",
    "tiny",
    "small",
    "medium",
    "large",
  ]),
};

Loading.styles = styles;

export default Loading;
