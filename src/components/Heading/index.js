import React from "react";
import PropTypes from "prop-types";
import { flatten } from 'rambda'
import { StyleSheet, css } from "aphrodite";
import { colors, fonts, fontWeight, fontStyles, letterSpacing } from "common/styles/variables";

const styles = {
  base: {
    fontFamily: fonts.Sans,
    lineHeight: 1,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  },

  size: {
    tiny: {
      ...fontStyles("8px", `${8 * 1.5}px`),
    },
    small: {
      ...fontStyles("12px", `${12 * 1.5}px`),
    },
    medium: {
      ...fontStyles("16px", `${16 * 1.5}px`),
    },
    large: {
      ...fontStyles("24px", `${24 * 1.5}px`),
    },
    huge: {
      ...fontStyles("36px", `${36 * 1.5}px`),
    },
  },

  weight: {
    extraThin: {
      fontWeight: fontWeight.Light,
    },
    thin: {
      fontWeight: fontWeight.Light,
    },
    normal: {
      fontWeight: fontWeight.Normal,
    },
    thick: {
      fontWeight: fontWeight.Bold,
    },
  },

  importance: {
    low: {
      color: colors.BlueLight,
    },
    normal: {
      color: colors.Black,
    },
    high: {
      color: colors.Blue,
    },
    alert: {
      color: colors.Red,
    },
  },

  variant: {
    caps: {
      textTransform: "uppercase",
    },

    truncate: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },

  tracking: {
    base: {
      letterSpacing: letterSpacing.Base,
    },
    large: {
      letterSpacing: letterSpacing.Large,
    },
  },
};

/**
 * Heading component
 */
function Heading({
  children,
  level,
  size,
  weight,
  importance,
  tracking,
  truncate,
  caps,
  override,
}) {
  const Component = `h${level}`;

  const style = [
    styles.base,
    size && styles.size[size],
    weight && styles.weight[weight],
    importance && styles.importance[importance],
    tracking && styles.tracking[tracking],
    truncate && styles.variant.truncate,
    caps && styles.variant.caps,
    flatten(override),
  ];

  const temp = StyleSheet.create({
    heading: style.reduce((result, item) => {
      if (item) {
        return {
          ...result,
          ...item,
        };
      }
      return result;
    }, {}),
  });

  return (
    <Component
      className={css(temp.heading)}
    >
      {children}
    </Component>
  );
}

Heading.propTypes = {
  /**
   * Text for the heading
   */
  children: PropTypes.node.isRequired,

  /**
   * Creates the heading element
   */
  level: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
  ]).isRequired,

  /**
   * Declares the font size of the heading
   */
  size: PropTypes.oneOf([
    "huge",
    "large",
    "medium",
    "small",
    "tiny",
  ]).isRequired,

  /**
   * Adjusts the font weight of the heading
   */
  weight: PropTypes.oneOf([
    "thick",
    "normal",
    "thin",
    "extraThin",
  ]),

  /**
   * The heading color changes based on importance
   */
  importance: PropTypes.oneOf([
    "alert",
    "high",
    "normal",
    "low",
  ]),

  /**
   * Controls the letter spacing
   */
  tracking: PropTypes.oneOf([
    "tight",
    "normal",
    "loose",
  ]),

  /**
   * Whether or not to hide the text overflow with an ellipsis
   */
  truncate: PropTypes.bool,

  /**
   * Whether or not to set the heading in all caps
   */
  caps: PropTypes.bool,

  /**
   * Override styles
   */
  override: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

Heading.defaultProps = {
  level: 2,
  size: "medium",
  weight: "normal",
  importance: "normal",
  tracking: "normal",
  truncate: false,
  caps: false,
  override: {},
};

Heading.styles = styles;

export default Heading;
