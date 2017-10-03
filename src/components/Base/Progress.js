import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, letterSpacing, colors, spacing } from 'common/styles/variables';

function Progress(props) {

  const { color,progress,showLabel } = props;

  const styles = StyleSheet.create({
    progress:{
      display: 'inline-block',
      width: '100%',
      color: colors.White,
    },
    bg:{
      backgroundColor: props.color,
      borderColor: colors.bgLightO,
      borderRadius: spacing.Space3,
      overflow: 'hidden',
      clear: 'both',
    },
    bgFilter:{
      borderColor: colors.bgLightO,
      backgroundColor: colors.bgLightO,
    },
    fill:{
      backgroundColor: props.color,
      borderColor: props.color,
      height: spacing.Space3,
      width: '' + props.progress + '%',
    },
    label:{
      ...fontStyles('13px','14px'),
      display: 'block',
      paddingTop: '5px',
      paddingRight: spacing.Space1,
      paddingBottom: '5px',
      paddingLeft: spacing.Space1,
    }
  });

  return (
    <div className={css(styles.progress)}>
      <div className={css(styles.bg)}>
        <div className={css(styles.bgFilter)}>
          <div className={css(styles.fill)}>
            { showLabel &&
              <small className={css(styles.label)}>{ progress }%</small>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  color: colors.bgDark,
  progress: '50',
  showLabel: 'true',
}

Progress.propTypes = {
  /*Color value from variables.js*/
  color: PropTypes.string,
  /*Number Value to indicate % progress*/
  progress: PropTypes.number,
  /*Option to remove progress & label from progress bar*/
  showLabel: PropTypes.bool,
};

export default Progress;
