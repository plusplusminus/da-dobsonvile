import React from "react";
import PropTypes from "prop-types";
import { flatten } from 'rambda'
import { StyleSheet, css } from "aphrodite";
import { colors, fonts, fontWeight, fontStyles, letterSpacing, spacing } from "common/styles/variables";

const styles = {
  base: {
    fontFamily: fonts.sans,
    lineHeight: 1,
    margin: 0,
    padding: 0,
  },

  size: {
    tiny: {
      ...fontStyles("13px", `${13 * 1.5}px`),
    },
    small: {
      ...fontStyles("16px", `${16 * 1.5}px`),
    },
    medium: {
      ...fontStyles("20px", `${20 * 1.5}px`),
    },
    large: {
      ...fontStyles("25px", `${25 * 1.5}px`),
    },
    huge: {
      ...fontStyles("49px", `${49 * 1.5}px`),
    },
  },

  mb: {
    none: {
      marginBottom: spacing.space0,
    },
    tiny: {
      marginBottom: spacing.space1,
    },
    small: {
      marginBottom: spacing.space2,
    },
    medium: {
      marginBottom: spacing.space4,
    },
    large: {
      marginBottom: spacing.space6,
    },
    huge: {
      marginBottom: spacing.space9,
    },
  },

  weight: {
    light: {
      fontWeight: fontWeight.light,
    },
    regular: {
      fontWeight: fontWeight.regular,
    },
    medium: {
      fontWeight: fontWeight.medium,
    },
    bold: {
      fontWeight: fontWeight.bold,
    },
  },

  color: {
    base: {
      color: colors.textBase,
    },
    blue: {
      color: colors.textBlue,
    },
    red: {
      color: colors.textRed,
    },
    light: {
      color: colors.textLight,
    },
    white: {
      color: colors.textWhite,
    },
  },

  variant: {
    uppercase: {
      textTransform: "uppercase",
    },
    truncate: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    left: {
      textAlign: "left",
    },
    right: {
      textAlign: "right",
    },
    center: {
      textAlign: "center",
    },
    inline: {
      display: "inline-block",
    },
  },

  tracking: {
    none: {
      letterSpacing: letterSpacing.none,
    },
    small: {
      letterSpacing: letterSpacing.small,
    },
    base: {
      letterSpacing: letterSpacing.base,
    },
    large: {
      letterSpacing: letterSpacing.large,
    },
    huge: {
      letterSpacing: letterSpacing.huge,
    },
  },
};

const Heading = (props) => {

  const { color, children, inline, level, tracking, mb, override, size, truncate, uppercase, left, right, center, weight } = props;

  const Component = level !== 'text' ? `h${level}` : level;

  const style = [
    styles.base,
    size && styles.size[size],
    mb && styles.mb[mb],
    weight && styles.weight[weight],
    color && styles.color[color],
    tracking && styles.tracking[tracking],
    truncate && styles.variant.truncate,
    uppercase && styles.variant.uppercase,
    left && styles.variant.left,
    right && styles.variant.right,
    center && styles.variant.center,
    inline && styles.variant.inline,
    override && override,
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

Heading.defaultProps = {
  color: "base",
  level: 2,
  tracking: "small",
  mb: "none",
  override: {},
  size: "medium",
  truncate: false,
  uppercase: false,
  left: true,
  right: false,
  center: false,
  inline: false,
  weight: "bold",
};


Heading.propTypes = {
  /** The heading color*/
  color: PropTypes.oneOf([
    "base",
    "blue",
    "red",
    "white",
    "light",
  ]),
  /** Text for the heading */
  children: PropTypes.node.isRequired,
  /** Creates the heading HTML element */
  level: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    'text',
  ]).isRequired,
  /** Controls the letter spacing */
  tracking: PropTypes.oneOf([
    "none",
    "small",
    "base",
    "large",
    "huge",
  ]),
  /** Margin bottom  */
  mb: PropTypes.oneOf([
    "none",
    "tiny",
    "small",
    "medium",
    "large",
  ]),
  /** Override styles */
  override: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
  /** Declares the font size of the heading */
  size: PropTypes.oneOf([
    "huge",
    "large",
    "medium",
    "small",
    "tiny",
  ]).isRequired,
  /** Whether or not to hide the text overflow with an ellipsis */
  truncate: PropTypes.bool,
  /** Whether or not to set the heading in all caps */
  uppercase: PropTypes.bool,
  /** Whether or not to align left */
  left: PropTypes.bool,
  /** Whether or not to align right */
  right: PropTypes.bool,
  /** Whether or not to align center */
  center: PropTypes.bool,
  /** Whether or not to apply inline-block display property */
  inline: PropTypes.bool,
  /** Adjusts the font weight of the heading */
  weight: PropTypes.oneOf([
    "bold",
    "medium",
    "regular",
    "light",
  ]),
};

Heading.styles = styles;

export default Heading;
