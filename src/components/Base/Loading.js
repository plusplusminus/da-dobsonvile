import React from 'react';
import PropTypes from 'prop-types';
import { flatten } from 'ramda'
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


const Loading = (props) => {

  const { minHeight } = props;

  const styles = StyleSheet.create({
    loader: {
      minHeight: props.minHeight ? '100vh' : null,
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      alignContent:'center',
    },
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
      backgroundColor: colors.brandBlue,
      borderRadius: '100%',
      animationName: [skBounce],
      animationDuration: '2.0s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    },
    dot2:{
      top: 'auto',
      backgroundColor: colors.brandGreen,
      bottom: 0,
      animationDelay: '-1.0s',
    },
  });

  return (
    <div className={css(styles.loader)}>
      <div className={css(styles.spinner)}>
        <div className={css(styles.dot)}></div>
        <div className={`${css(styles.dot)} ${css(styles.dot2)}`}></div>
      </div>
    </div>
  );
}

Loading.defaultProps = {
  minHeight: true,
}

Loading.propTypes = {
  minHeight: PropTypes.bool,
}

export default Loading;
