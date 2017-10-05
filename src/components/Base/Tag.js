import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Icon } from 'components';
import { fontStyles, colors, icons, spacing } from 'common/styles/variables';

const Tag = (props) => {
  const { children,close } = props;

  const styles = StyleSheet.create({
    tag:{
      ...fontStyles('13px','16px'),
      position: 'relative',
      display: 'inline-block',
      border: '1px solid',
      marginRight: spacing.Space1,
      marginBottom: spacing.Space1,
      borderColor: props.color === '#FFFFFF' ? colors.borderBase : props.color,
      borderRadius: spacing.Space05,
      backgroundColor: props.color,
      padding: spacing.Space1,
      paddingRight: props.close ? spacing.Space4 : spacing.Space1,
    },
    label:{
      color: props.color === '#FFFFFF' ? colors.textBase : colors.textLightO,
    },
    close:{
      position: 'absolute',
      top: spacing.Space1,
      right: spacing.Space0,
      color: props.color === '#FFFFFF' ? colors.textBase : colors.textLightO,
      ...fontStyles('22px','18px'),
    },
  });

  return (
    <span className={css(styles.tag)}>
      { children &&
        <span className={css(styles.label)}>{ children }</span>
      }
      { close &&
        <div className={`${css(styles.close)}`}><Icon name={icons.close}/></div>
      }
    </span>
  )
}

Tag.defaultProps = {
  close: false,
  color: colors.baseWhite,
}

Tag.propTypes = {
  /** Should be replaced with onClick logic */
  close: PropTypes.bool,
  /** Color options from variables.js */
  color: PropTypes.string,
};


export default Tag;
