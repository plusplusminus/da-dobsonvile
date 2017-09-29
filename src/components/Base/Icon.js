import React from "react";
import { StyleSheet, css } from "aphrodite";
import { fontStyles, colors, spacing } from "common/styles/variables";

const Icon = (props) => {
  const { color, name, style } = props;
  const styles = StyleSheet.create({
    icon: {
      marginLeft: spacing[props.ml],
      marginRight: spacing[props.mr],
    },
  });

  return (
    <span className={`${css(styles.icon, props.style)} icon icon-${name}`} />
  );
};

Icon.defaultProps = {
  name: null,
  color: "Copy",
  ml: null,
  mr: null,
};

export default Icon;
