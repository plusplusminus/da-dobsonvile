import React from 'react';
import PropTypes from 'prop-types';
import { flatten } from 'ramda'
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, letterSpacing, colors, spacing } from 'common/styles/variables';

const hoverStyles = {
  base: {
    borderBottom: "1px solid",
  },
}

const styles = {
  base: {
    fontFamily: fonts.sans,
    lineHeight: 1,
    margin: 0,
    padding: 0,
  },

  size: {
    tiny: {
      ...fontStyles("12px", `${13 * 1.5}px`),
      '@media (max-width: 576px)': {
        ...fontStyles(`${12 * 0.80}px`, `${12 * 1.25}px`),
      }
    },
    small: {
      ...fontStyles("13px", `${13 * 1.5}px`),
      '@media (max-width: 576px)': {
        ...fontStyles(`${13 * 0.80}px`, `${13 * 1.25}px`),
      }
    },
    medium: {
      ...fontStyles("16px", `${16 * 1.5}px`),
      '@media (max-width: 576px)': {
        ...fontStyles(`${16 * 0.80}px`, `${16 * 1.25}px`),
      }
    },
    large: {
      ...fontStyles("18px", `${18 * 1.5}px`),
      '@media (max-width: 576px)': {
        ...fontStyles(`${18 * 0.80}px`, `${18 * 1.25}px`),
      }
    },
    huge: {
      ...fontStyles("20px", `${20 * 1.5}px`),
      '@media (max-width: 576px)': {
        ...fontStyles(`${20 * 0.80}px`, `${20 * 1.25}px`),
      }
    },
  },

  mb: {
    none: {
      marginBottom: spacing.space0,
    },
    small: {
      marginBottom: spacing.space1,
    },
    medium: {
      marginBottom: spacing.space2,
    },
    large: {
      marginBottom: spacing.space4,
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
    light: {
      color: colors.textLight,
    },
    light0: {
      color: colors.textLightO,
    },
    white: {
      color: colors.textWhite,
    },
    red: {
      color: colors.textRed,
    },
  },

  hover:{
    cursor: 'pointer',
    borderBottom: '1px solid transparent',
    ":hover": hoverStyles.base,
    ":focus": hoverStyles.base,
    ":active": hoverStyles.base,
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
    justify: {
      textAlign: "justify",
    },
  },
};

const Copy = (props) => {

  const { color, children, hover, html, mb, override, size, truncate, uppercase, intro, left, right, center, justify, weight, isParent } = props;

  let Element = "";

  if (isParent) {
    Element = "span";
  } else {
    Element = "p";
  }

  const style = [
    styles.base,
    size && styles.size[size],
    mb && styles.mb[mb],
    hover && styles.hover,
    weight && styles.weight[weight],
    color && styles.color[color],
    truncate && styles.variant.truncate,
    uppercase && styles.variant.uppercase,
    left && styles.variant.left,
    right && styles.variant.right,
    center && styles.variant.center,
    justify && styles.variant.justify,
    override && override,
  ]

  const temp = StyleSheet.create({
    copy: style.reduce((result, item) => {
      if (item) {
        return {
          ...result,
          ...item,
        };
      }
      return result;
    }, {}),
  });

  if (html) {
    return (
      <div
        className={`${css(temp.copy)} ${intro ? "intro" : ""}`}
        dangerouslySetInnerHTML={{__html:html}}
      />
    );
  }

  return (
    <Element
      className={css(temp.copy)}
    >
      {children}
    </Element>
  );
}

Copy.defaultProps = {
  color: "base",
  mb: "medium",
  override: {},
  size: "medium",
  isParent: false,
  truncate: false,
  uppercase: false,
  left: true,
  right: false,
  center: false,
  justify: false,
  weight: "light",
  intro: false,
  hover: false,
}

Copy.propTypes = {
  /** The copy color */
  color: PropTypes.oneOf([
    "base",
    "blue",
    "textBase",
    "light",
    "lightO",
    "white",
    "red",
  ]),
  /** Text for the copy */
  children: PropTypes.node,
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
  /** If the Copy container is a parent of other <p> tags then make the component a 'span' instead*/
  isParent: PropTypes.bool,
  /** Declares the font size of the heading */
  size: PropTypes.oneOf([
    "tiny",
    "small",
    "medium",
    "large",
    "huge",
  ]).isRequired,
  /** Whether or not to style the first <p> difeerntly with .css */
  intro: PropTypes.bool,
  /** Whether or not to change the style on hover */
  hover: PropTypes.bool,
  /** Whether or not to hide the text overflow with an ellipsis */
  truncate: PropTypes.bool,
  /** Whether or not to set the copy in all caps */
  uppercase: PropTypes.bool,
  /** Whether or not to align left */
  left: PropTypes.bool,
  /** Whether or not to align right */
  right: PropTypes.bool,
  /** Whether or not to align center */
  center: PropTypes.bool,
  /** Adjusts the font weight of the copy */
  weight: PropTypes.oneOf([
    "bold",
    "medium",
    "regular",
    "light",
  ]),
};

Copy.styles = styles;

export default Copy;
