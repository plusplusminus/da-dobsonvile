import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fontStyles, colors, spacing } from 'common/styles/variables';

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
      borderColor: colors.Border,
      borderRadius: spacing.Space0,
      backgroundColor: colors[props.color],
      padding: spacing.Space1,
      paddingRight: props.close ? spacing.Space4 : spacing.Space1,
    },
    label:{
      color: props.color === colors.White ? colors.CopyLight : colors.CopyLightO,
    },
    close:{
      position: 'absolute',
      top: spacing.Space1,
      right: spacing.Space1,
      color: props.color === 'White' ? colors.CopyLight : colors.CopyLightO,
      ...fontStyles('22px','18px'),
    },
  });

  return (
    <span className={css(styles.tag)}>
      { children &&
        <span className={css(styles.label)}>{ children }</span>
      }
      { close &&
        <i className={`${css(styles.close)} icon icon-close`}></i>
      }
    </span>
  )
}

Tag.defaultProps = {
  close: false,
  color: 'White'
}

Tag.propTypes = {
  close: PropTypes.bool,
  color: PropTypes.string,
};


export default Tag;
