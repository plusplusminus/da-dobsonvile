import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { colors, fonts, fontStyles, fontWeight, letterSpacing, timing } from "common/styles/variables";
import { Icon } from "components"

const hoverStyles = {
  base: {
    textDecoration: "none",
    color: colors.linkHover,
  },
  blue: {
    color: colors.brandBlueHover,
  },
  green: {
    color: colors.brandGreenHover,
  },
  red: {
    color: colors.brandRedHover,
  },
  yellow: {
    color: colors.brandYellowHover,
  },
  white: {
    color: colors.textLightO,
  },
};

const styles = {
  container: {
    base: {
      backgroundColor: colors.baseTransparent,
      color: colors.linkBase,
      border: 0,
      display: "inline-block",
      fontFamily: fonts.sans,
      lineHeight: 1,
      padding: 0,
      textDecoration: "none",
      transition: `color ${timing.fast} ease-in-out`,
      cursor: 'pointer',
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

    tracking:{
      base:{
        letterSpacing: letterSpacing.base,
      },
      small:{
        letterSpacing: letterSpacing.small,
      }
    },

    color: {
      blue: {
        color: colors.brandBlue,
        ":hover": hoverStyles.blue,
        ":focus": hoverStyles.blue,
        ":active": hoverStyles.blue,
      },

      red: {
        color: colors.brandRed,
        ":hover": hoverStyles.red,
        ":focus": hoverStyles.red,
        ":active": hoverStyles.red,
      },

      green: {
        color: colors.brandGreen,
        ":hover": hoverStyles.green,
        ":focus": hoverStyles.green,
        ":active": hoverStyles.green,
      },

      yellow: {
        color: colors.brandYellow,
        ":hover": hoverStyles.yellow,
        ":focus": hoverStyles.yellow,
        ":active": hoverStyles.yellow,
      },

      white: {
        color: colors.brandWhite,
        ":hover": hoverStyles.white,
        ":focus": hoverStyles.white,
        ":active": hoverStyles.white,
      },
    },

    variant: {
      uppercase: {
        textTransform: "uppercase",
      },
      lowercase: {
        textTransform: "none",
      }
    },

    size: {
      small: {
        fontSize: "11px",
        '@media (max-width: 576px)': {
          ...fontStyles(`${11 * 1}px`),
        }
      },
      medium: {
        fontSize: "13px",
        '@media (max-width: 576px)': {
          ...fontStyles(`${13 * 1}px`),
        }
      },
      large: {
        fontSize: "14px",
        '@media (max-width: 576px)': {
          ...fontStyles(`${14 * 1}px`),
        }
      },
    },
  },

  icon: {
    base: {
      position: "relative",
      verticalAlign: "baseline",
      color: "inherit",
    }
  },
}

const MoreLink = (props) => {

  const { href, size, children, onClick, uppercase, color, hideIcon, isNested, style, arrowDirection, target, variant, lowercase, weight, tracking } = props

  let Element = "";

  if (isNested) {
    Element = "span";
  } else if (href) {
    Element = "a";
  } else {
    Element = "button";
  }

  const baseStyles = StyleSheet.create({
    base: {
      ...styles.container.base,
      ...(color && styles.container.color[color]),
      ...(uppercase && styles.container.variant.uppercase),
      ...(lowercase && styles.container.variant.lowercase),
      ...(weight && styles.container.weight[weight]),
      ...(tracking && styles.container.tracking[tracking]),
      ...(size && styles.container.size[size]),
      ...style,
    },
    icon: {
      ...styles.icon.base,
      ...(arrowDirection !== "left" && { marginLeft: ".5em" }),
      ...(arrowDirection === "left" && { marginRight: ".5em" }),
    },
  });

  return (
    <Element
      className={css(baseStyles.base)}
      href={href}
      target={target}
      onClick={onClick}
    >
      {!hideIcon && arrowDirection === "left" &&
        <Icon name={`angle-${arrowDirection}`} style={baseStyles.icon} />
      }

      {children}

      {!hideIcon && arrowDirection !== "left" &&
        <Icon name={`angle-${arrowDirection}`} style={baseStyles.icon} />
      }
    </Element>
  );
}

MoreLink.propTypes = {
  /** Direction of the arrow */
  arrowDirection: PropTypes.oneOf([
    "up",
    "down",
    "left",
    "right",
  ]),
  /** Content for the link */
  children: PropTypes.node.isRequired,
  /** Color of the link */
  color: PropTypes.oneOf([
    "blue",
    "red",
    "green",
    "yellow",
    "white",
  ]),
  /** If the arrow icon should be hidden */
  hideIcon: PropTypes.bool,
  /** Where the link should point to */
  href: PropTypes.string,
  /** If the link is nested within another link; makes the container a `span` */
  isNested: PropTypes.bool,
  /** Fires onclick function */
  onClick: PropTypes.func,
  /** Adjusts the font size */
  size: PropTypes.oneOf([
    "large",
    "medium",
    "small",
  ]),
  /** Specifies where to open the linked document */
  target: PropTypes.oneOf([
    "_blank",
    "_parent",
    "_self",
    "_top",
  ]),
  /** Applies textTransform CSS properties */
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  /** Adjusts the font weight*/
  weight: PropTypes.oneOf([
    "bold",
    "medium",
    "regular",
    "light",
  ]),
  /** Adjusts the letterSpacing */
  tracking: PropTypes.oneOf([
    "base",
    "small",
  ]),
};

MoreLink.defaultProps = {
  arrowDirection: "right",
  color: "red",
  hideIcon: false,
  href: null,
  isNested: false,
  onClick: null,
  size: "small",
  target: null,
  uppercase: true,
  lowercase: false,
  tracking: "base",
  weight: "medium",
};

MoreLink.styles = styles;

export default MoreLink;
