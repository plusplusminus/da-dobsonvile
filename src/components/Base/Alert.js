import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Icon } from '../../components';
import { fonts, fontStyles, fontWeight, icons, letterSpacing, colors, spacing } from '../../common/styles/variables';

const styles = {
  alert:{
    base:{
      display: 'inline-block',
      position: 'relative',
      paddingTop: spacing.space1,
      paddingBottom: spacing.space1,
      paddingLeft: spacing.space2,
      paddingRight: spacing.space2,
      marginBottom: spacing.space1,
      color: colors.textLightO,
      borderRadius: spacing.space05,
      width:'100%',
      ...fontStyles('14px','22px'),
    },
    iconBefore:{
      paddingLeft: spacing.space5,
    },
    close:{
      paddingRight: spacing.space5,
    },
  },
  close:{
    position: 'absolute',
    top: spacing.space1,
    right: spacing.space1,
    ...fontStyles('22px','22px'),
  },
  iconBefore:{
    position: 'absolute',
    top: spacing.space1,
    left: spacing.space1,
    ...fontStyles('22px','22px'),
  },
  mb: {
    none: {
      marginBottom: spacing.space0,
    },
    small: {
      marginBottom: spacing.space2,
    },
    large: {
      marginBottom: spacing.space4,
    },
  },
  status: {
    neutral: {
      backgroundColor: colors.statusNeutral,
    },
    info: {
      backgroundColor: colors.statusInfo,
    },
    success: {
      backgroundColor: colors.statusSuccess,
    },
    warning: {
      backgroundColor: colors.statusWarning,
    },
    danger: {
      backgroundColor: colors.statusDanger,
    }
  }
}

const Alert = (props) => {

  const { children, iconBefore, close, status, mb } = props;

  const baseStyles = StyleSheet.create({
    alert: {
      ...styles.alert.base,
      ...(iconBefore && styles.alert.iconBefore),
      ...(close && styles.alert.close),
      ...(mb && styles.mb[mb]),
      ...(status && styles.status[status])
    },
    close:{
      ...styles.close,
    },
    iconBefore:{
      ...styles.iconBefore,
    }
  });

  return (
    <span className={css(baseStyles.alert)}>
      { iconBefore &&
        <div className={`${css(baseStyles.iconBefore)}`}><Icon name={iconBefore}/></div>
      }
      {children}
      { close &&
        <div className={`${css(baseStyles.close)}`}><Icon name={icons.close}/></div>
      }
    </span>
  )
}

Alert.defaultProps = {
  close: true,
  iconBefore: null,
  mb: "none",
  color: colors.bgDark,
  status: "neutral",
};

Alert.propTypes = {
  /** Should be replaced with onClick logic */
  close: PropTypes.bool,
  /** Name of icon as per variables.js */
  iconBefore: PropTypes.string,
  /** Color of Alert background */
  color: PropTypes.string,
  /** Margin Below Alert */
  mb: PropTypes.oneOf([
    "none",
    "small",
    "large",
  ]),
  status: PropTypes.oneOf([
    "danger",
    "info",
    "neutral",
    "success",
    "warning"
  ]).isRequired,
};

export default Alert;
