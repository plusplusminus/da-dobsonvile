import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { fontStyles, colors, spacing } from 'common/styles/variables';

const Icon = (props) => {
  const { color, name } = props;
  const styles = StyleSheet.create({
    icon:{
      color: 'inherit',
      marginLeft: spacing[props.ml],
      marginRight: spacing[props.mr],
    },
  });

  return (
    <span className={`${css(styles.icon)} icon icon-${name}`}></span>
  )
}

Icon.defaultProps = {
  name: null,
  ml: null,
  mr: null,
}

export default Icon;
