import React from "react";
import PropTypes from "prop-types";
import * as R from "ramda";
import { StyleSheet, css } from "aphrodite";
import { colors, fonts, fontWeight, fontStyles, letterSpacing, spacing } from "common/styles/variables";


const hoverStyles = {
  base: {
    textDecoration: "none",
    color: colors.textBaseHover,
  },
  blue: {
    color: colors.textBlueHover,
  },
  green: {
    color: colors.textGreenHover,
  },
  red: {
    color: colors.brandRedHover,
  },
  yellow: {
    color: colors.brandYellowHover,
  },
  white: {
    color: colors.textWhiteHover,
  },
  light: {
    color: colors.textLightHover,
  },
};

const styles = {
  base: {
    fontFamily: fonts.sans,
    lineHeight: 1,
    margin: 0,
    padding: 0,
  },

  size: {
    tiny: {
      ...fontStyles(`${13 * 1}px`, `${13 * 1.25}px`),
      '@media (min-width: 576px)': {
        ...fontStyles("13px", `${13 * 1.25}px`),
      }
    },
    small: {
      ...fontStyles(`${16 * 0.90}px`, `${16 * 1.25}px`),
      '@media (min-width: 576px)': {
        ...fontStyles("16px", `${16 * 1.25}px`),
      }
    },
    medium: {
      ...fontStyles(`${20 * 0.80}px`, `${20 * 1.25}px`),
      '@media (min-width: 576px)': {
        ...fontStyles("20px", `${20 * 1.25}px`),
      }
    },
    large: {
      ...fontStyles(`${25 * 0.80}px`, `${25 * 1.25}px`),
      '@media (min-width: 576px)': {
        ...fontStyles("25px", `${25 * 1.25}px`),
      }
    },
    huge: {
      ...fontStyles(`${49 * 0.80}px`, `${49 * 1}px`),
      '@media (min-width: 576px)': {
        ...fontStyles("49px", `${49 * 1.25}px`),
      }
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
      "@media (max-width: 576px)": {
        marginBottom: spacing.space2,
      },
    },
    large: {
      marginBottom: spacing.space6,
      "@media (max-width: 576px)": {
        marginBottom: spacing.space3,
      },

    },
    huge: {
      marginBottom: spacing.space9,
      "@media (max-width: 576px)": {
        marginBottom: spacing.space4,
      },
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
  hover: {
    cursor: "pointer",
  },
  color: {
    base: {
      color: colors.textBase,
      hover: {
        ":hover": hoverStyles.base,
        ":focus": hoverStyles.base,
        ":active": hoverStyles.base,
      },
    },
    blue: {
      color: colors.textBlue,
      hover: {
        ":hover": hoverStyles.blue,
        ":focus": hoverStyles.blue,
        ":active": hoverStyles.blue,
      },
    },
    red: {
      color: colors.textRed,
      hover: {
        ":hover": hoverStyles.red,
        ":focus": hoverStyles.red,
        ":active": hoverStyles.red,
      },
    },
    light: {
      color: colors.textLight,
      hover: {
        ":hover": hoverStyles.light,
        ":focus": hoverStyles.light,
        ":active": hoverStyles.light,
      },
    },
    white: {
      color: colors.textWhite,
      hover: {
        ":hover": hoverStyles.white,
        ":focus": hoverStyles.white,
        ":active": hoverStyles.white,
      },
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
    noWrap: {
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
  const { color, children, hover, inline, level, tracking, mb, override, size, truncate, noWrap, uppercase, left, right, center, weight } = props;

  const Component = level !== "text" ? `h${level}` : level;

  const style = [
    styles.base,
    size && styles.size[size],
    mb && styles.mb[mb],
    weight && styles.weight[weight],
    color && styles.color[color],
    hover && styles.hover,
    hover && styles.color[color].hover,
    tracking && styles.tracking[tracking],
    truncate && styles.variant.truncate,
    noWrap && styles.variant.noWrap,
    uppercase && styles.variant.uppercase,
    left && styles.variant.left,
    right && styles.variant.right,
    center && styles.variant.center,
    inline && styles.variant.inline,
    override && override,
  ];

  // console.log(style);

  const temp = StyleSheet.create({
    heading: style.reduce((result, item) => {
      if (item) {
        return {
          ...result,
          ...R.mergeWith(R.merge, result, item)
        }
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
};

Heading.defaultProps = {
  color: "base",
  hover: false,
  level: 2,
  tracking: "small",
  mb: "none",
  override: {},
  size: "medium",
  truncate: false,
  noWrap: false,
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
    "text",
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
  /** Whether or not to change the color on hover */
  hover: PropTypes.bool,
  /** Whether or not to hide the text overflow with an ellipsis */
  truncate: PropTypes.bool,
  /** Whether or not to prevent the text from wrapping */
  noWrap: PropTypes.bool,
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
