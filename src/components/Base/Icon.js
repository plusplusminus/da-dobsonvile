import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";
import { fontStyles, colors, spacing } from "common/styles/variables";

const Icon = (props) => {
  const { color, fs, lh, name, style } = props;
  const styles = StyleSheet.create({
    icon:{
      color: props.color,
      marginLeft: props.ml,
      marginRight: props.mr,
      ...fontStyles(props.fs,props.lh),
    },
  });

  return (
    <span className={`${css(styles.icon, props.style)} icon icon-${name}`} />
  );
};

Icon.defaultProps = {
  name: null,
  color: colors.baseInherit,
  ml: spacing.Space05,
  mr: spacing.Space05,
  fs: 'inherit',
  lh: 'inherit',
};

Icon.propTypes = {
  /** Color of Icon as per variables.js */
  color: PropTypes.string.isRequired,
  /** Name of Icon as per variables.js */
  name: PropTypes.string.isRequired,
  /** Margin Left taking property from Spacing in variables.js */
  ml: PropTypes.string,
  /** Margin Right taking property from Spacing in variables.js */
  mr: PropTypes.string,
  /** Font size taking px value */
  fs: PropTypes.string,
  /** Line height taking px value */
  lh: PropTypes.string,
};

export default Icon;
