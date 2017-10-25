import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Copy } from 'components';
import { fonts, fontStyles, fontWeight, letterSpacing, colors, spacing } from 'common/styles/variables';

const styles = {
  progress:{
    base:{
      fontFamily: fonts.sans,
      display: 'inline-block',
      width: '100%',
      color: colors.textLightO,
      marginBottom: spacing.space2,
    }
  },
  bg:{
    base:{
      borderColor: colors.bgLightO,
      borderRadius: spacing.space3,
      overflow: 'hidden',
      clear: 'both',
      backgroundColor: colors.bgLight,
    }
  },
  fill:{
    base:{
      height: spacing.space3,
      borderRadius: spacing.space3,
    }
  },
  label:{
    base:{
      ...fontStyles('13px','14px'),
      display: 'block',
      paddingTop: '5px',
      paddingRight: spacing.space1,
      paddingBottom: '5px',
      paddingLeft: spacing.space1,
      color: colors.textLightO,
    }
  },
  status: {
    neutral: {
      bg:{backgroundColor: colors.statusNeutral},
      border:{borderColor: colors.statusNeutral}
    },
    info: {
      bg:{backgroundColor: colors.statusInfo},
      border:{borderColor: colors.statusInfo}
    },
    success: {
      bg:{backgroundColor: colors.statusSuccess},
      border:{borderColor: colors.statusSuccess}
    },
    warning: {
      bg:{backgroundColor: colors.statusWarning},
      border:{borderColor: colors.statusWarning}
    },
    danger: {
      bg:{backgroundColor: colors.statusDanger},
      border:{borderColor: colors.statusDanger}
    },
  },
};

const Progress = ({ status,progress,showProgress,labelTop,labelBottom }) => {

  const baseStyles = StyleSheet.create({
    progress:{
      ...styles.progress.base,
    },
    bg:{
      ...styles.bg.base,
    },
    fill:{
      ...styles.fill.base,
      ...(status && styles.status[status].bg),
      ...(status && styles.status[status].border),
      width: '' + progress + '%',
    },
    label:{
      ...styles.label.base,
    }
  });

  return (
    <div>
      { labelTop &&
        <Copy
          color={"blue"}
          weight={"medium"}
          size={"small"}
          mb={"small"}
        >
          {labelTop}
        </Copy>
      }
      <div className={css(baseStyles.progress)}>
        <div className={css(baseStyles.bg)}>
          <div className={css(baseStyles.bgFilter)}>
            <div className={css(baseStyles.fill)}>
              { showProgress &&
                <small className={css(baseStyles.label)}>{ progress }%</small>
              }
            </div>
          </div>
        </div>
      </div>
      { labelBottom &&
        <Copy
          weight={"regular"}
          size={"small"}
          mb={"small"}
          right
        >
          {labelBottom}
        </Copy>
      }
    </div>
  )
}

Progress.defaultProps = {
  status: "neutral",
  progress: '50',
  showProgress: true,
  labelTop: null,
  labelBottom: null,
}

Progress.propTypes = {
  /** Status of Badge to indicate color */
  status: PropTypes.oneOf([
    "danger",
    "info",
    "neutral",
    "success",
    "warning",
  ]).isRequired,
  /** Number Value to indicate % progress */
  progress: PropTypes.number,
  /** Option to remove progress & label from progress bar */
  showProgress: PropTypes.bool,
  /** Label above the Progress Bar */
  labelTop: PropTypes.string,
  /** Label below the Progress Bar */
  labelBottom: PropTypes.string,
};

export default Progress;
