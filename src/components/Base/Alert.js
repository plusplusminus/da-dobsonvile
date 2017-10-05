import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Icon } from 'components';
import { fonts, fontStyles, fontWeight, icons, letterSpacing, colors, spacing } from 'common/styles/variables';

const Alert = (props) => {

  const { children, iconBefore, close, color } = props;

  const styles = StyleSheet.create({
    alert:{
      display: 'inline-block',
      position: 'relative',
      paddingTop: spacing.Space1,
      paddingBottom: spacing.Space1,
      paddingLeft: props.iconBefore ? spacing.Space5 : spacing.Space2,
      paddingRight: props.close ? spacing.Space5 : spacing.Space2,
      color: colors.textLightO,
      backgroundColor: props.color,
      borderRadius: spacing.Space05,
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
        <div className={`${css(styles.iconBefore)}`}><Icon name={iconBefore}/></div>
      }
      {children}
      { close &&
        <div className={`${css(styles.close)}`}><Icon name={icons.close}/></div>
      }
    </span>
  )
}

Alert.defaultProps = {
  close: true,
  iconBefore: null,
  color: colors.bgDark,
}

Alert.propTypes = {
  /** Should be replaced with onClick logic */
  close: PropTypes.bool,
  /** Name of icon as per variables.js */
  iconBefore: PropTypes.string,
  /** Color of Alert background */
  color: PropTypes.string,
};

export default Alert;
