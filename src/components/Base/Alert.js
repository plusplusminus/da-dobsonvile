import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, letterSpacing, colors, spacing } from 'common/styles/variables';

function Alert(props) {

  const { children, iconBefore, close, color } = props;

  const styles = StyleSheet.create({
    alert:{
      display: 'inline-block',
      position: 'relative',
      paddingTop: spacing.Space1,
      paddingBottom: spacing.Space1,
      paddingLeft: props.iconBefore ? spacing.Space5 : spacing.Space2,
      paddingRight: props.close ? spacing.Space5 : spacing.Space2,
      color: colors.CopyLightO,
      backgroundColor: colors[props.color],
      borderRadius: spacing.Space0,
      ...fontStyles('14px','22px'),
    },
    close:{
      position: 'absolute',
      top: spacing.Space1,
      right: spacing.Space1,
      ...fontStyles('22px','22px'),
    },
    iconBefore:{
      position: 'absolute',
      top: spacing.Space1,
      left: spacing.Space1,
      ...fontStyles('22px','22px'),
    }
  });

  return (
    <span className={css(styles.alert)}>
      { iconBefore &&
        <i className={`${css(styles.iconBefore)} icon icon-${iconBefore}`}></i>
      }
      { close &&
        <i className={`${css(styles.close)} icon icon-close`}></i>
      }
      {children}
    </span>
  )
}

Alert.defaultProps = {
  close: true,
  iconBefore: '',
  color: 'bgDark',
}

Alert.propTypes = {
  close: PropTypes.bool,
  iconBefore: PropTypes.string,
  color: PropTypes.string,
};

export default Alert;
