import React from "react";
import PropTypes from "prop-types";
import { flatten } from 'ramda'
import { StyleSheet, css } from "aphrodite";
import { colors, fonts, fontWeight, fontStyles, letterSpacing } from "common/styles/variables";

const styles = {
  base: {
    fontFamily: fonts.sans,
    lineHeight: 1,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
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
      color: colors.brandBlue,
    },
    red: {
      color: colors.brandRed,
    },
    white: {
      color: colors.brandWhite,
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
  },
  letterSpacing: {
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

  const { children, level, size, weight, color, letterSpacing, truncate, uppercase, override } = props;

  const Component = `h${level}`;

  const style = [
    styles.base,
    size && styles.size[size],
    weight && styles.weight[weight],
    color && styles.color[color],
    letterSpacing && styles.letterSpacing[letterSpacing],
    truncate && styles.variant.truncate,
    uppercase && styles.variant.uppercase,
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

Heading.defaultProps = {
  level: 2,
  size: "medium",
  weight: "regular",
  color: "base",
  letterSpacing: "normal",
  truncate: false,
  uppercase: false,
  override: {},
};


Heading.propTypes = {
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
  ]).isRequired,
  /** Declares the font size of the heading */
  size: PropTypes.oneOf([
    "huge",
    "large",
    "medium",
    "small",
    "tiny",
  ]).isRequired,
  /** Adjusts the font weight of the heading */
  weight: PropTypes.oneOf([
    "bold",
    "medium",
    "regular",
    "light",
  ]),
  /** The heading color changes based on importance */
  color: PropTypes.oneOf([
    "base",
    "blue",
    "red",
    "white",
  ]),
  /** Controls the letter spacing */
  letterSpacing: PropTypes.oneOf([
    "none",
    "base",
    "large",
  ]),
  /** Whether or not to hide the text overflow with an ellipsis */
  truncate: PropTypes.bool,
  /** Whether or not to set the heading in all caps */
  Uppercase: PropTypes.bool,
  /** Override styles */
  override: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

Heading.styles = styles;

export default Heading;
