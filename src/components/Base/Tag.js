import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fontStyles, colors, spacing } from 'common/styles/variables';

const Tag = (props) => {
  const { children } = props;
  const styles = StyleSheet.create({
    label:{
    	...fontStyles('13px','16px'),
      color: colors.Copy,
      display: 'inline-block',
      border: '1px solid',
      color: colors.CopyLight,
      marginRight: spacing.Space1,
      marginBottom: spacing.Space1,
      borderColor: colors.Border,
      borderRadius: spacing.Space0,
      backgroundColor: colors.White,
      padding: spacing.Space1,
    },
  });

  return (
    <span className={css(styles.label)}>{ children }</span>
  )
}

Tag.defaultProps = {
}

Tag.propTypes = {
};


export default Tag;
